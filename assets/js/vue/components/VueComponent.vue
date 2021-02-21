<template>
  <div>
    <div>
      <List />
    </div>
    <div>
      <h2 class="text-primary">Lifecycle Diagram</h2>
      <div style="padding: 0 12rem">
        <img
          src="https://vuejs.org/images/lifecycle.png"
          class="img-thumbnail"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import List from "./vue_components/list.vue";

export default {
  name: "VueComponent",
  components: { List },
};
</script>

<style>
</style>
