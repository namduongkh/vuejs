<template>
  <div class="phase">
    <h2>Dependency inversion principle</h2>
    <blockquote class="blockquote phase-step">
      One should "depend upon abstractions, [not] concretions."
    </blockquote>
  </div>
</template>

<script>
import actions from "../config/actions";

export default {
  name: "D",
  data() {
    return { actions };
  },
};
</script>

<style>
</style>
