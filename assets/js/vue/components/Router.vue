<template>
  <div>
    <div class="phase-step">
      <h2 class="text-primary">What?</h2>
      <div class="">
        Vue Router is the official router for Vue.js. It deeply integrates with
        Vue.js core to make building Single Page Applications with Vue.js a
        breeze. Features include:
        <ul>
          <li>Nested route/view mapping</li>
          <li>Modular, component-based router configuration</li>
          <li>Route params, query, wildcards</li>
          <li>View transition effects powered by Vue.js' transition system</li>
          <li>Fine-grained navigation control</li>
          <li>Links with automatic active CSS classes</li>
          <li>HTML5 history mode or hash mode, with auto-fallback in IE9</li>
          <li>Customizable Scroll Behavior</li>
        </ul>
        <a href="https://router.vuejs.org/" target="_blank"
          >https://router.vuejs.org/</a
        >
      </div>
    </div>
    <EvanYou />
  </div>
</template>

<script>
import EvanYou from "./vue_components/EvanYou.vue";

export default {
  name: "Router",
  components: { EvanYou },
};
</script>

<style>
</style>
