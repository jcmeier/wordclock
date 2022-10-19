<template>
  <h3>Select time:</h3>
  <WordClock :minutes="currentMinutes" :hours="currentHours" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from 'vuex'
import WordClock from "../components/WordClock.vue";

export default defineComponent({
  name: "TimeSelection",
  components: {
    WordClock,
  },
  computed: mapState([
    "currentHours",
    "currentMinutes"
  ]),
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