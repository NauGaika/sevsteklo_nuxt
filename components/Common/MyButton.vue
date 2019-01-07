<template lang="pug">
a.MyButton(:href="src")
  slot
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
export default {
  components: {},
  mixins: [],
  model: [],
  props: ['text', 'src'],
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

  }
}
</script>
<style>
  .MyButton {
    background: DodgerBlue;
    color: white;
    padding: 0.5em 1em;
    border-radius: .3em;
    height: auto;
    width: auto;
  }
  .MyButton:hover {
    background: SteelBlue;
    color: white;
    border-radius: .3em;
  }
</style>
