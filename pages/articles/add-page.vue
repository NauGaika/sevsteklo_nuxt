<template lang="pug">
div
  h1 Добавить страницу ({{translitName}})
  div.ArticlesErrors(v-if="!pageGetError")
    ul
      li(v-for="(error, key) in errors" :key="key")
        span(v-if="error != false") {{error}}
  my-input(v-model="pass", name="Пароль администратора", @blur="checkPass", :is_pass="true")
  my-input(v-model="name", name="Заголовок страницы", @blur="pageExist")
  my-input(v-model="description", name="Описание странцы")
  div(v-for="(conteiner, key) in containers" :key="key + '_container'")
    art-cont-text(v-if="conteiner.type == 'text'" :elemIndex="key")
    art-cont-img(v-if="conteiner.type == 'img'" :elemIndex="key")
  div.ControlPanel
    art-button(name='Добавить текст' @click="addContainer('text')" color="red")
    art-button(name='Добавить изображение' @click="addContainer('img')" color="DodgerBlue")
    art-button(name='Создать страницу'  :color="this.checkData() ? 'Green' : 'Grey'" @click="addPage")
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
      containers: [],
      errors:{
        page_exist: false,
        containers: false,
        description: false,
        pass: false,
        name: false
      },
      nameChecked: false,
      translitName: "",
      pass: ""
    }
  },
  computed: {
    pageGetError () {
      for (let i in this.errors) {
        if (this.errors[i] != false) {
          return false
        }
      }
      return true
    }
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
    changeContainerPlace(direction, key) {
      let devide = 0
      if (direction == "up") {
        devide = -1
      } else {
        devide = 1
      }
      let temp = this.containers[key]
      this.$set(this.containers, key, this.containers[key + devide])
      this.$set(this.containers, key + devide, temp)
    },
    pageExist () {
      this.checkName()
      if(this.pageGetError) {
        axios.get(`/api/article/is_exist/${this.name}`)
        .then((res) => {
          if (res.data != "") {
            this.add_page = true
            this.translitName = res.data
            this.$set(this.errors, 'page_exist', false)
          } else {
            this.$set(this.errors, 'page_exist', "Страница уже существует")
          }
        })
      }
    },
    addPage () {
      if (this.checkData() && this.checkPass()) {
        let newFormData = new FormData()
        newFormData.append('json', JSON.stringify(
          {
            containers: this.containers, 
            name: this.name, 
            description: this.description, 
            password: this.pass,
          }))
          axios.post('/api/article/create-article', newFormData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then((res) => {
            console.log('страница создана. Ее адресс /articles/' + this.translitName)
          }).catch(() => {
            alert('Ошибка добавления страницы')
          })
      }
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
        newContainer.files = []
        newContainer.title = ""
      }
      if (newContainer){
        this.containers.push(newContainer)
      }
    },
    deleteContainer (key) {
      this.containers.splice(key, 1)
    },
    checkName () {
      if(this.name == ""){
        this.errors.name = "Необходимо указать имя страницы"
        return false
      } else if (this.name.length < 7) {
        this.errors.name = "Длина зоголовка должна быть больше 6 символов"
        return false
      } else {
        this.errors.name = false
        this.nameChecked = true
        return true
      }
    },
    checkData () {
      if (!this.nameChecked) {
        return false
      } else {
          if (this.description.length < 150) {
            this.$set(this.errors, 'description', "Длина описания страницы должна быть больше 150 символов")
            return false
          } else {
            this.errors.description = false
          }
          if ( this.containers.length == 0) {
            this.$set(this.errors, 'containers', "необходим хотябы один контейнер")
            return false
          }
          return true
        }
    },
    checkPass () {
      let nFD = new FormData()
      nFD.append('pass',this.pass)
      axios.post('/api/article/check_pass', nFD, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        this.$set(this.errors, 'pass', false)
        return true
      }).catch((e) => {
        this.$set(this.errors, 'pass', "Пароль указан не верно")
        return false
      })
    }
  }
}
</script>
<style>
.ArticlesErrors {
  border: 1px solid red;
}
.ArticlesErrors ul {
  color: red;
}
.ArticlesErrors ul li span {
  color: red;
}
</style>
