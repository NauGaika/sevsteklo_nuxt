<template lang="pug">
.articleContainer
  h1 Список статей нашего сайта
  span(v-for="(link, key) in big_data")
    span Статья
    a(:key="`link_${key}`"
      :href="'/articles/' + link.href + '/'"
    ) {{link.title}}
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
import axios from 'axios'
export default {
  components: {},
  mixins: [],
  model: [],
  props: [],
  async asyncData () {
    return axios.get(`http://127.0.0.1:3000/api/article/get-all-article-title`)
    .then((res) => {
      return {
        big_data: res.data
      }
    })
  },
  computed: {

  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    console.log(this.big_data)
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
  .articleContainer {
    text-align: center;
    margin-top: 1em;
  }
  .articleContainer h1 {
    margin-bottom: 1em;
  }
  .articleContainer span {
    text-align: center;
  }
  .articleContainer span span {
    margin-right: .5em;
    color: grey;
  }
  .articleContainer span span::before {
    content: '[';
  }
  .articleContainer span span::after {
    content: ']';
  }
  .articleContainer a {
    text-decoration: underline;
  }
</style>
