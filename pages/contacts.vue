<template lang="pug">
div.container
  div
    h2 Где мы находимся?
    span.adress
      i(style="font-size :20px; color: #008dd2;", class="fa fa-home")
      span.
        г. Севастополь ул.Острякова 166Б
  div
    iframe(src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad21c1a83867d8e2c88ac7f354714eb10040db20306dded2fc1ab4a41030b81a3&amp;source=constructor",
    width="100%",
    height="600",
    frameborder="0")
  div(class="col-12 add_space")
    h2 Есть ли у нас парковка?
  span.add_space
    span.add_space_h У нас весьма просторная паркова и всегда найдется место для вашего автомобиля
  div(class="col-12 add_space")
    h2 Как мы выглядим?
  div(class="col-12 add_space")
    h2 Как с нами связаться?
    span(class="point_of_contact add_space")
      a(href="tel:+79788167295")
        fa(:icon="fas.faPhone")
        span(class="add_blue add_space_h") +7 (978) 816-72-95
    span(class="point_of_contact add_space")
      a(href="tel:+79788021371")
        fa(:icon="fas.faPhone")
        span(class="add_blue add_space_h") +7 (978) 802-13-71
    span(class="point_of_contact add_space")
      a(href="viber://add?number=+7978167295")
        fa(:icon="fab.faViber")
        span(class="add_blue add_space_h") +7 (978) 816-72-95
    span(class="point_of_contact add_space")
      a(href="http://www.vk.com/sev_steklo")
        fa(:icon="fab.faVk")
        span(class="add_blue add_space_h") sev_steklo
  div
    div.row
      div(class="col-12 add_space")
        h2(v-on:click="refreshMessage") График нашей работы
        span.sheduled Мы работаем Пн-Сб 8:00 - 17:00 Вс - выходной
  div
    div.row
      div(class="col-12 add_space")
        h2 Необходима юридическая информация о нас?
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import TextBlock from '~/components/Common/TextBlock.vue'
export default {
  head () {
      return {
          title: 'Контакты' + ' - Мир стекла и зеркал г. Севастополь',
          meta: [
            { hid: 'description', name: 'description', content: 'Расположение и контакты компании Мир стекла и зеркал в г. Севастополь. Замена оконных стекол, изготовление стеклянной мебели.' },
            { hid: 'keywords', name: 'keywords', content: 'Контакты Мир Стекла и зеркал в Севастополе. Адрес, телефон, реквизиты, схема проезда, e-mail, telegramm, whatsapp, vkontakte.' },
            { hid: 'lang', name: 'lang', content: 'ru-RU' }
          ]
        }
  },
  data: function () {
    return {
      images: [

      ],
      galleryFilter: 'all',
      thumbnailDir: ''
    }
  },
  components: {
    'text-block': TextBlock
  },
  computed: {
      fas () {
         return fas
      },
      fab () {
         return fab
      }
    },
  methods: {
    showLightbox: function (imageName) {
      this.$refs.lightbox.show(imageName)
    },
    updateFilter (filterName) {
      this.galleryFilter = filterName
    }
  }
}
</script>

<style>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
h2{
  text-align: center !important;
  margin-top: 2em;
}
.adress{
  margin: 1em !important;
  display: block;
}
.adress span{
  padding: 1em;
}
.point_of_contact{
  display: block;
}
.point_of_contact img{
width: 1.5em;
}
.add_space{
  padding-top: 1em;
}
.add_space_h{
  padding-left: 1em;
}
.add_blue{
  color: #008dd2;
  font-weight: 600;
}
.sheduled {
  display: block;
  width:100%;
  text-align: center;
  margin-top: 1em;
}
</style>
