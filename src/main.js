import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TDesign from "tdesign-vue";
import store from "@/store/index.js";
// 引入组件库全局样式资源
import "tdesign-vue/dist/reset.css";

import "tdesign-vue/es/style/index.css";

Vue.config.productionTip = false;
Vue.use(TDesign);

process.env.NODE_ENV === "development" && require("./mock");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
