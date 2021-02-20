<template>
  <div class="intro" @click="changePhase()">
    <div class="intro-phase" :class="'intro_phase_' + phase">
      <div class="intro-image text-center">
        <img src="https://vuejs.org/images/logo.png" alt="" />
      </div>
      <h1 class="intro_maintext">Vue JS</h1>
      <div class="intro_info_text text-center">
        Vue (pronounced /vjuː/, like view) is a progressive framework for
        building user interfaces. Unlike other monolithic frameworks, Vue is
        designed from the ground up to be incrementally adoptable. The core
        library is focused on the view layer only, and is easy to pick up and
        integrate with other libraries or existing projects. On the other hand,
        Vue is also perfectly capable of powering sophisticated Single-Page
        Applications when used in combination with modern tooling and supporting
        libraries.
        <div>
          <a href="https://vuejs.org/" target="_blank">https://vuejs.org/</a>
        </div>
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
      maxPhase: 2,
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
