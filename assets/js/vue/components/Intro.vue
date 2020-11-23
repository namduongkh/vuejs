<template>
  <div class="intro" @click="togglePhase()">
    <div class="intro-phase" :class="'intro_phase_' + phase">
      <div class="intro_subtext">border: 1px</div>
      <h1 class="intro_maintext">
        S
        <span class="intro_maintext_dot">.</span>
        O
        <span class="intro_maintext_dot">.</span>
        L
        <span class="intro_maintext_dot">.</span>
        I
        <span class="intro_maintext_dot">.</span>
        D
      </h1>
      <div class="intro_subtext text-right">#000000</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  data() {
    return {
      phase: 0,
    };
  },
  methods: {
    togglePhase() {
      this.phase++;
      if (this.phase > 2) this.phase = 0;
    },
  },
};
</script>

<style>
</style>
