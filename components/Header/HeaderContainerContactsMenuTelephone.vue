<template lang="pug">
  .HeaderContainerContactsMenuTelephone
    p
      fa(:icon="fas.faPhone")
      a(:href='"tel:" + commonParams["telephone_number"]')
        |  {{formatTelephone(commonParams['telephone_number'])}}
    p
      fa(:icon="fas.faPhone")
      a(:href='"tel:" + commonParams["telephone_number_2"]')
        |  {{formatTelephone(commonParams['telephone_number_2'])}}
    p
      fa(:icon="fas.faEnvelope")
      a(:href='"mailto:" + commonParams["email"]')
        |  {{commonParams['email']}}
</template>

<script>
// import GetCommonParamMixin from '~/assets/CommonScripts/CommonMixin/GetCommonParamMixin.js'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
  data: function () {
    return {
      commonParams: {
        'email': '',
        'telephone_number': '',
        'telephone_number_2': ''
      }
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
    }
  },
  computed: {
      fas () {
         return fas
      }
    },
  mounted () {
    this.$store.dispatch('CommonProps/getCommonProps').then(() => {
      this.commonParams.email = this.$store.getters['CommonProps/getCommonProp']('email')
      this.commonParams.telephone_number = this.$store.getters['CommonProps/getCommonProp']('telephone_number')
      this.commonParams.telephone_number_2 = this.$store.getters['CommonProps/getCommonProp']('telephone_number_2')
    })
  }
}

</script>

<style>
.HeaderContainerContactsMenuTelephone {
  font-size: 1em;
  line-height: 1.5;
  color:  DodgerBlue;
}
</style>
