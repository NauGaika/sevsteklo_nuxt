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
      files: [
        {
          id: 1,
          alt: "Виллиан ds fdsaasd fdsaf dsaf dsaf ds",
          src: "https://pp.userapi.com/c850728/v850728337/8c5d6/8OxLEnCxhUQ.jpg"
        },
        {
          id: 2,
          alt: "Romewar",
          src: "https://www.romewar.ru/img/intro.gif"
        },
        {
          id: 3,
          alt: "Romewar",
          src: "https://www.romewar.ru/img/intro.gif"
        },
        {
          id: 4,
          alt: "Romewar",
          src: "https://www.romewar.ru/img/intro.gif"
        },
        {
          id: 5,
          alt: "Виллиан",
          src: "https://pp.userapi.com/c850728/v850728337/8c5d6/8OxLEnCxhUQ.jpg"
        },
        {
          id: 6,
          alt: "Виллиан",
          src: "https://pp.userapi.com/c850728/v850728337/8c5d6/8OxLEnCxhUQ.jpg"
        }
      ],
      alt: "",
      filesConf: undefined,
    }
  },
  computed: {
    fileAddCheck: {
      get () {
        return this.filesConf && (this.alt.length > 3)
      }
    },
    container: {
      get () {
        return this.$parent.containers[this.elemIndex]
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
          break;
        }
      }
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
          console.log('Файл загружен')
          console.log(res)
        }).catch(() => {
          console.log('Файл не загружен')
        })
      }
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
