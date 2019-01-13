<template lang="pug">
  .ArticleConteinerImgPreviev
    span alt = {{alt}} id = {{id}}
      a(@click="deleteImg") удалить
    img(v-bind:alt="alt" v-bind:src="src" width="100%")
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
export default {
  components: {},
  mixins: [],
  model: [],
  props: ['alt', 'src', 'id'],
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
    deleteImg () {
      this.$parent.deleteImg(this.id)
    }
  },
}
</script>
<style>
.ArticleConteinerImgPreviev {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: .1em;
}
.ArticleConteinerImgPreviev span {
  display: block;
  background: DodgerBlue;
  color: white;
  text-align: center;
  padding: .3em;
}

.ArticleConteinerImgPreviev span a{
  color: white;
  display: inline-block;
  padding: .1em;
  background: red;
  border-radius: .3em;
  height: 1.4em;
  text-align: center;
  vertical-align: middle;
  float: right;
  cursor: pointer;
  font-size: .7em;
}
</style>
