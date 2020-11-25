<template>
  <div class="phase">
    <h2>Dependency inversion principle</h2>
    <blockquote class="blockquote phase-step">
      One should "depend upon abstractions, [not] concretions."
    </blockquote>

    <div class="phase-step">
      <div class="d-flex align-items-center justify-content-center">
        <ImageCircle src="./assets/img/dunghuynh.png" />
        <div class="line"></div>
        <ImageCircle src="./assets/img/lottery.jpg" />
        <div class="line"></div>
        <ImageCircle src="./assets/img/dealer.png" />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="phase-step">
          <ClassExposer
            :config="{
              name: 'DealProcessor',
              actions: [actions.dealPerform],
            }"
          />
          <ClassExposer
            :config="{
              name: 'DealerDK',
              actions: [actions.dealerAtDK],
            }"
          />
        </div>
        <ul class="phase-step">
          <li>Nhà cái vỡ nợ bỏ trốn</li>
          <li>Nhà cái không may mắn</li>
          <li>Nợ nhà cái quá nhiều</li>
        </ul>
      </div>
      <div class="col-sm-6 phase-step">
        <ClassExposer
          :config="{
            name: 'DealProcessor',
            actions: [actions.dealPerformWithDealer],
          }"
        />
        <ClassExposer
          :config="{
            name: 'DealerDK',
            actions: [actions.dealerAtDK],
          }"
        />
        <ClassExposer
          :config="{
            name: 'DealerNT',
            actions: [actions.dealerAtNT],
          }"
        />
      </div>
    </div>
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
