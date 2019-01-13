<template lang="pug">
  .ArticleContainer
    .ArticleContainerControl
    slot
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
import ArticleButton from '~/components/Articles/ArticleButton.vue'
export default {
  el: "ArticleContainer",
  components: {
    'art-button': ArticleButton
  },
  mixins: [],
  model: [],
  props: [],
  data () {
    return {

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

  },
}
</script>
<style>
.ArticleContainer {
  border: 1px solid grey;
}
</style>
