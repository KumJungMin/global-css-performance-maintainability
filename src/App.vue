<script setup lang="ts">
import MarketPage from './components/MarketPage.vue';
</script>

<template>
  <div class="root">
    <div class="wrap pt-20 pl-20">
      <h1 class="mb-20" style="color: var(--color-primary)">
        Global CSS 테스트
      </h1>
      <p class="pb-20" style="color: var(--color-dark)">
        이 컴포넌트는 layout.css와 base.css의 클래스 유틸리티를 테스트하기 위한
        것입니다.
      </p>

      <div class="popup-wrap mt-20 p-20">
        <p style="color: var(--color-secondary)">
          팝업 스타일 테스트 박스입니다.
        </p>
      </div>
    </div>
    <MarketPage />
  </div>
</template>
