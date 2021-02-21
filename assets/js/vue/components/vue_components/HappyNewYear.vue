<template>
  <div id="happy-new-year">
    <div class="pyro" v-if="year">
      <div class="before"></div>
      <div class="after"></div>
      <div class="text">Happy New Year {{ year }}!</div>
    </div>
    <div v-else class="text-center">No Year</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HappyNewYear",
  computed: {
    ...mapGetters(["year"]),
  },
};
</script>

<style>
</style>
