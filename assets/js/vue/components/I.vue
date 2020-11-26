<template>
  <div class="phase">
    <h2>Interface segregation principle</h2>
    <blockquote class="blockquote phase-step">
      Many client-specific interfaces are better than one general-purpose
      interface
    </blockquote>

    <div class="phase-step">
      <div class="d-flex align-items-center justify-content-center">
        <ImageCircle src="./assets/img/dunghuynh.png" />
        <div class="line"></div>
        <ImageCircle src="./assets/img/lottery.jpg" />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="phase-step">
          <ClassExposer
            :config="{
              name: '<small>module</small> BetMethods',
              actions: [
                actions.betWithMoney,
                actions.betWithCar,
                actions.betWithHourse,
              ],
            }"
          />
          <ClassExposer
            :config="{
              name:
                'DealerDK<br/><small class=\'pl-4\'>include BetMethods</small>',
              actions: [],
            }"
          />
          <ClassExposer
            :config="{
              name:
                'DealerNT<br/><small class=\'pl-4\'>include BetMethods</small>',
              actions: [],
            }"
          />
        </div>
        <ul class="phase-step">
          <li>Nhà cái không chấp nhận nhà và ô tô</li>
        </ul>
      </div>
      <div class="col-sm-6 phase-step">
        <ClassExposer
          :config="{
            name: '<small>module</small> BetMethods',
            actions: [actions.betWithMoney],
          }"
        />
        <ClassExposer
          :config="{
            name: '<small>module</small> AdditionalBetMethods',
            actions: [actions.betWithCar, actions.betWithHourse],
          }"
        />
        <ClassExposer
          :config="{
            name:
              'DealerDK<br/><small class=\'pl-4\'>include BetMethods</small>',
            actions: [],
          }"
        />
        <ClassExposer
          :config="{
            name:
              'DealerNT<br/><small class=\'pl-4\'>include BetMethods</small><br/><small class=\'pl-4\'>include AdditionalBetMethods</small>',
            actions: [],
          }"
        />
      </div>
    </div>
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
