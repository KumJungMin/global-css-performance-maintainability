<template>
  <div class="handle-page">
    <header class="handle-header">
      <h1 class="handle-title">handle Page</h1>
    </header>
    <section class="handle-description">
      <div class="handle-filters">
        <h2 class="filters-title">Filters</h2>
      </div>
      <div class="handle-items">
        <h2 class="items-price">Items</h2>
      </div>
    </section>
    <footer class="handle-footer">
      <p class="footer-text">© 2025 handle Inc.</p>
    </footer>
  </div>
</template>

<style>
.handle-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.handle-header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
}

.handle-title {
  margin: 0;
  font-size: 2rem;
}

.handle-description {
  flex: 1;
  padding: 20px;
}

.handle-filters {
  margin-bottom: 20px;
}

.filters-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #4caf50;
}

.handle-items {
  margin-top: 20px;
}

.items-price {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #2196f3;
}

.handle-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}

.footer-text {
  margin: 0;
  font-size: 0.875rem;
}

.handle-page a {
  color: #4caf50;
  text-decoration: none;
}

.handle-page a:hover {
  text-decoration: underline;
}

.handle-page button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
}

.handle-page button:hover {
  background-color: #45a049;
}

.handle-page input[type='text'],
.handle-page input[type='email'],
.handle-page input[type='password'] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.handle-page input[type='text']:focus,
.handle-page input[type='email']:focus,
.handle-page input[type='password']:focus {
  border-color: #4caf50;
  outline: none;
}

.handle-page .card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.handle-page .card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.handle-page .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.handle-page .grid-item {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
}

.handle-page .grid-item:hover {
  background-color: #e0e0e0;
}

.handle-page .alert {
  padding: 15px;
  background-color: #f44336;
  color: white;
  margin-bottom: 20px;
  border-radius: 4px;
}

.handle-page .alert.success {
  background-color: #4caf50;
}

.handle-page .alert.info {
  background-color: #2196f3;
}

.handle-page .alert.warning {
  background-color: #ff9800;
}

.handle-page .progress-bar {
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
}

.handle-page .progress-bar .progress {
  height: 20px;
  background-color: #4caf50;
  width: 50%;
  transition: width 0.3s ease;
}

.handle-page .tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.handle-page .tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: #fff;
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

.handle-page .tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.handle-page .badge {
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.75rem;
  color: white;
  background-color: #4caf50;
  border-radius: 12px;
}

.handle-page .badge.warning {
  background-color: #ff9800;
}

.handle-page .badge.error {
  background-color: #f44336;
}

.handle-page .badge.info {
  background-color: #2196f3;
}

.handle-page .accordion {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px 0;
}

.handle-page .accordion-item {
  border-bottom: 1px solid #ddd;
}

.handle-page .accordion-item:last-child {
  border-bottom: none;
}

.handle-page .accordion-header {
  padding: 10px;
  background-color: #f1f1f1;
  cursor: pointer;
}

.handle-page .accordion-content {
  padding: 10px;
  display: none;
  background-color: white;
}

.handle-page .accordion-item.active .accordion-content {
  display: block;
}

.handle-page .tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.handle-page .tab {
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid transparent;
  border-bottom: none;
}

.handle-page .tab.active {
  border-color: #ddd;
  background-color: white;
}

.handle-page .tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-top: none;
}
.handle-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.handle-header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
}

.handle-title {
  margin: 0;
  font-size: 2rem;
}

.handle-description {
  flex: 1;
  padding: 20px;
}

.handle-filters {
  margin-bottom: 20px;
}

.filters-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #4caf50;
}

.handle-items {
  margin-top: 20px;
}

.items-price {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #2196f3;
}

.handle-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}

.footer-text {
  margin: 0;
  font-size: 0.875rem;
}

.handle-page a {
  color: #4caf50;
  text-decoration: none;
}

.handle-page a:hover {
  text-decoration: underline;
}

.handle-page button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
}

.handle-page button:hover {
  background-color: #45a049;
}

.handle-page input[type='text'],
.handle-page input[type='email'],
.handle-page input[type='password'] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.handle-page input[type='text']:focus,
.handle-page input[type='email']:focus,
.handle-page input[type='password']:focus {
  border-color: #4caf50;
  outline: none;
}

.handle-page .card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.handle-page .card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.handle-page .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.handle-page .grid-item {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
}

.handle-page .grid-item:hover {
  background-color: #e0e0e0;
}

.handle-page .alert {
  padding: 15px;
  background-color: #f44336;
  color: white;
  margin-bottom: 20px;
  border-radius: 4px;
}

.handle-page .alert.success {
  background-color: #4caf50;
}

.handle-page .alert.info {
  background-color: #2196f3;
}

.handle-page .alert.warning {
  background-color: #ff9800;
}

.handle-page .progress-bar {
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
}

.handle-page .progress-bar .progress {
  height: 20px;
  background-color: #4caf50;
  width: 50%;
  transition: width 0.3s ease;
}

.handle-page .tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.handle-page .tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: #fff;
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

.handle-page .tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.handle-page .badge {
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.75rem;
  color: white;
  background-color: #4caf50;
  border-radius: 12px;
}

.handle-page .badge.warning {
  background-color: #ff9800;
}

.handle-page .badge.error {
  background-color: #f44336;
}

.handle-page .badge.info {
  background-color: #2196f3;
}

.handle-page .accordion {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px 0;
}

.handle-page .accordion-item {
  border-bottom: 1px solid #ddd;
}

.handle-page .accordion-item:last-child {
  border-bottom: none;
}

.handle-page .accordion-header {
  padding: 10px;
  background-color: #f1f1f1;
  cursor: pointer;
}

.handle-page .accordion-content {
  padding: 10px;
  display: none;
  background-color: white;
}

.handle-page .accordion-item.active .accordion-content {
  display: block;
}

.handle-page .tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.handle-page .tab {
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid transparent;
  border-bottom: none;
}

.handle-page .tab.active {
  border-color: #ddd;
  background-color: white;
}

.handle-page .tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-top: none;
}
.handle-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.handle-header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
}

.handle-title {
  margin: 0;
  font-size: 2rem;
}

.handle-description {
  flex: 1;
  padding: 20px;
}

.handle-filters {
  margin-bottom: 20px;
}

.filters-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #4caf50;
}

.handle-items {
  margin-top: 20px;
}

.items-price {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #2196f3;
}

.handle-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}

.footer-text {
  margin: 0;
  font-size: 0.875rem;
}

.handle-page a {
  color: #4caf50;
  text-decoration: none;
}

.handle-page a:hover {
  text-decoration: underline;
}

.handle-page button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
}

.handle-page button:hover {
  background-color: #45a049;
}

.handle-page input[type='text'],
.handle-page input[type='email'],
.handle-page input[type='password'] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.handle-page input[type='text']:focus,
.handle-page input[type='email']:focus,
.handle-page input[type='password']:focus {
  border-color: #4caf50;
  outline: none;
}

.handle-page .card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.handle-page .card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.handle-page .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.handle-page .grid-item {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
}

.handle-page .grid-item:hover {
  background-color: #e0e0e0;
}

.handle-page .alert {
  padding: 15px;
  background-color: #f44336;
  color: white;
  margin-bottom: 20px;
  border-radius: 4px;
}

.handle-page .alert.success {
  background-color: #4caf50;
}

.handle-page .alert.info {
  background-color: #2196f3;
}

.handle-page .alert.warning {
  background-color: #ff9800;
}

.handle-page .progress-bar {
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
}

.handle-page .progress-bar .progress {
  height: 20px;
  background-color: #4caf50;
  width: 50%;
  transition: width 0.3s ease;
}

.handle-page .tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.handle-page .tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: #fff;
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

.handle-page .tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.handle-page .badge {
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.75rem;
  color: white;
  background-color: #4caf50;
  border-radius: 12px;
}

.handle-page .badge.warning {
  background-color: #ff9800;
}

.handle-page .badge.error {
  background-color: #f44336;
}

.handle-page .badge.info {
  background-color: #2196f3;
}

.handle-page .accordion {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px 0;
}

.handle-page .accordion-item {
  border-bottom: 1px solid #ddd;
}

.handle-page .accordion-item:last-child {
  border-bottom: none;
}

.handle-page .accordion-header {
  padding: 10px;
  background-color: #f1f1f1;
  cursor: pointer;
}

.handle-page .accordion-content {
  padding: 10px;
  display: none;
  background-color: white;
}

.handle-page .accordion-item.active .accordion-content {
  display: block;
}

.handle-page .tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.handle-page .tab {
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid transparent;
  border-bottom: none;
}

.handle-page .tab.active {
  border-color: #ddd;
  background-color: white;
}

.handle-page .tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-top: none;
}
.handle-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.handle-header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
}

.handle-title {
  margin: 0;
  font-size: 2rem;
}

.handle-description {
  flex: 1;
  padding: 20px;
}

.handle-filters {
  margin-bottom: 20px;
}

.filters-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #4caf50;
}

.handle-items {
  margin-top: 20px;
}

.items-price {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #2196f3;
}

.handle-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}

.footer-text {
  margin: 0;
  font-size: 0.875rem;
}

.handle-page a {
  color: #4caf50;
  text-decoration: none;
}

.handle-page a:hover {
  text-decoration: underline;
}

.handle-page button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
}

.handle-page button:hover {
  background-color: #45a049;
}

.handle-page input[type='text'],
.handle-page input[type='email'],
.handle-page input[type='password'] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.handle-page input[type='text']:focus,
.handle-page input[type='email']:focus,
.handle-page input[type='password']:focus {
  border-color: #4caf50;
  outline: none;
}

.handle-page .card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.handle-page .card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.handle-page .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.handle-page .grid-item {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
}

.handle-page .grid-item:hover {
  background-color: #e0e0e0;
}

.handle-page .alert {
  padding: 15px;
  background-color: #f44336;
  color: white;
  margin-bottom: 20px;
  border-radius: 4px;
}

.handle-page .alert.success {
  background-color: #4caf50;
}

.handle-page .alert.info {
  background-color: #2196f3;
}

.handle-page .alert.warning {
  background-color: #ff9800;
}

.handle-page .progress-bar {
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
}

.handle-page .progress-bar .progress {
  height: 20px;
  background-color: #4caf50;
  width: 50%;
  transition: width 0.3s ease;
}

.handle-page .tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.handle-page .tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: #fff;
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

.handle-page .tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.handle-page .badge {
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.75rem;
  color: white;
  background-color: #4caf50;
  border-radius: 12px;
}

.handle-page .badge.warning {
  background-color: #ff9800;
}

.handle-page .badge.error {
  background-color: #f44336;
}

.handle-page .badge.info {
  background-color: #2196f3;
}

.handle-page .accordion {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px 0;
}

.handle-page .accordion-item {
  border-bottom: 1px solid #ddd;
}

.handle-page .accordion-item:last-child {
  border-bottom: none;
}

.handle-page .accordion-header {
  padding: 10px;
  background-color: #f1f1f1;
  cursor: pointer;
}

.handle-page .accordion-content {
  padding: 10px;
  display: none;
  background-color: white;
}

.handle-page .accordion-item.active .accordion-content {
  display: block;
}

.handle-page .tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.handle-page .tab {
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid transparent;
  border-bottom: none;
}

.handle-page .tab.active {
  border-color: #ddd;
  background-color: white;
}

.handle-page .tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-top: none;
}
.handle-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.handle-header {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  text-align: center;
}

.handle-title {
  margin: 0;
  font-size: 2rem;
}

.handle-description {
  flex: 1;
  padding: 20px;
}

.handle-filters {
  margin-bottom: 20px;
}

.filters-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #4caf50;
}

.handle-items {
  margin-top: 20px;
}

.items-price {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #2196f3;
}

.handle-footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}

.footer-text {
  margin: 0;
  font-size: 0.875rem;
}

.handle-page a {
  color: #4caf50;
  text-decoration: none;
}

.handle-page a:hover {
  text-decoration: underline;
}

.handle-page button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
}

.handle-page button:hover {
  background-color: #45a049;
}

.handle-page input[type='text'],
.handle-page input[type='email'],
.handle-page input[type='password'] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.handle-page input[type='text']:focus,
.handle-page input[type='email']:focus,
.handle-page input[type='password']:focus {
  border-color: #4caf50;
  outline: none;
}

.handle-page .card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin: 10px 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.handle-page .card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.handle-page .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.handle-page .grid-item {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
}

.handle-page .grid-item:hover {
  background-color: #e0e0e0;
}

.handle-page .alert {
  padding: 15px;
  background-color: #f44336;
  color: white;
  margin-bottom: 20px;
  border-radius: 4px;
}

.handle-page .alert.success {
  background-color: #4caf50;
}

.handle-page .alert.info {
  background-color: #2196f3;
}

.handle-page .alert.warning {
  background-color: #ff9800;
}

.handle-page .progress-bar {
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
}

.handle-page .progress-bar .progress {
  height: 20px;
  background-color: #4caf50;
  width: 50%;
  transition: width 0.3s ease;
}

.handle-page .tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.handle-page .tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: #333;
  color: #fff;
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

.handle-page .tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.handle-page .badge {
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.75rem;
  color: white;
  background-color: #4caf50;
  border-radius: 12px;
}

.handle-page .badge.warning {
  background-color: #ff9800;
}

.handle-page .badge.error {
  background-color: #f44336;
}

.handle-page .badge.info {
  background-color: #2196f3;
}

.handle-page .accordion {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px 0;
}

.handle-page .accordion-item {
  border-bottom: 1px solid #ddd;
}

.handle-page .accordion-item:last-child {
  border-bottom: none;
}

.handle-page .accordion-header {
  padding: 10px;
  background-color: #f1f1f1;
  cursor: pointer;
}

.handle-page .accordion-content {
  padding: 10px;
  display: none;
  background-color: white;
}

.handle-page .accordion-item.active .accordion-content {
  display: block;
}

.handle-page .tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.handle-page .tab {
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid transparent;
  border-bottom: none;
}

.handle-page .tab.active {
  border-color: #ddd;
  background-color: white;
}

.handle-page .tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-top: none;
}
</style>
