<template lang="pug">
.SliderElement
  h3 {{title}}
  div.SliderElementContainer
    span.SliderElementContent {{content}}
    my-button(:src="src" style="margin-right: 1em") Подробнее
      slot
</template>

<script>
import MyButton from '~/components/Common/MyButton.vue'
export default {
  components: {
    "my-button": MyButton
  },
  data: function () {
    return {
    }
  },
  props: ['title', 'img', 'src', 'content']
}
</script>

<style>
  .SliderElement {
    position: absolute;
    display: block;
    height: 100%;
    float: left;
    width: 100%;
  }
  .SliderElement h3 {
    padding: 1em;
  }
  .SliderElementContainer {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    height: 100%;
  }
  .SliderElementContent {
    padding: 1em;
  }
</style>
