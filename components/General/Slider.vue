<template lang="pug">
.Slider(@mouseover="sliderStop()" @mouseout="sliderStart()")
	.SliderContainer(ref="Slider")
		slider-element(v-for="(slide, slide_key) in slides" :style="{left: slide_key * windowWidth + 'px'}" :key="'se_' + slide_key" :title="slide.name" :content="slide.content" :src="slide.src")
	.SliderControlElements
		//- div.SliderControlElement(@click="nextSlide(-1)")
		//- div.SliderControlElement(@click="nextSlide(1)")
</template>

<script>
import SliderElement from '~/components/General/SliderElement.vue'
export default {
  components: {
    'slider-element': SliderElement
  },
  data: function() {
    return {
      windowWidth: 0,
      windowHeight: 0,
      duration: 1000
    }
  },
  computed: {},
  props: ['slides'],
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },
  methods: {
    curPos() {
      let pos = this.$refs.Slider.style.left
      if (!pos) {
        pos = 0
      } else {
        pos = parseInt(pos, 10) / this.windowWidth * (-1)
      }
      return pos
    },
    setPosition(pos) {
      let name = Math.round(-1 * pos * this.windowWidth) + 'px'
      this.$refs.Slider.style.left = name
    },
    sliderStop(event) {
      if(this.intervalId) {
        clearInterval(this.intervalId)
      }
    },
    sliderStart() {
      this.getWindowWidth()
      this.getWindowHeight()
      let nextSlide = this.nextSlide
      let self = this
      let dir = 1
      this.intervalId = setInterval(() => {
        let time = 0
        let duration = 1000
        let curPos = self.curPos()
        let setPos = self.setPosition
        let slideCount = self.slides.length
        let nextPos = Math.ceil(dir + curPos)
        if (nextPos >= slideCount) {
          nextPos = 0
        } else if (nextPos < 0) {
          nextPos = slideCount - 1
        }
        let difference = nextPos - curPos
        let interval = setInterval(() => {
          time += duration / 60
          let time_r = Math.round(time)
          let pos = Math.round(time_r / duration * 100) * difference / 100 + curPos

          setPos(pos)
          if (time_r >= duration) {
            clearInterval(interval)
          }
        }, duration / 60)
      }, 7000)
    },
    nextSlide(dir) {
      let time = 0
      let duration = 500
      let curPos = this.curPos()
      let setPos = this.setPosition
      let slideCount = this.slides.length
      let nextPos = Math.ceil(dir + curPos)
      if (nextPos >= slideCount) {
        nextPos = 0
      } else if (nextPos < 0) {
        nextPos = slideCount - 1
      }
      let difference = nextPos - curPos
      let interval = setInterval(() => {
        time += duration / 60
        let time_r = Math.round(time)
        let pos = Math.round(time_r / duration * 100) * difference / 100 + curPos
        // console.log(pos)
        setPos(pos)
        if (time_r >= duration) {
          clearInterval(interval)
        }
      }, duration / 60)
    },
    getWindowWidth(event) {
      this.windowWidth = this.$refs.Slider.getBoundingClientRect().width
    },
    getWindowHeight(event) {
      this.windowHeight = this.$refs.Slider.getBoundingClientRect().height
    }
  },
  mounted() {
    this.sliderStart()

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('resize', this.getWindowHeight);
  }
}
</script>

<style>
.Slider {
  position: relative;
  height: 300px;
  text-align: center;
  overflow: hidden;
}

.SliderContainer {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
}

.SliderControlElement {
  position: absolute;
  top: 0;
  width: 30%;
  height: 100%;
}

.SliderControlElement:last-child {
  right: 0;
}

.SliderControlElement:hover {
  background: rgba(0, 0, 0, 0.2);
}
</style>
