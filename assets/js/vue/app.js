import Vue from "vue";
import store from "./config/store";
import router from "./config/router";

import App from "./components/app.vue";
import ClassExposer from "./components/ClassExposer.vue";
import ImageCircle from "./components/ImageCircle.vue";

Vue.component('ClassExposer', ClassExposer);
Vue.component('ImageCircle', ImageCircle);

const app = new Vue({
  store,
  router,
  components: {
    App
  },
  created() { }
}).$mount('#app')

export default app;
