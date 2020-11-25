<template>
  <div class="phase">
    <h2>Open–closed principle</h2>
    <blockquote class="blockquote phase-step">
      Software entities ... should be open for extension, but closed for
      modification.
    </blockquote>

    <div class="phase-step">
      <div class="d-flex align-items-center justify-content-center">
        <ImageCircle src="./assets/img/dunghuynh.png" />
        <div class="line"></div>
        <ImageCircle src="./assets/img/lottery.jpg" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <ClassExposer
          class="phase-step"
          :config="{
            name: 'NumberAnalyst',
            actions: [actions.analyzeWithFormular],
          }"
        />
        <ul class="phase-step">
          <li>Formula change</li>
          <li>Multiple formula</li>
        </ul>
      </div>
      <div class="col-md-6 phase-step">
        <ClassExposer
          :config="{
            name: 'NumberAnalyst',
            actions: [actions.analyzeWithFormularAndParams],
          }"
        />
        <ClassExposer
          :config="{
            name: 'Formula1',
            actions: [actions.formula1],
          }"
        />
        <ClassExposer
          :config="{
            name: 'Formula2',
            actions: [actions.formula2],
          }"
        />
        <ClassExposer
          :config="{
            name: 'Formula3',
            actions: [actions.formula3],
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import actions from "../config/actions";

export default {
  name: "O",
  data() {
    return { actions };
  },
};
</script>

<style>
</style>
