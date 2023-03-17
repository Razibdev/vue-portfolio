require('./bootstrap');
import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import router from "./router/index.js";
import store from "./store/index.js";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
const token = `Bearer ${localStorage.getItem("token")}`;
axios.defaults.headers.common["Authorization"] = token;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// axios.defaults.withCredentials = true;

// axios.interceptors.response.use(undefined, function (error) {
//   if (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       // store.dispatch("LogOut");
//       // return router.push("/login");
//     }
//   }
// });

// User module
import Cart from './modules/cart/index.js';
import FrontEnd from "./modules/frontend/index.js";

//admin module
import AdminModule from './modules/admin/index.js';

import { registerModules } from "./register-modules";
registerModules({
cart: Cart,
frontend: FrontEnd,
adminend: AdminModule

});

const requireComponent = require.context("./baseui/", false,/^\.\/.*$/,"sync");



import User from "./middleware/User.js";
window.User = User;
const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueAxios, axios);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  // const componentName = upperFirst(
  //   camelCase(fileName.replace(/^\.\//, "").replace(/\.\w+$/, ""))
  // );

  const componentName = upperFirst(camelCase(fileName.replace(/^\.\//, "")));
  app.component(componentName, componentConfig.default || componentConfig);
});

app.mount("#app");
