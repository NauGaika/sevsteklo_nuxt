<template lang="pug">
div
  h1 Страницы не существует или она находится в разработке
</template>
<script>
import HeaderContainer from '~/components/Header/HeaderContainer.vue'
  export default {
    props: ['error'],
    layout: 'default',
    created () {
      console.log(this.error)
    }
}
</script>
<style>
</style>
