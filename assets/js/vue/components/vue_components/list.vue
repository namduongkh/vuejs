<template>
  <div>
    <h2 class="text-primary">List User</h2>
    <ul class="list-unstyled">
      <li class="media" v-for="user in users" :key="user.name">
        <img
          class="mr-3"
          style="width: 64px"
          src="https://static.thenounproject.com/png/363640-200.png"
        />
        <div class="media-body">
          <h5 class="mt-0 mb-1">{{ user.name }}</h5>
          <div class="row">
            <div class="col-8">
              <ul>
                <li>
                  Gender:
                  <i class="fa fa-mars" v-if="user.gender == 'male'"></i>
                  <i class="fa fa-venus" v-if="user.gender == 'female'"></i>
                </li>
                <li>Age:{{ user.age }}</li>
                <li>Money:{{ user.money }}</li>
              </ul>
            </div>
            <div class="col-4">
              <input type="text" class="form-control" v-model="user.name" />
              <button class="btn btn-sm btn-info" @click="addMoney(user)">
                Add money
              </button>
              <button class="btn btn-sm btn-info" @click="viewUser(user)">
                View
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <strong>Total money: {{ totalMoney }}</strong>
  </div>
</template>

<script>
import { sumBy } from "lodash";

export default {
  name: "list",
  props: {},
  data() {
    return {
      users: [
        {
          name: "Andrey",
          age: "27",
          gender: "male",
          money: 10,
        },
        {
          name: "Anna",
          age: "28",
          gender: "female",
          money: 20,
        },
        {
          name: "Ben",
          age: "29",
          gender: "male",
          money: 30,
        },
        {
          name: "Carol",
          age: "21",
          gender: "female",
          money: 50,
        },
        {
          name: "Denis",
          age: "16",
          gender: "male",
          money: 40,
        },
      ],
    };
  },
  computed: {
    totalMoney() {
      return sumBy(this.users, "money");
    },
  },
  methods: {
    addMoney(user) {
      user.money += 10;
    },
    viewUser() {
      this.$router.push({ name: "Router" });
    },
  },
};
</script>

<style>
</style>
