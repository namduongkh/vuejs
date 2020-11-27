<template>
  <div class="phase">
    <h2>Liskov substitution principle</h2>
    <blockquote class="blockquote phase-step">
      Objects in a program should be replaceable with instances of their
      subtypes without altering the correctness of that program.
    </blockquote>

    <!-- <div class="phase-step">
      <div class="d-flex align-items-center justify-content-center">
        <ImageCircle src="./assets/img/dunghuynh.png" />
        <div class="line"></div>
        <ImageCircle src="./assets/img/lottery.jpg" />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6 phase-step">
        <ClassExposer
          :config="{
            name: 'NumberGenerator2',
            actions: [actions.generate2],
          }"
        />
        <ClassExposer
          :config="{
            name: 'NumberGenerator3 < NumberGenerator2',
            actions: [actions.generate3],
          }"
        />
      </div>
      <div class="col-sm-6 phase-step">
        <ClassExposer
          :config="{
            name: 'NumberGenerator2',
            actions: [actions.generate2, actions.generate3WithError],
          }"
        />
      </div>
    </div> -->

    <div class="phase-step">
      <div class="d-flex align-items-center justify-content-center">
        <ImageCircle src="./assets/img/laptop.png" />
        <div class="line"></div>
        <ImageCircle src="./assets/img/pc.svg" />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6 phase-step">
        <ClassExposer
          :config="{
            name: 'Dev',
            actions: [actions.rubyRemote],
          }"
        />
        <ClassExposer
          :config="{
            name: 'RubyDev < Dev',
            actions: [actions.rubyRemote],
          }"
        />
        <ClassExposer
          :config="{
            name: 'DotNetDev < Dev',
            actions: [actions.dotNetRemote],
          }"
        />
      </div>
      <div class="col-sm-6 phase-step">
        <ClassExposer
          :config="{
            name: '<small>module</small> HasLaptop',
            actions: [actions.rubyRemote],
          }"
        />
        <ClassExposer
          :config="{
            name:
              'RubyDev < Dev<br/><small class=\'pl-4\'>include HasLaptop</small>',
            actions: [actions.rubyRemote],
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import actions from "../config/actions";

export default {
  name: "L",
  data() {
    return { actions };
  },
};
</script>

<style>
</style>
