<template lang="pug">
div
  h1 Добавить страницу ({{translitName}})
  my-input(v-model="name", name="Заголовок страницы")
  my-input(v-model="description", name="Описание странцы")
  div(v-for="(conteiner, key) in containers" :key="key + '_container'")
    art-cont-text(v-if="conteiner.type == 'text'" :elemIndex="key")
    art-cont-img(v-if="conteiner.type == 'img'" :elemIndex="key")
  div.ControlPanel
    art-button(name='Добавить текст' @click="addContainer('text')" color="red")
    art-button(name='Добавить изображение' @click="addContainer('img')" color="DodgerBlue")
    art-button(name='Создать страницу'  color="Green" @click="test")
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
import axios from 'axios'

import ArticleInputText from '~/components/Articles/ArticleInputText.vue'
import ArticleButton from '~/components/Articles/ArticleButton.vue'
import ArticleContainerText from '~/components/Articles/ArticleContainerText.vue'
import ArticleContainerImg from '~/components/Articles/ArticleContainerImg.vue'
export default {
  components: {
    'my-input': ArticleInputText,
    'art-button': ArticleButton,
    'art-cont-text': ArticleContainerText,
    'art-cont-img': ArticleContainerImg
  },
  mixins: [],
  model: [],
  props: [],
  asyncData () {
    return {
      name: "",
      description: "",
      containers: [

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
    test () {
      console.log(this.containers)
    },
    addContainer (containerType) {
      let newContainer = {}
      if (containerType == "text") {
        newContainer.type = "text"
        newContainer.title = ""
        newContainer.content = ""
      }
      if (containerType == "img") {
        newContainer.type = "img"
        newContainer.alts = ""
        newContainer.files = []
        newContainer.content = {
        }
      }
      if (newContainer){
        this.containers.push(newContainer)
      }
    },
    deleteContainer (key) {
      this.containers.splice(key, 1)
    }
  },
  computed: {
    translitName () {
      let arrru = new Array (
        'Я','я','Ю','ю','Ч','ч','Ш','ш','Щ','щ','Ж','ж','А','а','Б','б','В','в',
        'Г','г','Д','д','Е','е','Ё','ё','З','з','И','и','Й','й','К','к','Л','л',
        'М','м','Н','н', 'О','о','П','п','Р','р','С','с','Т','т','У','у','Ф','ф',
        'Х','х','Ц','ц','Ы','ы','Ь','ь','Ъ','ъ','Э','э', ' ')
      let arren = new Array (
        'Ya','ya','Yu','yu','Ch','ch','Sh','sh','Sh','sh','Zh','zh','A','a','B',
        'b','V','v','G','g','D','d','E','e','E','e','Z','z','I','i','J','j','K',
        'k','L','l','M','m','N','n', 'O','o','P','p','R','r','S','s','T','t','U',
        'u','F','f','H','h','C','c','Y','y','`','`','\'','\'','E', 'e', '-')
      let text = this.name
      for(let i=0; i<arrru.length; i++) {
        let reg = new RegExp(arrru[i], "g")
        text = text.replace(reg, arren[i])
      }
      return text.toLowerCase()

    }
  }
}
</script>
<style>
</style>
