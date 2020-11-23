<template>
  <div>
    <ClassExposer
      :config="{ name: 'Test', actions: [{ name: 'perform', code: 'x.run' }, { name: 'perform', code: 'x.run' }] }"
    />
  </div>
</template>

<script>
export default {
  name: "S",
};
</script>

<style>
</style>
