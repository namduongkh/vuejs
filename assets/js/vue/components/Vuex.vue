<template>
  <div>
    <div class="mt-5">
      <h2 class="text-primary">What?</h2>
      <div class="text-center" style="padding: 0 10rem">
        <img
          src="https://vuex.vuejs.org/vuex.png"
          class="img-thumbnail"
          alt=""
        />
      </div>
    </div>

    <div class="mt-5">
      <h2 class="text-primary">Core Concepts</h2>
      <ul>
        <li>State</li>
        <li>Getters</li>
        <li>Mutations</li>
        <li>Actions</li>
        <li>Modules</li>
      </ul>
    </div>

    <div class="mt-5">
      <YearInput />
      <HappyNewYear />
    </div>
  </div>
</template>

<script>
import HappyNewYear from "./vue_components/HappyNewYear.vue";
import YearInput from "./vue_components/YearInput.vue";

export default {
  name: "Vuex",
  components: {
    HappyNewYear,
    YearInput
  },
};
</script>

<style>
</style>
