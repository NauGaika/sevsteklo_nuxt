<template lang="pug">
a.HeaderContainerContactsMenuCallBackContactsElement(:href="href")
  fa(:icon="fab[icon]")
</template>

<script>
import { fab } from '@fortawesome/free-brands-svg-icons'

export default {
  props: ['href', 'icon'],
  computed: {
    fab () {
       return fab
    }
  }
}
</script>

<style>
.HeaderContainerContactsMenuCallBackContactsElement {
  transition: .5s;
  font-size: 1.6em;
  padding: 0 .3em;
  cursor: pointer;
  color: DodgerBlue;
  filter: grayscale(100%);
}

.HeaderContainerContactsMenuCallBackContactsElement:hover {
  filter: grayscale(0%);
}
</style>
