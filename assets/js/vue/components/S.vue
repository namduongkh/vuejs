<template>
  <div class="phase">
    <h2>Single-responsibility principle</h2>
    <blockquote class="blockquote phase-step">
      A class should only have a single responsibility, that is, only changes to
      one part of the software's specification should be able to affect the
      specification of the class.
    </blockquote>

    <div class="phase-step">
      <div class="d-flex align-items-center justify-content-center">
        <ImageCircle src="/assets/img/dunghuynh.png" />
        <div class="line"></div>
        <ImageCircle src="/assets/img/lottery.jpg" />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <ClassExposer
          class="phase-step"
          :config="{
            name: 'Computing',
            actions: [actions.fetch_number, actions.analyze],
          }"
        />
        <ul class="phase-step">
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
      <div class="col-md-6 phase-step">
        <ClassExposer
          :config="{
            name: 'NumberFetcher',
            actions: [actions.fetch_number],
          }"
        />
        <ClassExposer
          :config="{
            name: 'NumberAnalyst',
            actions: [actions.analyze],
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import actions from "../config/actions";

export default {
  name: "S",
  data() {
    return { actions };
  },
};
</script>

<style>
</style>
