<template lang="pug">
  .HeaderContainerContactsMenu
    call-back.HeaderContainerContactsMenuElem
    scheduled.HeaderContainerContactsMenuElem
    telephone.HeaderContainerContactsMenuElem
      
</template>

<script>
import callBack from './HeaderContainerContactsMenuCallBack.vue'
import scheduled from './HeaderContainerContactsMenuScheduled.vue'
import telephone from './HeaderContainerContactsMenuTelephone.vue'

export default {
  components: {
    'call-back': callBack,
    'scheduled': scheduled,
    'telephone': telephone
  }
}
</script>

<style>
  .HeaderContainerContactsMenu {
    margin: 1em 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: safe center;
  }
  .HeaderContainerContactsMenuElem {
    white-space: nowrap;
    margin-left: 2em;
  }
</style>
