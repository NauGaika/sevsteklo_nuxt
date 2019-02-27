<template lang="pug">
  div
    h1 Создание картинки
    div.content
      img(:src="img_dir + currentSrc",  usemap="#image-map")
    input(type="text", v-model="src")
    input(type="number", v-model="width")
    input(type="number", v-model="height")
    map(name="image-map")
      area(coords="112,18,111,400,3,472,2,1,84,3", shape="poly", @click="test('wl')")
      area(coords="117,401,690,395,689,21,114,15", shape="poly", @click="test('ws')")
      area(coords="795,458,685,393,690,17,718,3,798,3", shape="poly", @click="test('wr')")
      area(coords="800,597,798,481,687,402,120,408,0,478,1,599", shape="poly", @click="test('f')")
    img.primer(:src="src")
</template>

<script>
import TextBlock from '~/components/Common/TextBlock.vue'
import axios from 'axios'
export default {
  data: function () {
    return {
      img_dir: process.env.baseUrl + '/img/tiles/',
      currentSrc: "bg.png",
      width: 600,
      height: 600,
      src: "",
    }
  },
  components: {
    'text-block': TextBlock
  },
  methods: {
    test (a) {
      let newFormData = new FormData()
      newFormData.append('json', JSON.stringify(
        {
          width: this.width,
          height: this.height,
          src: this.src,
          curImg: this.currentSrc.split('?')[0],
          part: a
        }))
        axios.post('/api/tiles/', newFormData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((res) => {
          this.currentSrc = res.data
          this.$forceUpdate()
        }).catch(() => {
          alert('Ошибка добавления страницы')
        })
    }
  }
}
</script>

<style scoped>
  .content {
    width: 800px;
    height: 600px;
    background: red;
  }
  .primer {
    display: block;
    height: 200px;
    width: auto;
  }
</style>
