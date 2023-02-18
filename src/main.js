import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TDesign from "tdesign-vue";
import store from "./store";
import "./permissions.js";
import "./directive";
// 引入组件库全局样式资源
import "tdesign-vue/dist/reset.css";

import "tdesign-vue/es/style/index.css";
import "@/assets/style/base.scss";

import { charts } from "@jiaminghi/data-view";

Vue.config.productionTip = false;
Vue.use(TDesign);
Vue.use(charts);
// 暂时取消MockJS引入，用ApiFox代替
// process.env.NODE_ENV === "development" && require("./mock");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
