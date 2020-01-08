import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./utils/rem.js";
import "lib-flexible/flexible";     
import "swiper/css/swiper.min.css";
import axios from "axios";
import store from "./store";

// import VueStickto from 'vue-stickto'
// Vue.use(VueStickto)

import baseComponents from "./plugins/baseComponents";
Vue.use(baseComponents);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
new Vue({
    render: h => h(App),
    router,
    store,
    components: { App },
    template: "<App/>"
}).$mount("#app");
