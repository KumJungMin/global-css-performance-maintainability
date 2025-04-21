<template>
  <div class="additional-page">
    <div class="domain-header">1</div>
    <div class="domain-footer">2</div>
    <div class="domain-card">2</div>
  </div>
</template>

<style>
.additional-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
}

.domain-header {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.domain-footer {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: white;
  text-align: center;
  font-size: 14px;
}

.domain-card {
  width: 300px;
  padding: 15px;
  margin: 10px 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.domain-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.additional-page .domain-card h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.additional-page .domain-card p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #666;
}

.additional-page .domain-card a {
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  color: #4caf50;
  text-decoration: none;
}

.additional-page .domain-card a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .domain-header {
    font-size: 20px;
  }

  .domain-footer {
    font-size: 12px;
  }

  .domain-card {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .domain-header {
    font-size: 18px;
  }

  .domain-footer {
    font-size: 10px;
  }

  .domain-card {
    padding: 10px;
  }
}
</style>
