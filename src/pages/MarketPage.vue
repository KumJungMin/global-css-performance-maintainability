<template>
  <div class="market-page">
    <header class="market-header">
      <h1 class="market-title">Market Page</h1>
    </header>
    <section class="market-description">
      <div class="market-filters">
        <h2 class="filters-title">Filters</h2>
      </div>
      <div class="market-items">
        <h2 class="items-price">Items</h2>
      </div>
    </section>
    <footer class="market-footer">
      <p class="footer-text">© 2025 Market Inc.</p>
    </footer>
  </div>
</template>

<style>
.market-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.market-container .logo {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
}

.market-container .title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.market-container .sub-title {
  font-size: 1rem;
  color: #666;
  text-align: center;
}

.market-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.market-header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
}

.market-title {
  font-size: 2rem;
  margin: 0;
}

.market-description {
  flex: 1;
  padding: 20px;
}

.market-filters {
  margin-bottom: 20px;
}

.filters-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.market-items {
  margin-top: 20px;
}

.items-price {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.market-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}

.footer-text {
  margin: 0;
  font-size: 0.9rem;
}

.market-page a {
  color: #4caf50;
  text-decoration: none;
}

.market-page a:hover {
  text-decoration: underline;
}

.market-page button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
}

.market-page button:hover {
  background-color: #45a049;
}

.market-page input[type='text'],
.market-page input[type='number'],
.market-page select {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

.market-page input[type='text']:focus,
.market-page input[type='number']:focus,
.market-page select:focus {
  border-color: #4caf50;
  outline: none;
}

.market-page .card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.market-page .card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.market-page .card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.market-page .card-description {
  font-size: 0.9rem;
  color: #666;
}

.market-page .card-price {
  font-size: 1rem;
  font-weight: bold;
  color: #4caf50;
}

.market-page .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.market-page .grid-item {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  text-align: center;
}

.market-page .grid-item img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.market-page .grid-item h3 {
  font-size: 1rem;
  margin: 10px 0;
}

.market-page .grid-item p {
  font-size: 0.9rem;
  color: #666;
}

.market-page .grid-item button {
  margin-top: 10px;
}

.market-page .pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.market-page .pagination button {
  margin: 0 5px;
}

.market-page .pagination button.active {
  background-color: #4caf50;
  color: white;
}

.market-page .pagination button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.market-page .alert {
  padding: 15px;
  margin: 10px 0;
  border-radius: 4px;
  font-size: 0.9rem;
}

.market-page .alert.success {
  background-color: #dff0d8;
  color: #3c763d;
}

.market-page .alert.error {
  background-color: #f2dede;
  color: #a94442;
}

.market-page .alert.warning {
  background-color: #fcf8e3;
  color: #8a6d3b;
}

.market-page .alert.info {
  background-color: #d9edf7;
  color: #31708f;
}

.market-page .badge {
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.8rem;
  color: white;
  background-color: #4caf50;
  border-radius: 12px;
}

.market-page .badge.secondary {
  background-color: #666;
}

.market-page .badge.danger {
  background-color: #f44336;
}

.market-page .badge.warning {
  background-color: #ff9800;
}

.market-page .badge.info {
  background-color: #2196f3;
}

.market-page .tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.market-page .tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: white;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.market-page .tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.market-page .progress-bar {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
}

.market-page .progress-bar .progress {
  height: 20px;
  background-color: #4caf50;
  width: 50%;
  transition: width 0.3s;
}

.market-page .progress-bar .progress-label {
  text-align: center;
  font-size: 0.8rem;
  color: white;
  line-height: 20px;
}
.market-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.market-header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
}

.market-title {
  font-size: 2rem;
  margin: 0;
}

.market-description {
  flex: 1;
  padding: 20px;
}

.market-filters {
  margin-bottom: 20px;
}

.filters-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.market-items {
  margin-top: 20px;
}

.items-price {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.market-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}

.footer-text {
  margin: 0;
  font-size: 0.9rem;
}

.market-page a {
  color: #4caf50;
  text-decoration: none;
}

.market-page a:hover {
  text-decoration: underline;
}

.market-page button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
}

.market-page button:hover {
  background-color: #45a049;
}

.market-page input[type='text'],
.market-page input[type='number'],
.market-page select {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

.market-page input[type='text']:focus,
.market-page input[type='number']:focus,
.market-page select:focus {
  border-color: #4caf50;
  outline: none;
}

.market-page .card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.market-page .card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.market-page .card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.market-page .card-description {
  font-size: 0.9rem;
  color: #666;
}

.market-page .card-price {
  font-size: 1rem;
  font-weight: bold;
  color: #4caf50;
}

.market-page .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.market-page .grid-item {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  text-align: center;
}

.market-page .grid-item img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.market-page .grid-item h3 {
  font-size: 1rem;
  margin: 10px 0;
}

.market-page .grid-item p {
  font-size: 0.9rem;
  color: #666;
}

.market-page .grid-item button {
  margin-top: 10px;
}

.market-page .pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.market-page .pagination button {
  margin: 0 5px;
}

.market-page .pagination button.active {
  background-color: #4caf50;
  color: white;
}

.market-page .pagination button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.market-page .alert {
  padding: 15px;
  margin: 10px 0;
  border-radius: 4px;
  font-size: 0.9rem;
}

.market-page .alert.success {
  background-color: #dff0d8;
  color: #3c763d;
}

.market-page .alert.error {
  background-color: #f2dede;
  color: #a94442;
}

.market-page .alert.warning {
  background-color: #fcf8e3;
  color: #8a6d3b;
}

.market-page .alert.info {
  background-color: #d9edf7;
  color: #31708f;
}

.market-page .badge {
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.8rem;
  color: white;
  background-color: #4caf50;
  border-radius: 12px;
}

.market-page .badge.secondary {
  background-color: #666;
}

.market-page .badge.danger {
  background-color: #f44336;
}

.market-page .badge.warning {
  background-color: #ff9800;
}

.market-page .badge.info {
  background-color: #2196f3;
}

.market-page .tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.market-page .tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: white;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.market-page .tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.market-page .progress-bar {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
}

.market-page .progress-bar .progress {
  height: 20px;
  background-color: #4caf50;
  width: 50%;
  transition: width 0.3s;
}

.market-page .progress-bar .progress-label {
  text-align: center;
  font-size: 0.8rem;
  color: white;
  line-height: 20px;
}
.market-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.market-header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
}

.market-title {
  font-size: 2rem;
  margin: 0;
}

.market-description {
  flex: 1;
  padding: 20px;
}

.market-filters {
  margin-bottom: 20px;
}

.filters-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.market-items {
  margin-top: 20px;
}

.items-price {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.market-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}

.footer-text {
  margin: 0;
  font-size: 0.9rem;
}

.market-page a {
  color: #4caf50;
  text-decoration: none;
}

.market-page a:hover {
  text-decoration: underline;
}

.market-page button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
}

.market-page button:hover {
  background-color: #45a049;
}

.market-page input[type='text'],
.market-page input[type='number'],
.market-page select {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

.market-page input[type='text']:focus,
.market-page input[type='number']:focus,
.market-page select:focus {
  border-color: #4caf50;
  outline: none;
}

.market-page .card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.market-page .card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.market-page .card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.market-page .card-description {
  font-size: 0.9rem;
  color: #666;
}

.market-page .card-price {
  font-size: 1rem;
  font-weight: bold;
  color: #4caf50;
}

.market-page .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.market-page .grid-item {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  text-align: center;
}

.market-page .grid-item img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.market-page .grid-item h3 {
  font-size: 1rem;
  margin: 10px 0;
}

.market-page .grid-item p {
  font-size: 0.9rem;
  color: #666;
}

.market-page .grid-item button {
  margin-top: 10px;
}

.market-page .pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.market-page .pagination button {
  margin: 0 5px;
}

.market-page .pagination button.active {
  background-color: #4caf50;
  color: white;
}

.market-page .pagination button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.market-page .alert {
  padding: 15px;
  margin: 10px 0;
  border-radius: 4px;
  font-size: 0.9rem;
}

.market-page .alert.success {
  background-color: #dff0d8;
  color: #3c763d;
}

.market-page .alert.error {
  background-color: #f2dede;
  color: #a94442;
}

.market-page .alert.warning {
  background-color: #fcf8e3;
  color: #8a6d3b;
}

.market-page .alert.info {
  background-color: #d9edf7;
  color: #31708f;
}

.market-page .badge {
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.8rem;
  color: white;
  background-color: #4caf50;
  border-radius: 12px;
}

.market-page .badge.secondary {
  background-color: #666;
}

.market-page .badge.danger {
  background-color: #f44336;
}

.market-page .badge.warning {
  background-color: #ff9800;
}

.market-page .badge.info {
  background-color: #2196f3;
}

.market-page .tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.market-page .tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: white;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.market-page .tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.market-page .progress-bar {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
}

.market-page .progress-bar .progress {
  height: 20px;
  background-color: #4caf50;
  width: 50%;
  transition: width 0.3s;
}

.market-page .progress-bar .progress-label {
  text-align: center;
  font-size: 0.8rem;
  color: white;
  line-height: 20px;
}
.market-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.market-header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
}

.market-title {
  font-size: 2rem;
  margin: 0;
}

.market-description {
  flex: 1;
  padding: 20px;
}

.market-filters {
  margin-bottom: 20px;
}

.filters-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.market-items {
  margin-top: 20px;
}

.items-price {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.market-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}

.footer-text {
  margin: 0;
  font-size: 0.9rem;
}

.market-page a {
  color: #4caf50;
  text-decoration: none;
}

.market-page a:hover {
  text-decoration: underline;
}

.market-page button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
}

.market-page button:hover {
  background-color: #45a049;
}

.market-page input[type='text'],
.market-page input[type='number'],
.market-page select {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

.market-page input[type='text']:focus,
.market-page input[type='number']:focus,
.market-page select:focus {
  border-color: #4caf50;
  outline: none;
}

.market-page .card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.market-page .card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.market-page .card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.market-page .card-description {
  font-size: 0.9rem;
  color: #666;
}

.market-page .card-price {
  font-size: 1rem;
  font-weight: bold;
  color: #4caf50;
}

.market-page .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.market-page .grid-item {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  text-align: center;
}

.market-page .grid-item img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.market-page .grid-item h3 {
  font-size: 1rem;
  margin: 10px 0;
}

.market-page .grid-item p {
  font-size: 0.9rem;
  color: #666;
}

.market-page .grid-item button {
  margin-top: 10px;
}

.market-page .pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.market-page .pagination button {
  margin: 0 5px;
}

.market-page .pagination button.active {
  background-color: #4caf50;
  color: white;
}

.market-page .pagination button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.market-page .alert {
  padding: 15px;
  margin: 10px 0;
  border-radius: 4px;
  font-size: 0.9rem;
}

.market-page .alert.success {
  background-color: #dff0d8;
  color: #3c763d;
}

.market-page .alert.error {
  background-color: #f2dede;
  color: #a94442;
}

.market-page .alert.warning {
  background-color: #fcf8e3;
  color: #8a6d3b;
}

.market-page .alert.info {
  background-color: #d9edf7;
  color: #31708f;
}

.market-page .badge {
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.8rem;
  color: white;
  background-color: #4caf50;
  border-radius: 12px;
}

.market-page .badge.secondary {
  background-color: #666;
}

.market-page .badge.danger {
  background-color: #f44336;
}

.market-page .badge.warning {
  background-color: #ff9800;
}

.market-page .badge.info {
  background-color: #2196f3;
}

.market-page .tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.market-page .tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: white;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.market-page .tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.market-page .progress-bar {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
}

.market-page .progress-bar .progress {
  height: 20px;
  background-color: #4caf50;
  width: 50%;
  transition: width 0.3s;
}

.market-page .progress-bar .progress-label {
  text-align: center;
  font-size: 0.8rem;
  color: white;
  line-height: 20px;
}
.market-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.market-header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
}

.market-title {
  font-size: 2rem;
  margin: 0;
}

.market-description {
  flex: 1;
  padding: 20px;
}

.market-filters {
  margin-bottom: 20px;
}

.filters-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.market-items {
  margin-top: 20px;
}

.items-price {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.market-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
}

.footer-text {
  margin: 0;
  font-size: 0.9rem;
}

.market-page a {
  color: #4caf50;
  text-decoration: none;
}

.market-page a:hover {
  text-decoration: underline;
}

.market-page button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
}

.market-page button:hover {
  background-color: #45a049;
}

.market-page input[type='text'],
.market-page input[type='number'],
.market-page select {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

.market-page input[type='text']:focus,
.market-page input[type='number']:focus,
.market-page select:focus {
  border-color: #4caf50;
  outline: none;
}

.market-page .card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.market-page .card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.market-page .card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.market-page .card-description {
  font-size: 0.9rem;
  color: #666;
}

.market-page .card-price {
  font-size: 1rem;
  font-weight: bold;
  color: #4caf50;
}

.market-page .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.market-page .grid-item {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  text-align: center;
}

.market-page .grid-item img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.market-page .grid-item h3 {
  font-size: 1rem;
  margin: 10px 0;
}

.market-page .grid-item p {
  font-size: 0.9rem;
  color: #666;
}

.market-page .grid-item button {
  margin-top: 10px;
}

.market-page .pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.market-page .pagination button {
  margin: 0 5px;
}

.market-page .pagination button.active {
  background-color: #4caf50;
  color: white;
}

.market-page .pagination button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.market-page .alert {
  padding: 15px;
  margin: 10px 0;
  border-radius: 4px;
  font-size: 0.9rem;
}

.market-page .alert.success {
  background-color: #dff0d8;
  color: #3c763d;
}

.market-page .alert.error {
  background-color: #f2dede;
  color: #a94442;
}

.market-page .alert.warning {
  background-color: #fcf8e3;
  color: #8a6d3b;
}

.market-page .alert.info {
  background-color: #d9edf7;
  color: #31708f;
}

.market-page .badge {
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.8rem;
  color: white;
  background-color: #4caf50;
  border-radius: 12px;
}

.market-page .badge.secondary {
  background-color: #666;
}

.market-page .badge.danger {
  background-color: #f44336;
}

.market-page .badge.warning {
  background-color: #ff9800;
}

.market-page .badge.info {
  background-color: #2196f3;
}

.market-page .tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.market-page .tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: white;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.market-page .tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.market-page .progress-bar {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
}

.market-page .progress-bar .progress {
  height: 20px;
  background-color: #4caf50;
  width: 50%;
  transition: width 0.3s;
}

.market-page .progress-bar .progress-label {
  text-align: center;
  font-size: 0.8rem;
  color: white;
  line-height: 20px;
}
</style>
