<template lang="pug">
  .FooterContacts
    h3 Контакты
    ul
      li 
        a(href="/contacts") Адрес: г. {{getCommonProp('city')}} ул. {{getCommonProp('street')}} {{getCommonProp('build')}}
      li График работы: 8:00-17:00
      li e-mail: {{getCommonProp('email')}}
      li {{getCommonProp('organization')}}
      li Телефон: {{getCommonProp('telephone_number')}}

</template>
<script>
import VueYaMetrica from '~/assets/CommonScripts/VueYaMetrica'
export default {
  data () {
    return {
      commonParams: {
        'email': this.$store.getters['CommonProps/getCommonProp']('email'),
        'telephone_number': this.$store.getters['CommonProps/getCommonProp']('telephone_number'),
        'city': this.$store.getters['CommonProps/getCommonProp']('city'),
        'street': this.$store.getters['CommonProps/getCommonProp']('street'),
        'build': this.$store.getters['CommonProps/getCommonProp']('build')
      }
    }
  },
  methods: {
    getCommonProp (prop) {
      return this.$store.getters['CommonProps/getCommonProp'](prop)
    }  
  }
}
</script>
<style>
.FooterContacts {
  font-size: .9em;
  padding-top: 2em;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}
</style>
