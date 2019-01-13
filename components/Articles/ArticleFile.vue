<template lang="pug">
.ArticleFile
  input(
    type="file" 
    accept="image/*,image/jpeg"
    required="required"
    title="Необходимо выбрать минимум один файл"
    @change="changeFileState")
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>

export default {
  components: {},
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
  created () {
  },
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  methods: {
    changeFileState (e) {
      if (e.target.files.length > 0) {
        this.$parent.filesConf = e.target.files
      }
      else {
        this.$parent.filesConf = undefined
      }
    }
  },
}
</script>
<style>
.ArticleFile input {
  margin: 2em 0;
}

</style>
