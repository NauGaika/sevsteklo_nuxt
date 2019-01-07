<template lang="pug">
  div
    slider(:slides="slides")
    cat-list
</template>

<script>
import CategoryList from '~/components/General/CategoryList.vue'
import Slider from '~/components/General/Slider.vue'


export default {
  head () {
    return {
        title: 'Мир стекла и зеркал Севастополь',
        meta: [
          { hid: 'description', name: 'description', content: 'Изготовление и ремонт стеклянной мебели в Севастополе. Замена стекол. Широкий ассортимент стекла, установка, ремонт, доставка.' },
          { hid: 'keywords', name: 'keywords', content: 'Стекло, Севастополь, Зеркала, Купить, заказать, ассортимент стекла.' },
          { hid: 'lang', name: 'lang', content: 'ru-RU' }
        ]
      }
  },
  data: function ()
   {
     return {
       slides: [
         {name:"Разбилось окно?", content:"Заменим быстро и качественно.", img:"", src:"/glass-replace"},
         {name:"Вам необходима витрина?", content:"Изготовим в кратчайшие сроки по выгодной цене.", img:"", src:"/shop-window"},
         {name:"Изготовление стеклянной мебели", content:"Стильная стеклаянная мебель сделанная специально для вас.", img:"", src:"#"}
       ]
     }

  },
  components: {
    'cat-list': CategoryList,
    'slider': Slider
  }
}
</script>

<style>
</style>
