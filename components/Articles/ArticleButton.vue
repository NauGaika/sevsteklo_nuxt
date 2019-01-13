<template lang="pug">
.ArticleButton(@click="$emit('click')" :style="'background:' + (color ? color : 'DodgerBlue')")
  span {{name}}
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
export default {
  components: {},
  mixins: [],
  model: [],
  props: ['name', 'color', 'deactive'],
  data () {
    return {}
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

  },
}
</script>
<style>
.ArticleButton {
  color: white;
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: .3em;
  transition: 0.5s;
  margin: .3em;
}
.ArticleButton:hover {
  cursor: pointer;
  transition: 0.1s;
  box-shadow: 0 0 .5em .1em rgb(0,0,0,0.5);
}
.ArticleButton:active {
  cursor: pointer;
  box-shadow: 0 0 0 0 rgb(0,0,0,0.5);
}
.ArticleButton span{
  width: 100%;
  height: 100%;
}
</style>
