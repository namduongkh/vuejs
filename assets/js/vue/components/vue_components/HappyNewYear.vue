<template>
  <div id="happy-new-year" class="bg-info">
    <div class="pyro" v-if="year" @click="setYear()">
      <div class="before"></div>
      <div class="after"></div>
      <div class="text">Happy New Year {{ year }}!</div>
    </div>
    <div v-else class="text-center">No Year</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HappyNewYear",
  computed: {
    ...mapGetters(["year"]),
  },
  methods: {
    ...mapActions(["setYear"]),
  },
};
</script>

<style>
</style>
