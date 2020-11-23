import Vue from "vue";
import store from "./config/store";
import router from "./config/router";

import App from "./components/app.vue";

const app = new Vue({
  store,
  router,
  components: {
    App
  },
  created() { }
}).$mount('#app')

export default app;
