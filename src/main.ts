import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 引入 Vant 组件库
import Vant from 'vant';

// 引入 Vant 样式
import 'vant/lib/index.css';
const app = createApp(App);
// // 全局使用 Vant
app.use(Vant);

createApp(App).use(store).use(router).mount('#app')
