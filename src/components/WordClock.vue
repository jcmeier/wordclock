<template>
  <div>
    {{ hours}} : {{ minutes }}
    <div><span class="bold">IT</span>L<span class="bold">IS</span>ASTHPMA</div>
    <div>AC<span :class="{ bold: isFifteenMinutes}">FIFTEEN</span>DCO</div>
    <div><span :class="{ bold: isTwentyFiveMinutes}"><span :class="{ bold: isTwentyMinutes}">TWENTY</span><span
          :class="{ bold: isFiveMinutes}">FIVE</span></span>XW</div>
    <div><span :class="{ bold: isThirtyMinutes}">THIRTY</span>F<span :class="{ bold: isTenMinutes}">TEN</span>OS</div>
    <div><span :class="{ bold: isToOrPast }">MINUTES</span>E<span :class="{ bold: isTo() }">TO</span>UR</div>
    <div><span :class="{ bold : isPast() }">PAST</span>ORUFOURT</div>
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

export default defineComponent({
  name: "WordClock",
  props: {
    minutes: {
      type: Number,
      required: true
    },
    hours: {
      type: Number,
      required: true
    }
  },
  methods: {
    isInMinuteRange(range: number): boolean {
      return this.minutes >= range && this.minutes < range + 5;
    },
    isPast(): boolean {
      return this.minutes > 4 && this.minutes < 35;
    },
    isTo(): boolean {
      return this.minutes > 35;
    },
    isHour(hour: number): boolean {
      return this.hours == hour;
    }
  },
  data() {
    return {
      isFiveMinutes: this.isInMinuteRange(5) || this.isInMinuteRange(55),
      isTenMinutes: this.isInMinuteRange(10) || this.isInMinuteRange(50),
      isFifteenMinutes: this.isInMinuteRange(15) || this.isInMinuteRange(45),
      isTwentyMinutes: this.isInMinuteRange(20) || this.isInMinuteRange(40),
      isTwentyFiveMinutes: this.isInMinuteRange(25) || this.isInMinuteRange(35),
      isThirtyMinutes: this.isInMinuteRange(30),

      isOneHour: (this.isTo() && (this.isHour(12) || this.isHour(0))) || (!this.isTo() && (this.isHour(13) || this.isHour(1))),
      isTwoHours: (this.isTo() && (this.isHour(13) || this.isHour(1))) || (!this.isTo() && (this.isHour(14) || this.isHour(2))),
      isThreeHours: (this.isTo() && (this.isHour(14) || this.isHour(2))) || (!this.isTo() && (this.isHour(15) || this.isHour(3))),
      isFourHours: (this.isTo() && (this.isHour(15) || this.isHour(3))) || (!this.isTo() && (this.isHour(16) || this.isHour(4))),
      isFiveHours: (this.isTo() && (this.isHour(16) || this.isHour(4))) || (!this.isTo() && (this.isHour(17) || this.isHour(5))),
      isSixHours: (this.isTo() && (this.isHour(17) || this.isHour(5))) || (!this.isTo() && (this.isHour(18) || this.isHour(6))),
      isSevenHours: (this.isTo() && (this.isHour(18) || this.isHour(6))) || (!this.isTo() && (this.isHour(19) || this.isHour(7))),
      isEightHours: (this.isTo() && (this.isHour(19) || this.isHour(7))) || (!this.isTo() && (this.isHour(20) || this.isHour(8))),
      isNineHours: (this.isTo() && (this.isHour(20) || this.isHour(8))) || (!this.isTo() && (this.isHour(21) || this.isHour(9))),
      isTenHours: (this.isTo() && (this.isHour(21) || this.isHour(9))) || (!this.isTo() && (this.isHour(22) || this.isHour(10))),
      isElevenHours: (this.isTo() && (this.isHour(22) || this.isHour(10))) || (!this.isTo() && (this.isHour(23) || this.isHour(11))),
      isTwelveHours: (this.isTo() && (this.isHour(23) || this.isHour(11))) || (!this.isTo() && (this.isHour(0) || this.isHour(12))),

      isToOrPast: this.isTo() || this.isPast()
    }
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

.bold {
  font-weight: bold;
  color: red;
}
</style>
