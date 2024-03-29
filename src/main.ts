import './assets/main.css'

import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import { useRoute } from 'vue-router'
import { DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'

const app = createApp(App);
app.use(Antd);
app.use(useRoute);
app.use(DatePicker);
app.mount('#app');
