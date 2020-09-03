import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// element-ui注册
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// console.log(process.)
Vue.use(ElementUI);
Vue.config.productionTip = false;
// vant组件引入
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
