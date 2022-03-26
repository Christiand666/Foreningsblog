import { createApp } from 'vue';
import App from './App.vue';
import router from './Router';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(app)
app.config.globalProperties.hostname="https://localhost:7182"
app.use(router)
app.use(VueAxios, Axios)
app.mount('#app')
createApp(App).mount('#app') 
