<template>
  <div class="store-page">
    <header class="store-header">
      <h1 class="store-title">store Page</h1>
    </header>
    <section class="store-description">
      <div class="store-filters">
        <h2 class="filters-title">Filters</h2>
      </div>
      <div class="store-items">
        <h2 class="items-price">Items</h2>
      </div>
    </section>
    <footer class="store-footer">
      <p class="footer-text">© 2025 store Inc.</p>
    </footer>
  </div>
</template>

<style scoped>
.store-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.store-header {
  background-color: #f8f9fa;
  padding: 20px;
  width: 100%;
  text-align: center;
}
.store-title {
  font-size: 2em;
  color: #343a40;
}
.store-description {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
}
</style>
