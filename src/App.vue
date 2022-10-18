<template>
  <WordClock :minutes="getMinutes()" :hours="getHours()" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WordClock from "./components/WordClock.vue";

export default defineComponent({
  name: "App",
  components: {
    WordClock,
  },
  methods: {
    getHours() {
      return new Date().getHours();
    },
    getMinutes() {
      return new Date().getMinutes();
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
