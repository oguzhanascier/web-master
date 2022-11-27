import Vue from "vue";
import App from "./App.vue";
import "./style/main.css";

import VueToastify from "vue-toastify";
Vue.use(VueToastify);

/* Router. */

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../src/components/Home.vue";
import Todo from "../src/components/ToDo.vue";

const router = new VueRouter({
  routes: [
    { path: "", component: Home },
    { path: "/todo", component: Todo },
    {path:"*", redirect:"/"},
  ],
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
