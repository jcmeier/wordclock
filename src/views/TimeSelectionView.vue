<template>
  <h3>
    Select time you want to display:
    <select v-model="currentHours">
      <option v-for="option in generateHours" :value="option" v-bind:key="option">
        {{ padzero(option) }}
      </option>
    </select> :
    <select v-model="currentMinutes">
      <option v-for="option in generateMinutes" :value="option" v-bind:key="option">
        {{ padzero(option) }}
      </option>
    </select>
  </h3>
  <WordClock />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WordClock from "../components/WordClock.vue";

export default defineComponent({
  name: "TimeSelection",
  components: {
    WordClock,
  },
  mounted() {
    clearInterval(this.$store.state.intervalId);
  },
  methods: {
    padzero(i : number) : string {
        if(i > 9) {
          return `${i}`;
        }
        return `0${i}`;
    }
  },
  computed: {
    generateMinutes: function() : number[] {
      const minutes : number[] = [];
      for(let i = 0; i < 60 ; i++) {
        minutes.push(i);
      }
      return minutes;
    },
    generateHours: function() : number[] {
      const hours : number[] = [];
      for(let i = 0; i < 24 ; i++) {
        hours.push(i);
      }
      return hours;
    },
    currentHours: {
      get () {
        return this.$store.state.currentHours;
      },
      set (value : number) {
        this.$store.commit('setHours', value);
      }
    },
    currentMinutes: {
      get () {
        return this.$store.state.currentMinutes;
      },
      set (value : number) {
        this.$store.commit('setMinutes', value);
      }
    }
  },
});
</script>

<style>
select {
  padding: 5px;
  border: solid 1px #eee;
  font-weight: bold;
}
</style>