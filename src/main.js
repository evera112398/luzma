import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/styles.scss'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const appInstance = createApp(App);
appInstance.use(router);
appInstance.use(VueSweetalert2);
appInstance.mount('#app')
