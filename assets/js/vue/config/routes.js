
import Introduction from "../components/Introduction.vue";
import VueComponent from "../components/VueComponent.vue";
import Router from "../components/Router.vue";
import Vuex from "../components/Vuex.vue";

const routes = [
  {
    path: "/",
    component: Introduction,
    name: 'Introduction',
    meta: {
      text: "Introduction"
    }
  },
  {
    path: "/Component",
    component: VueComponent,
    name: 'Component',
    meta: {
      text: "Component"
    }
  },
  {
    path: "/Router",
    component: Router,
    name: 'Router',
    meta: {
      text: "Router"
    }
  },
  {
    path: "/Vuex",
    component: Vuex,
    name: 'Vuex',
    meta: {
      text: "Vuex"
    }
  }
]

export default routes
