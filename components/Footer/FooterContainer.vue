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
        'email': '',
        'telephone_number': '',
        'city': '',
        'street': '',
        'build': ''
      }
    }
  },
  methods: {
    
  },
  mounted () {
    this.$store.dispatch('CommonProps/getCommonProps').then(() => {
      this.commonParams.email = this.$store.getters['CommonProps/getCommonProp']('email')
      this.commonParams.telephone_number = this.$store.getters['CommonProps/getCommonProp']('telephone_number')
      this.commonParams.city = this.$store.getters['CommonProps/getCommonProp']('city')
      this.commonParams.street = this.$store.getters['CommonProps/getCommonProp']('street')
      this.commonParams.build = this.$store.getters['CommonProps/getCommonProp']('build')
    })
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
