<template>
  <div>
    <ul class="nav nav-tabs-list" id="myTab" role="tablist">
      <li
        class="nav-item"
        v-for="(r, index) in routes"
        :key="'route-link-' + index"
      >
        <router-link
          :to="{ name: r.name }"
          class="nav-link"
          :class="{ active: r.name == $route.name }"
          >{{ r.meta.text }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import routes from "../config/routes";

export default {
  name: "App",
  data() {
    return {
      routes,
    };
  },
};
</script>

<style>
</style>
