<script setup lang="ts"></script>

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

      <router-view></router-view>
    </div>
  </div>
</template>
