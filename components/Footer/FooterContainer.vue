<template lang="pug">
  .FooterContacts
    h3 Контакты
    ul
      li Адрес: г. {{commonParams.city}} ул. {{commonParams.street}} {{commonParams.build}}
      li График работы: 8:00-17:00
      li e-mail: {{commonParams.email}}
      li ООО "Лимаренко"
      li Телефон: {{commonParams.telephone_number}}
    vue-ya-metrica( :counter="51433120" enable-hash enable-webvisor)

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
