<template lang="pug">
div
  h1(style="margin-top: 1em") Доставка стекла и стеклянных изделий в Севастополе
  text-block(title="Стоимость доставки")
  table(cellspacing="0")
    thead
      tr
        th(width="50%") Район доставки
        th Стоимость доставки
    tbody
      tr(v-for="i in delivery" :key="'delivery = ' + i.id")
        td {{i.region}}
        td {{i.price}} руб.
  text-block(title="Карта доставки")
    iframe(src="https://yandex.ru/map-widget/v1/?um=constructor%3A8a289300a431fc11c62012e21cc2abe2c5542684b00932fb0b4a161c73ddefdc&amp;source=constructor"
        width="100%"
        height="720"
        frameborder="0")
</template>

<script>
import TextBlock from '~/components/Common/TextBlock.vue'
import axios from 'axios'
export default {
  head () {
    return {
        title: 'Стоимость доставки стекол и стеклянных изделий в Севастополе',
        meta: [
          { hid: 'description', name: 'description', content: 'Перевозка и доставка стекол, зеркал, стеклянной мебели по Севастополю и Крыму. Специализированный транспоррт. Цены на доставку.' },
          { hid: 'keywords', name: 'keywords', content: 'Доставка, Севастополь, стоимость, районы' },
          { hid: 'lang', name: 'lang', content: 'ru-RU' }
        ]
      }
  },
  async asyncData ({ error }) {
    return axios.get(`${process.env.reqUrl}/delivery/get-delivery-list/`)
    .then((res) => {
      return {
        delivery: res.data
      }
    }).catch((e) => {
      error({statusCode: 404, message: 'Не найдены места доставки'})
    })
  },
  components: {
    'text-block': TextBlock
  },
}
</script>

<style scope>
  table {
    border-collapse: collapse;
    margin: 1em auto;
    width: 100%;
  }
  table tr th, table tr td {
    border: 1px solid;
    text-align: center;
    padding: .3em;
  }
</style>
