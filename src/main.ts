import { createApp } from 'vue';
import 'virtual:windi.css'; // 用来注入 Windi CSS 所需的样式
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');
