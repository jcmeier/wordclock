<template>
  <div>
    <div><span class="bold">IT</span>L<span class="bold">IS</span>ASTHPMA</div>
    <div>AC<span :class="{ bold: isFifteenMinutes}">FIFTEEN</span>DCO</div>
    <div><span :class="{ bold: isTwentyFiveMinutes}"><span :class="{ bold: isTwentyMinutes}">TWENTY</span><span
          :class="{ bold: isFiveMinutes}">FIVE</span></span>XW</div>
    <div><span :class="{ bold: isThirtyMinutes}">THIRTY</span>F<span :class="{ bold: isTenMinutes}">TEN</span>OS</div>
    <div><span :class="{ bold: isToOrPast }">MINUTES</span>E<span :class="{ bold: isTo() }">TO</span>UR</div>
    <div><span :class="{ bold : isPast() }">PAST</span>ORU<span :class="{bold : isFourHours }">FOUR</span>T</div>
    <div><span :class="{ bold : isSevenHours }">SEVEN</span>X<span :class="{ bold : isTwelveHours }">TWELVE</span></div>
    <div><span :class="{ bold : isNineHours }">NINE</span><span :class="{ bold : isFiveHours }">FIVE</span>C<span
        :class="{ bold : isTwoHours }">TWO</span></div>
    <div><span :class="{ bold : isEightHours }">EIGHT</span>F<span :class="{ bold : isElevenHours }">ELEVEN</span></div>
    <div><span :class="{ bold : isSixHours }">SIX</span><span :class="{ bold : isThreeHours }">THREE</span><span
        :class="{ bold : isOneHour }">ONE</span>G</div>
    <div><span :class="{bold : isTenHours }">TEN</span>SEZ<span class="bold">OCLOCK</span></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "WordClock",
  methods: {
    isInMinuteRange(range: number): boolean {
      return this.currentMinutes >= range && this.currentMinutes < range + 5;
    },
    isPast(): boolean {
      return this.currentMinutes > 4 && this.currentMinutes < 35;
    },
    isTo(): boolean {
      return this.currentMinutes >= 35;
    },
    isHour(hour: number): boolean {
      return this.currentHours == hour;
    }
  },
  data() {
    return {
     
    }
  },
  computed: {
    hoursAndMinutes() : string {
      return `${this.currentHours}:${this.currentMinutes}`;
    },
    isFiveMinutes() : boolean  { return this.isInMinuteRange(5) || this.isInMinuteRange(55) },
    isTenMinutes() : boolean { return this.isInMinuteRange(10) || this.isInMinuteRange(50) },
    isFifteenMinutes() : boolean { return this.isInMinuteRange(15) || this.isInMinuteRange(45) },
    isTwentyMinutes() : boolean { return this.isInMinuteRange(20) || this.isInMinuteRange(40) },
    isTwentyFiveMinutes() : boolean { return this.isInMinuteRange(25) || this.isInMinuteRange(35) },
    isThirtyMinutes() : boolean { return this.isInMinuteRange(30) },

    isOneHour() : boolean { return (this.isTo() && (this.isHour(12) || this.isHour(0))) || (!this.isTo() && (this.isHour(13) || this.isHour(1))) },
    isTwoHours() : boolean { return (this.isTo() && (this.isHour(13) || this.isHour(1))) || (!this.isTo() && (this.isHour(14) || this.isHour(2))) },
    isThreeHours() : boolean { return (this.isTo() && (this.isHour(14) || this.isHour(2))) || (!this.isTo() && (this.isHour(15) || this.isHour(3))) },
    isFourHours() : boolean { return (this.isTo() && (this.isHour(15) || this.isHour(3))) || (!this.isTo() && (this.isHour(16) || this.isHour(4))) },
    isFiveHours() : boolean { return (this.isTo() && (this.isHour(16) || this.isHour(4))) || (!this.isTo() && (this.isHour(17) || this.isHour(5))) },
    isSixHours() : boolean { return (this.isTo() && (this.isHour(17) || this.isHour(5))) || (!this.isTo() && (this.isHour(18) || this.isHour(6))) },
    isSevenHours() : boolean { return (this.isTo() && (this.isHour(18) || this.isHour(6))) || (!this.isTo() && (this.isHour(19) || this.isHour(7))) },
    isEightHours() : boolean { return (this.isTo() && (this.isHour(19) || this.isHour(7))) || (!this.isTo() && (this.isHour(20) || this.isHour(8))) },
    isNineHours() : boolean { return (this.isTo() && (this.isHour(20) || this.isHour(8))) || (!this.isTo() && (this.isHour(21) || this.isHour(9))) },
    isTenHours() : boolean { return (this.isTo() && (this.isHour(21) || this.isHour(9))) || (!this.isTo() && (this.isHour(22) || this.isHour(10))) },
    isElevenHours() : boolean { return (this.isTo() && (this.isHour(22) || this.isHour(10))) || (!this.isTo() && (this.isHour(23) || this.isHour(11))) },
    isTwelveHours() : boolean { return (this.isTo() && (this.isHour(23) || this.isHour(11))) || (!this.isTo() && (this.isHour(0) || this.isHour(12))) },

    isToOrPast() : boolean { return this.isTo() || this.isPast() },
    ...mapState([
      "currentHours",
      "currentMinutes"
    ])
  }
});
</script>

<style scoped>
div {
  font-family: monospace;
  font-size: 2em;
  letter-spacing: 20px;
}

.oclock {
  letter-spacing: 5px !important;
}
span {
  transition: color 0.3s ease, font-weight 0.1s linear;
}
.bold {
  font-weight: bold;
  color: red;

  transition: all 0.3s ease !important;
}
</style>
