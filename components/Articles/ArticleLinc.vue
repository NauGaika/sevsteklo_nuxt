<template lang="pug">
  router-link(:to="{ name: link.name, params: link.params }") {{link.name}}
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
export default {
  el: "ArticleLinc",
  components: {},
  mixins: [],
  model: [],
  props: ['link'],
  asyncData () {
    return {

    }
  },
  computed: {

  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    console.log(this)
  },
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
</style>
