<template lang="pug">
my-text(:title="title")
  .ImageBlock
    .ImageBlockContainer(v-for="(thumb, index) in img_for_light")
      img.exampleImg(
        v-bind:key="index"
        @click="showLightbox(thumb.name)"
        v-bind:src="thumbnailDir + thumb.name"
        v-bind:alt="thumb.alt"
        v-bind:title="thumb.alt"
        )
    no-ssr
      lightbox(
        ref="lightbox"
        v-bind:images="img_for_light"
        v-bind:directory="thumbnailDir"
        v-bind:timeoutDuration="5000"
        )
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
import TextBlock from '~/components/Common/TextBlock.vue'
export default {
  components: {
    'my-text': TextBlock
  },
  mixins: [],
  model: [],
  props: ['images', 'title'],
  data () {
    return {
      thumbnailDir: process.env.baseUrl
    }
  },
  computed: {
    images_comp () {
      if (this.images) {
        return this.images
      } else {
        return []
      }
    },
    img_for_light () {
      let imgs = this.images_comp
      let new_imgs = []
      
      for (let i of imgs) {
        new_imgs.push({
          'name': i.src,
          'filter': 'all',
          'alt': i.alt,
          'title': i.alt
        })
      }
      return new_imgs
    }

  },
  beforeCreate () {},
  created () {
    
  },
  beforeMount () {},
  mounted () {
  },
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  methods: {
    showLightbox: function (imageName) {
      this.$refs.lightbox.show(imageName)
    },
    updateFilter (filterName) {
      this.galleryFilter = filterName
    }
  }
}
</script>
<style>
.ImageBlock {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.ImageBlockContainer {
  height: 250px;
  overflow: hidden;
  background: grey;
  text-align: center;
  margin: .15em;
  box-shadow: 0 0 0.2em rgb(0,0,0,0.3);
}
.ImageBlock img {
  display: inline-block;
  height: 100%;
  width: auto;
}
</style>
