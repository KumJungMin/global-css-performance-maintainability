import puppeteer from 'puppeteer';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// 평균 계산
function calculateAverage(values) {
  const sum = values.reduce((acc, v) => acc + v, 0);
  return sum / values.length;
}

// 표준편차 계산
function calculateStandardDeviation(values) {
  const avg = calculateAverage(values);
  const squareDiffs = values.map((v) => Math.pow(v - avg, 2));
  return Math.sqrt(calculateAverage(squareDiffs));
}

async function runSingleMeasurement() {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { width: 1280, height: 800 },
  });
  const page = await browser.newPage();

  // 캐시 비활성화
  await page.setCacheEnabled(false);

  // CSS 리소스 타이밍 실시간 수집
  await page.evaluateOnNewDocument(() => {
    window.__cssEntries = [];
    const obs = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.initiatorType === 'link' && entry.name.endsWith('.css')) {
          window.__cssEntries.push({
            name: entry.name,
            startTime: entry.startTime,
            responseEnd: entry.responseEnd,
            duration: entry.responseEnd - entry.startTime,
          });
        }
      }
    });
    obs.observe({ type: 'resource', buffered: true });
  });

  // 페이지 로드 (DOMContentLoaded 시점까지)
  await page.goto('http://localhost:4173/store', {
    waitUntil: 'domcontentloaded',
  });
  await page.waitForSelector('#app', { timeout: 5000 });

  // 성능 데이터 수집 (FCP 측정 개선)
  const metrics = await page.evaluate(async () => {
    const nav = performance.getEntriesByType('navigation')[0];
    const dcl = nav.domContentLoadedEventStart;

    // 1. FCP 실시간 감지 (PerformanceObserver)
    const fcp = await new Promise((resolve) => {
      let resolved = false;
      const observer = new PerformanceObserver((list) => {
        const fcpEntry = list
          .getEntries()
          .find((e) => e.name === 'first-contentful-paint');
        if (fcpEntry && !resolved) {
          resolved = true;
          observer.disconnect();
          resolve(fcpEntry.startTime);
        }
      });
      observer.observe({ type: 'paint', buffered: true });

      // 2. 타임아웃 안전장치 (5초 후 null 반환)
      setTimeout(() => {
        if (!resolved) {
          observer.disconnect();
          resolve(null);
        }
      }, 5000);
    });

    // 3. 폴백: FCP 미등록인데 #app이 있으면 DCL로 대체
    let finalFcp = fcp;
    if (finalFcp === null && document.querySelector('#app')) {
      finalFcp = nav.domContentLoadedEventStart;
    }

    // DevTools 렌더 블로킹 CSS만 필터
    const blockingCss = window.__cssEntries.filter((e) => e.startTime < dcl);
    const totalCssBlocking = blockingCss.reduce(
      (sum, e) => sum + e.duration,
      0,
    );

    return {
      fcp: finalFcp,
      cssResources: blockingCss,
      totalCssBlocking,
      redirectTime: nav.redirectEnd - nav.redirectStart,
      dnsTime: nav.domainLookupEnd - nav.domainLookupStart,
      tcpTime: nav.connectEnd - nav.connectStart,
      requestTime: nav.responseStart - nav.requestStart,
      responseTime: nav.responseEnd - nav.responseStart,
      domContentLoaded: nav.domContentLoadedEventStart - nav.startTime,
    };
  });

  await browser.close();
  return metrics;
}

async function measureMultipleTimes(runs = 5) {
  console.log(`🚀 시작: ${runs}회 반복 측정`);
  const results = [];

  for (let i = 0; i < runs; i++) {
    console.log(`🔎 ${i + 1}/${runs} 측정 중...`);
    const r = await runSingleMeasurement();
    const fcpStr = r.fcp !== null ? `${r.fcp.toFixed(2)} ms` : 'n/a';
    console.log(
      `   FCP: ${fcpStr}, CSS 블록: ${r.totalCssBlocking.toFixed(2)} ms`,
    );
    results.push(r);
  }

  // 평균·표준편차 계산
  const fields = [
    'fcp',
    'totalCssBlocking',
    'redirectTime',
    'dnsTime',
    'tcpTime',
    'requestTime',
    'responseTime',
    'domContentLoaded',
  ];
  const averages = {},
    stddevs = {};

  for (const f of fields) {
    const vals = results.map((r) => r[f] ?? 0);
    averages[f] = calculateAverage(vals);
    stddevs[f] = calculateStandardDeviation(vals);
  }

  // 리포트 작성
  const report = {
    timestamp: new Date().toISOString(),
    runs,
    results,
    averages,
    standardDeviations: stddevs,
  };

  // 저장
  const dir = './reports';
  await mkdir(dir, { recursive: true });
  const file = path.join(dir, `perf-accurate-${Date.now()}.json`);
  await writeFile(file, JSON.stringify(report, null, 2));
  console.log(`📄 리포트 저장: ${file}`);
}

measureMultipleTimes(50);
