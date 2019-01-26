import Vue from "vue";
import App from "./App.vue";
import router from "./router";

new Vue({
  el: "#admin-app",
  router,
  render: h => h(App)
});


