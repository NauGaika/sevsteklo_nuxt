<template lang="pug">
  .ArticleContainerImg
    h3 Блок изображений
    div.ArticleConteinerImgPrevievContainer
      img-prev(
        v-for="(file, key) in files" 
        :key="`imgPrev_${elemIndex}_${key}`" 
        v-bind:alt="file.alt" 
        v-bind:id="file.id" 
        v-bind:src="file.src")
    my-input(name="alt файла" v-model="alt")
    art-file
    art-button(
      name="Добавить изображение" 
      :color="fileAddCheck ? '' : 'grey'" 
      @click="sendImg"
      )
    art-button(name="Удалить блок" color="red" @click="deleteContainer()")
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
import axios from 'axios'
import ArticleFile from '~/components/Articles/ArticleFile.vue'
import ArticleButton from '~/components/Articles/ArticleButton.vue'
import ArticleInputText from '~/components/Articles/ArticleInputText.vue'
import ArticleConteinerImgPreviev from '~/components/Articles/ArticleConteinerImgPreviev.vue'
export default {
  components: {
    'art-file': ArticleFile,
    'art-button': ArticleButton,
    'my-input': ArticleInputText,
    'img-prev': ArticleConteinerImgPreviev
  },
  mixins: [],
  model: [],
  props: ['elemIndex'],
  data () {
    return {
      alt: "",
      filesConf: undefined,
    }
  },
  computed: {
    files: {
      get () {
        return this.$parent.containers[this.elemIndex].files
      }
    },
    fileAddCheck: {
      get () {
        return this.filesConf && (this.alt.length > 3)
      }
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
    deleteImg (id) {
      for(let i = 0; i < this.files.length; i++) {
        if (id == this.files[i].id) {
          this.files.splice(i, 1)
          this.deleteImgFromDB(id)
          break;
        }
      }
    },
    deleteImgFromDB (id) {
      let newFormData = new FormData()
      newFormData.append('id', id)
      axios.post('/api/article/del-img', newFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        console.log(id + ' файл удален из базы')
      }).catch(() => {
        alert('Ошибка удаления файла')
      })
    },
    sendImg () {
      if (this.fileAddCheck) {
        let newFormData = new FormData()
        newFormData.append('img', this.filesConf[0])
        newFormData.append('alt', this.alt)
        axios.post('/api/article/add-img', newFormData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((res) => {
          this.addImg(res.data)
        }).catch(() => {
          alert('Ошибка отправки файла на сервер')
        })
      }
    },
    addImg (img) {
      this.files.push(img)
    },
    deleteContainer () {
        this.$parent.deleteContainer(this.elemIndex)
    }
  },
}
</script>
<style>
  .ArticleContainerImg {
    margin: 1em 0;
    border: 1px solid grey;
  }
  .ArticleContainerImg h3 {
    text-align: center;
    background: DodgerBlue;
    color: white;
    padding: .5em;
  }
  .ArticleConteinerImgPrevievContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
