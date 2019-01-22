<template lang="pug">
  div
    div(v-for="container in containers")
      text-block(v-if="container.type == 'text'" :title="container.title") {{container.text}}
      img-block(v-if="container.type == 'img'" :images="container.images")
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
import axios from 'axios'
import TextBlock from '~/components/Common/TextBlock.vue'
import ImagesBlock from '~/components/Common/ImagesBlock.vue'
export default {
  components: {
    'text-block': TextBlock,
    'img-block': ImagesBlock
  },
  mixins: [],
  model: [],
  props: [],
  asyncData ({ params, error }) {
    return axios.get(`${process.env.reqUrl}/article/get-article/${params.pageName}`)
    .then((res) => {
      return {
        title: res.data.title,
        description: res.data.description,
        containers: res.data.containers,
        pageType: res.data.type
      }
    })
    .catch((e) => {
      error({statusCode: 404, message: 'страница не найдена'})
    })
  },
  head () {
      return {
          title: this.title,
          meta: [
            { hid: 'description', name: 'description', content: this.description },
            { hid: 'lang', name: 'lang', content: 'ru-RU' }
          ]
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
</style>
