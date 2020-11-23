import Vue from "vue";
import store from "./config/store";
import router from "./config/router";

import App from "./components/app.vue";
import ClassExposer from "./components/ClassExposer.vue";

Vue.component('ClassExposer', ClassExposer);

const app = new Vue({
  store,
  router,
  components: {
    App
  },
  created() { }
}).$mount('#app')

export default app;
