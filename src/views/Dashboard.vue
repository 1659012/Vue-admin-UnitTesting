<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex lg4>
        <v-text-field name="firstNumer" label="Input number" type="number" v-model="firstNumer"></v-text-field>
      </v-flex>
      <v-flex lg8></v-flex>
      <v-flex lg4>
        <v-text-field name="secondNumber" label="Input number" type="number" v-model="secondNumber"></v-text-field>
      </v-flex>
      <v-flex lg8></v-flex>
      <v-flex lg4>
        <label>Sum</label>
        <p>{{sumNumber(firstNumer, secondNumber)}}</p>
      </v-flex>
      <v-flex lg8></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import sum from "../sum.js";
export default {
  mounted() {},
  data() {
    return {
      firstNumer: 0,
      secondNumber: 0
    };
  },
  computed: {},
  methods: {
    sumNumber: sum
  }
};
</script>
