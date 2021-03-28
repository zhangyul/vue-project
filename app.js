import Vue from 'vue';
import router from './router.js';
import App from "./app.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
new Vue({
    el: '#app',
    router,
    // store,
    render: (create) => create(App)
})