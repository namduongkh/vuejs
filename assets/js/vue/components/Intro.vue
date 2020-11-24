<template>
  <div class="intro" @click="changePhase()">
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
      <div class="intro_info_text text-center">
        In object-oriented computer programming, SOLID is a mnemonic acronym for
        five design principles intended to make software designs more
        understandable, flexible, and maintainable. It is not related to the
        GRASP software design principles. The principles are a subset of many
        principles promoted by American software engineer and instructor Robert
        C. Martin.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  data() {
    return {
      phase: 0,
      maxPhase: 3,
    };
  },
  methods: {
    changePhase() {
      this.phase++;
      if (this.phase > this.maxPhase) this.phase = this.maxPhase;
    },
  },
};
</script>

<style>
</style>
