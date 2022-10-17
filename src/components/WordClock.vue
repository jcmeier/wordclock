<template>
  <div>
    <div><span class="bold">IT</span>L<span class="bold">IS</span>ASTHPMA</div>
    <div>AC<span :class="{ bold: isFifteenMinutes}">FIFTEEN</span>DCO</div>
    <div><span :class="{ bold: isTwentyFiveMinutes}"><span :class="{ bold: isTwentyMinutes}">TWENTY</span><span :class="{ bold: isFiveMinutes}">FIVE</span></span>XW</div>
    <div><span :class="{ bold: isThirtyMinutes}">THIRTY</span>F<span :class="{ bold: isTenMinutes}">TEN</span>OS</div>
    <div><span :class="{ bold: isToOrPast }">MINUTES</span>E<span :class="{ bold: isTo}">TO</span>UR</div>
    <div><span :class="{ bold : isPast }">PAST</span>ORUFOURT</div>
    <div><span :class="{ bold : isSevenHours }">SEVEN</span>X<span :class="{ bold : isTwelveHours }">TWELVE</span></div>
    <div><span :class="{ bold : isNineHours }">NINE</span><span :class="{ bold : isFiveHours }">FIVE</span>C<span :class="{ bold : isTwoHours }">TWO</span></div>
    <div><span :class="{ bold : isEightHours }">EIGHT</span>F<span :class="{ bold : isElevenHours }">ELEVEN</span></div>
    <div><span :class="{ bold : isSixHours }">SIX</span><span :class="{ bold : isThreeHours }">THREE</span><span :class="{ bold : isOneHour }">ONE</span>G</div>
    <div><span :class="{bold : isTenHours }">TEN</span>SEZ<span class="bold">OCLOCK</span></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

function isInMinuteRange(range : number ) : boolean {
  const minutes = new Date().getMinutes();
  return minutes >= range && minutes < range + 5;
}

function isPast() : boolean {
  const minutes = new Date().getMinutes();
  return minutes > 4 && minutes < 35;
}

function isTo() : boolean {
  return new Date().getMinutes() > 35;
}

function isHour(hour : number) : boolean {
  return new Date().getHours() == hour;
}

export default defineComponent({
  name: "WordClock",
  props: {
    msg: String,
  },
  data() {
    return {
      isFiveMinutes:       isInMinuteRange(5)  || isInMinuteRange(55),
      isTenMinutes:        isInMinuteRange(10) || isInMinuteRange(50),
      isFifteenMinutes:    isInMinuteRange(15) || isInMinuteRange(45),
      isTwentyMinutes:     isInMinuteRange(20) || isInMinuteRange(40),
      isTwentyFiveMinutes: isInMinuteRange(25) || isInMinuteRange(35),
      isThirtyMinutes:     isInMinuteRange(30),
      
      isOneHour:      (isTo() && (isHour(12) || isHour(0)))  || (isHour(13) || isHour(1)),
      isTwoHours:     (isTo() && (isHour(13) || isHour(1)))  || (isHour(14) || isHour(2)),
      isThreeHours:   (isTo() && (isHour(14) || isHour(2)))  || (isHour(15) || isHour(3)),
      isFourHours:    (isTo() && (isHour(15) || isHour(3)))  || (isHour(16) || isHour(4)),
      isFiveHours:    (isTo() && (isHour(16) || isHour(4)))  || (isHour(17) || isHour(5)),
      isSixHours:     (isTo() && (isHour(17) || isHour(5)))  || (isHour(18) || isHour(6)),
      isSevenHours:   (isTo() && (isHour(18) || isHour(6)))  || (isHour(19) || isHour(7)),
      isEightHours:   (isTo() && (isHour(19) || isHour(7)))  || (isHour(20) || isHour(8)),
      isNineHours:    (isTo() && (isHour(20) || isHour(8)))  || (isHour(21) || isHour(9)),
      isTenHours:     (isTo() && (isHour(21) || isHour(9)))  || (isHour(22) || isHour(10)),
      isElevenHours:  (isTo() && (isHour(22) || isHour(10))) || (isHour(23) || isHour(11)),
      isTwelveHours:  (isTo() && (isHour(23) || isHour(11))) || (isHour(0)  || isHour(12)),
      
      isPast:     isPast(),
      isTo:       isTo(),
      isToOrPast: isTo() || isPast()
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
