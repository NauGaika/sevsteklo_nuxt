<template lang="pug">
  div
    my-input(v-model="name", name="Заголовок блока")
    my-input-text(v-model="content", name="Наполнение")
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
      name: "",
      content: ""
    }
  },
  computed: {

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
