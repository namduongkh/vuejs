import Vue from "vue";
import store from "./config/store";
import router from "./config/router";

import App from "./components/app.vue";
import ClassExposer from "./components/ClassExposer.vue";
import ImageCircle from "./components/ImageCircle.vue";
import CodeHtml from "./components/common/code-html.vue";
import CodeJs from "./components/common/code-js.vue";

Vue.component('ClassExposer', ClassExposer);
Vue.component('ImageCircle', ImageCircle);
Vue.component('CodeHtml', CodeHtml);
Vue.component('CodeJs', CodeJs);

const app = new Vue({
  store,
  router,
  components: {
    App
  },
  created() { }
}).$mount('#app')

export default app;
