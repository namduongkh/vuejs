<template>
  <div class="phase">
    <h2>Interface segregation principle</h2>
    <blockquote class="blockquote phase-step">
      Many client-specific interfaces are better than one general-purpose
      interface
    </blockquote>
  </div>
</template>

<script>
import actions from "../config/actions";

export default {
  name: "I",
  data() {
    return { actions };
  },
};
</script>

<style>
</style>
