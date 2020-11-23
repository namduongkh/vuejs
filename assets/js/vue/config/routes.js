
import S from "../components/S.vue";
import O from "../components/O.vue";
import L from "../components/L.vue";
import I from "../components/I.vue";
import D from "../components/D.vue";

const routes = [
  {
    path: "/",
    component: S,
    name: 'S',
    meta: {
      text: "S"
    }
  },
  {
    path: "/O",
    component: O,
    name: 'O',
    meta: {
      text: "O"
    }
  },
  {
    path: "/L",
    component: L,
    name: 'L',
    meta: {
      text: "L"
    }
  },
  {
    path: "/I",
    component: I,
    name: 'I',
    meta: {
      text: "I"
    }
  },
  {
    path: "/D",
    component: D,
    name: 'D',
    meta: {
      text: "D"
    }
  }
]

export default routes
