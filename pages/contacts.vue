<template lang="pug">
div.container
  text-block(title="Где мы находимся?")
    span.adress
      span.
        г. {{getCommonProp('city')}} ул. {{getCommonProp('street')}} {{getCommonProp('build')}}
    iframe(
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad21c1a83867d8e2c88ac7f354714eb10040db20306dded2fc1ab4a41030b81a3&amp;source=constructor",
      width="100%",
      :height="maxHeight",
      frameborder="0")
  text-block(title="Есть ли у нас парковка?")
    span У нас весьма просторная паркова и всегда найдется место для вашего автомобиля
  text-block(title="Как с нами связаться?")
    span(v-for="(val, key) in contacts" class="point_of_contact")
      a(:href="formatElement(val).pref + formatElement(val).valDb")
        fa(:icon="formatElement(val).fa")
        span(class="add_blue add_space_h") {{formatElement(val).val}}
  text-block(title="График нашей работы")
    span.sheduled Мы работаем Пн-Сб 8:00 - 17:00 Вс - выходной
  text-block(title="Необходима юридическая информация о нас?")
    span(v-for="(val,key) in adm_param") {{val.name + ': ' + getCommonProp(key)}} </br>
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
      maxHeight: 600,
      adm_param: {
        organization: {name: 'Наименование'},
        inn: {name: 'ИНН'},
        ogrnip: {name: 'ОГРНИП'},
        okpo: {name: 'ОКПО'},
        checking_account: {name: 'р/сч.'},
        bank: {name: 'Банк'},
        bik: {name: 'БИК'},
        adress: {name: 'Юр. Адрес'}
      },
      contacts: [
        {
          name: 'telephone_number', 
          fa: ['fas', 'faPhone'],
          compFunc: 'formatTelephone',
          pref:'tel:'
        },
        {
          name: 'telephone_number_2', 
          fa: ['fas', 'faPhone'],
          compFunc: 'formatTelephone',
          pref:'viber://add?number=', 
        },
        {
          name: 'viber', 
          fa: ['fab', 'faViber'],
          compFunc: 'formatTelephone',
          pref:'tel:', 
        },
        {
          name: 'vk', 
          fa: ['fab', 'faVk'],
          pref:'http://www.vk.com/',
        }
      ]
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
    formatTelephone (tel) {
      let newString = ""
      if (tel){
        newString += tel.substring(0,2)
        newString += " "
        newString += "("
        newString += tel.substring(2,5)
        newString += ")"
        newString += " "
        newString += tel.substring(5,8)
        newString += "-"
        newString += tel.substring(8,10)
        newString += "-"
        newString += tel.substring(10,12)
        return newString
      }
      return tel
    },
    getCommonProp (prop) {
      return this.$store.getters['CommonProps/getCommonProp'](prop)
    },
    formatElement (el) {
      let newEl = {}
      newEl.name = el.name
      newEl.pref = el.pref
      newEl.fa = this[el.fa[0]][el.fa[1]]
      newEl.val = el.compFunc ? this[el.compFunc](this.getCommonProp(el.name)) : this.getCommonProp(el.name)
      newEl.valDb = this.getCommonProp(el.name)
      return newEl
    }
  },
  mounted () {
    if (process.browser) {
      this.maxHeight = window.innerHeight - 100
      if (this.maxHeight > 500) {
        this.maxHeight = 500
      }
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
