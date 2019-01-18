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
      vk: this.$store.getters['CommonProps/getCommonProp']('vk'),
      viber: this.$store.getters['CommonProps/getCommonProp']('viber'),
      whatsapp: this.$store.getters['CommonProps/getCommonProp']('whatsapp'),
    }
  },
  computed: {
  }
}
</script>
<style>
</style>
