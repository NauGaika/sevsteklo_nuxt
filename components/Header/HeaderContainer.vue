<template lang="pug">
header
  contact-menu.HeaderContainerContactMenu
  mobile-menu.HeaderContainerMobileMenu
</template>

<script>
import HeaderContainerMobileMenu from './HeaderContainerMobileMenu.vue'
import HeaderContainerContactsMenu from './HeaderContainerContactsMenu.vue'

export default {
  components: {
    'mobile-menu': HeaderContainerMobileMenu,
    'contact-menu': HeaderContainerContactsMenu
  }
}
</script>

<style>
header {
  display: flex;
  flex-direction: column;
}
@media (max-width: 900px) {
    .HeaderContainerContactMenu {
      order: 2
    }
    .HeaderContainerMobileMenu {
      order: 1
    }  
}
</style>
