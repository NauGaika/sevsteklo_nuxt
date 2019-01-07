<template lang="pug">
div
  h1(style="margin-top: 1em") Доставка стекла и стеклянных изделий в Севастополе
  text-block(title="Стоимость доставки")
  table(cellspacing="0")
    tr
      th(width="50%") Район доставки
      th Стоимость доставки
    tr
      td Гагаринский район
      td 500 руб.
    tr
      td Ленинский район
      td 700 руб.
    tr
      td Балаклава
      td 700 руб.
  text-block(title="Карта доставки")
    iframe(src="https://yandex.ru/map-widget/v1/?um=constructor%3A8a289300a431fc11c62012e21cc2abe2c5542684b00932fb0b4a161c73ddefdc&amp;source=constructor"
        width="100%"
        height="720"
        frameborder="0")
</template>

<script>
import TextBlock from '~/components/Common/TextBlock.vue'
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
