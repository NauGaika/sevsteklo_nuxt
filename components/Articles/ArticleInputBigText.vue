<template lang="pug">
div.ArticleInputBig
  span {{name}}
  textarea(type="text" :value="value" :placeholder="name" @input="$emit('input', $event.target.value)")
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
export default {
  components: {},
  mixins: [],
  model: [],
  props: ['value', 'name'],
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
  .ArticleInputBig {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    margin-bottom: 1em;
    margin-top: 1em;

  }
  .ArticleInputBig span {
    text-align: center;
    background: DodgerBlue;
    color: white;
    padding: .5em;
  }
  .ArticleInputBig textarea {
    resize:vertical;
    width: 100%;
    font-size: 1em;
    flex-grow: 1;
    vertical-align: top;
  }
</style>
