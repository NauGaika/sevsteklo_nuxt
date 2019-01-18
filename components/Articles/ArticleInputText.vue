<template lang="pug">
div.ArticleInput
  span {{name}}
  input(
  :type="is_pass ? 'password' : 'text'" 
  :value="value" 
  :placeholder="name" 
  @input="$emit('input', $event.target.value)" 
  @blur="$emit('blur', $event.target.value)")
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
export default {
  components: {},
  mixins: [],
  model: [],
  props: ['value', 'name', 'is_pass'],
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
  .ArticleInput {
    height: 2em;
    display: flex;
    align-items: center;
    margin-top: 1em;

  }
  .ArticleInput span {
    margin-right: 1em;
  }
  .ArticleInput input {
    height: 100%;
    font-size: 1em;
    flex-grow: 1;
  }
</style>
