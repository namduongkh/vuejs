<template>
  <div class="text-center bg-success" style="padding: 0 10rem">
    <input type="form-control" v-model="year" placeholder="Enter year" />
    <button @click="setYear(year)" class="btn btn-primary">Set Year</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "YearInput",
  data() {
    return {
      year: null,
    };
  },
  methods: {
    ...mapActions(["setYear"]),
  },
};
</script>

<style>
</style>
