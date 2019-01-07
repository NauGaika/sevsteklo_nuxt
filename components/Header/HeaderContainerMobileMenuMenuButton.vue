<template lang="pug">
  svg.HeaderContainerMobileMenuMenuButton(
      width="40"
      stroke-width="8"
      stroke-linecap="round"
      stroke="DodgerBlue"
      height="40"
      @click="selectAnimate")
      line(
        ref="line1"
        x1="4"
        y1="4"
        x2="36"
        y2="4"
        )
      line(
        ref="line2"
        x1="4"
        y1="20"
        x2="36"
        y2="20"
        )
      line(
        ref="line3"
        x1="4"
        y1="36"
        x2="36"
        y2="36"
        )
</template>
<script>
import {XYZ, Line, Path} from '~/assets/CommonScripts/CS_Geometry'

export default {
  data () {
    return {
      timer: false
    }
  },
  name: 'HeaderContainerMobileMenuMenuButton',
  props: ['menuIsOpen'],
  methods: {
    selectAnimate: function () {
      clearTimeout(this.timer)
      if (!this.menuIsOpen) {
        this.animateFirst()
      } else {
        this.animateSecond()
      }
      this.$emit('ChangeStateMenu')

    },
    animateFirst: function () {
      let line1 = new Line(this.$refs.line1)
      let line2 = new Line(this.$refs.line2)
      let line3 = new Line(this.$refs.line3)

      let endP1 = new XYZ(4, 20)
      let endP2 = new XYZ(20, 4)

      let endP3 = new XYZ(20, 4)
      let endP4 = new XYZ(20, 36)

      let endP5 = new XYZ(36, 20)
      let endP6 = new XYZ(20, 4)

      let interval = 20
      let time = 0
      let during = 500
      this.timer = setInterval(function () {
        if (time >= during + interval) {
          clearTimeout(this.timer)
        } else {
          line1.p1 = line1.p1.moveToBy(endP1, during, time)
          line1.p2 = line1.p2.moveToBy(endP2, during, time)
          line2.p1 = line2.p1.moveToBy(endP3, during, time)
          line2.p2 = line2.p2.moveToBy(endP4, during, time)
          line3.p1 = line3.p1.moveToBy(endP5, during, time)
          line3.p2 = line3.p2.moveToBy(endP6, during, time)
          time += interval
        }
      }, interval)
    },
    animateSecond: function () {
      let line1 = new Line(this.$refs.line1)
      let line2 = new Line(this.$refs.line2)
      let line3 = new Line(this.$refs.line3)

      let endP1 = new XYZ(4, 4)
      let endP2 = new XYZ(36, 4)

      let endP3 = new XYZ(4, 20)
      let endP4 = new XYZ(36, 20)

      let endP6 = new XYZ(4, 36)
      let endP5 = new XYZ(36, 36)

      let interval = 20
      let time = 0
      let during = 500
      this.timer = setInterval(function () {
        if (time >= during + interval) {
          clearTimeout(this.timer)
        } else {
          line1.p1 = line1.p1.moveToBy(endP1, during, time)
          line1.p2 = line1.p2.moveToBy(endP2, during, time)
          line2.p1 = line2.p1.moveToBy(endP3, during, time)
          line2.p2 = line2.p2.moveToBy(endP4, during, time)
          line3.p1 = line3.p1.moveToBy(endP5, during, time)
          line3.p2 = line3.p2.moveToBy(endP6, during, time)
          time += interval
        }
      }, interval)
    },
  }
}
</script>
<style>
@media (min-width: 900px){
  .HeaderContainerMobileMenuMenuButton {
    display: none;
  }
}
@media (max-width: 900px){
  .HeaderContainerMobileMenuMenuButton {
      display: inline-block;
      float: right;
      margin-top: -2.5em;
      margin-right: 0.5em;
      cursor: pointer;
  }
}
</style>
