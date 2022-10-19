<template>
  <WordClock :minutes="minutes" :hours="hours" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WordClock from "../components/WordClock.vue";

export default defineComponent({
  name: "App",
  components: {
    WordClock,
  },
  methods: {
    setTime() {
      this.hours = new Date().getHours();
      this.minutes = new Date().getMinutes();
    }
  },
  mounted() {
    setInterval(() => this.setTime(), 1000)
  },
  
  data() {
    return {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes()
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