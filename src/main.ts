import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/base.css';
import './assets/front.css';
import './assets/layout.css';
import './assets/reset.css';
import './assets/setting-market.css';

new PerformanceObserver((entryList) => {
  const fcp = entryList.getEntriesByName('first-contentful-paint')[0];
  if (fcp) console.log(`[🟢 FCP] ${fcp.startTime.toFixed(2)}ms`);
}).observe({ type: 'paint', buffered: true });

new PerformanceObserver((entryList) => {
  const lcp = entryList.getEntries().at(-1);
  if (lcp) console.log(`[🟡 LCP] ${lcp.startTime.toFixed(2)}ms`);
}).observe({ type: 'largest-contentful-paint', buffered: true });

createApp(App).use(router).mount('#app');
