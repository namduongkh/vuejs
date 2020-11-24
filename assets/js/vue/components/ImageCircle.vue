<template>
  <div class="image-circle">
    <div class="content">
      <img :src="src" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCircle",
  props: {
    src: {
      type: String,
    },
  },
};
</script>

<style>
</style>
