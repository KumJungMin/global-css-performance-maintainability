import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/base.css';
import './assets/front.css';
import './assets/layout.css';
import './assets/reset.css';
import './assets/setting-market.css';

createApp(App).use(router).mount('#app');
