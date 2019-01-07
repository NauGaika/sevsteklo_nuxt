<template lang="pug">
svg.HeaderContainerMobileMenuPointButton(
  v-bind:position="keyPoint"
  )
  circle
  g(fill="none" stroke="DodgerBlue" stroke-width="3")
    path(ref="sub_line_1" d="M5 12 l10 8")
    path(ref="sub_line_2" d="M15 20 l10 -8")
</template>
<script>
import {XYZ, Line, Path} from '~/assets/CommonScripts/CS_Geometry'
export default {
  data () {
    return {
      menuIsOpen: false,
      timer: false
    }
  },
  props: ['keyPoint'],
  name: 'HeaderContainerMobileMenuPointButton',
  methods: {
    changeMenuPointState: function (key) {
      let path1 = this.$refs['sub_line_1']
      let path2 = this.$refs['sub_line_2']
      path1 = new Path(path1)
      path2 = new Path(path2)

      clearTimeout(this.timer)
      this.animateButton(path1, path2, key)
      this.$store.commit('HeaderMenu/changeMenuPointState', key)
    },
    test () {
      console.log('test')
    },
    animateButton: function (path1, path2, key) {
      let isOpen = this.$store.getters['HeaderMenu/getMenuPoints'][key].isOpen
      let interval = 20
      let time = 0
      let during = 500
      let replace = 8 + Math.round(Math.abs(path1.y2))
      replace = replace > 16 ? 16 - replace : replace
      let dr = replace / during * interval
      this.timer = setInterval(function () {
        if (time >= during) {
          clearTimeout(this['timer' + key])
        } else {
          let sign = -1
          if (isOpen) {
            sign = 1
          }
          path1.path = {
            y1: path1.y1 + sign * (-0.3 * dr),
            y2: path1.y2 + sign * (dr)
          }
          path2.path = {
            y1: path2.y1 + sign * (0.7*dr),
            y2: path2.y2 + sign * (-dr)
          }
          time += interval
        }
      }, interval)
    }
  }
}
</script>
<style>
.HeaderContainerMobileMenuPointButton {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-bottom: -7px;
    cursor: pointer;
}
@media (min-width: 900px)
{
  .HeaderContainerMobileMenuPointButton {
    display: none;
  }
}
</style>
