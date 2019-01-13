<template lang="pug">
  div
    my-input(v-model="title", name="Заголовок блока")
    my-input-text(v-model="content", name="Контент")
    art-button(name="Удалить" color="red" @click="deleteContainer()")
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
import ArticleInputText from '~/components/Articles/ArticleInputText.vue'
import ArticleInputBigText from '~/components/Articles/ArticleInputBigText.vue'
import ArticleButton from '~/components/Articles/ArticleButton.vue'

export default {
  components: {
    'my-input': ArticleInputText,
    'my-input-text': ArticleInputBigText,
    'art-button': ArticleButton
  },
  mixins: [],
  model: [],
  props: ['elemIndex'],
  data () {
    return {
    }
  },
  computed: {
    title: {
      set (value) {
        this.$parent.containers[this.elemIndex].title = value
      },
      get () {
        return this.$parent.containers[this.elemIndex].title
      }
    },
    content: {
      set (value) {
        this.$parent.containers[this.elemIndex].content = value
      },
      get () {
        return this.$parent.containers[this.elemIndex].content
      }
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  methods: {
    deleteContainer () {
      this.$parent.deleteContainer(this.elemIndex)
      // console.log(this)
    }
  },
}
</script>
<style>
</style>
