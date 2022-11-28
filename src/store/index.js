import storage from "@/utils/storage.js";
import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import { actions } from "./actions.js";
import { mutations } from "@/store/mutations.js";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

//遍历模块
const modules = {};
const files = require.context("./modules", false, /\.js$/);
files.keys().forEach((key) => {
  modules[key.replace(/(modules|\/|\.|js)/g, "")] = {
    ...files(key).default,
    namespcae: true,
  };
});

const state = () => ({ token: storage.get("token") });

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
