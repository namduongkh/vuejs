<template>
  <div class="class-exposer">
    <h4 class="class-exposer_name" v-html="config.name"></h4>
    <ul>
      <li
        class="class-exposer_action"
        v-for="(action, index) in config.actions"
        :key="'action' + index"
      >
        <div class="class-exposer_action-name">
          {{ action.name }}
        </div>
        <div class="class-exposer_action-code" v-html="action.code"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ClassExposer",
  props: {
    config: { type: Object, default: () => {} },
  },
};
</script>

<style>
</style>
