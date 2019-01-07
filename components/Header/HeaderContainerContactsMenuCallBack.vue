<template lang="pug">
  div
    contact-element(icon="faWhatsappSquare" :href="'whatsapp://send?phone=' + whatsapp")
    //- contact-element(icon="faWhatsapp" :href="commonParams.whatsapp")
    contact-element(icon="faVk" :href="'http://vk.com/'+ vk")
    contact-element(icon="faViber" :href="'viber://add?number=' + viber")
</template>
<script>
import HeaderContainerContactsMenuCallBackContactsElement from './HeaderContainerContactsMenuCallBackContactsElement.vue'
export default {
  components: {
    "contact-element": HeaderContainerContactsMenuCallBackContactsElement
  },
  data () {
    return {
      vk: "",
      viber: "",
      whatsapp: "",
    }
  },
  computed: {
  },
  beforeCreate () {
    this.$store.dispatch('CommonProps/getCommonProps').then(() => {
      this.viber = this.$store.getters['CommonProps/getCommonProp']('viber')
      this.whatsapp = this.$store.getters['CommonProps/getCommonProp']('whatsapp')
      // this.commonParams.telegram = this.$store.getters['CommonProps/getCommonProp']('telegramm')
      this.vk = this.$store.getters['CommonProps/getCommonProp']('vk')
      // console.log(this.commonParams.vk)
    })
  }
}
</script>
<style>
</style>
