<template lang="pug">
  div
    header-container
    div.container
      nuxt
    footer-container
    div
      img(src="https://mc.yandex.ru/watch/51433120"
          style="position:absolute; left:-9999px;"
          alt="")
</template>
<script>
import HeaderContainer from '~/components/Header/HeaderContainer.vue'
import FooterContainer from '~/components/Footer/FooterContainer.vue'
  export default {
    name: 'App',
    middleware: "start",
    components: {
      'header-container': HeaderContainer,
      'footer-container': FooterContainer
    }
  }
</script>
<style>
@font-face {
  font-family: 'Helvetic, ';
  src: url('/static/fonts/HelveticaNeueCyr-BoldItalic.eot');
  src: url('/static/fonts/HelveticaNeueCyr-BoldItalic.eot?#iefix') format('embedded-opentype'),
       url('/static/fonts/HelveticaNeueCyr-BoldItalic.woff') format('woff'),
       url('/static/fonts/HelveticaNeueCyr-BoldItalic.ttf')  format('truetype'),
       url('/static/fonts/HelveticaNeueCyr-BoldItalic.svg#svgFontName') format('svg');
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

body {
  font-family: Helvetic, 'Open Sans', sans-serif;
  color: #000;
  padding: 0;
  margin: 0;
  letter-spacing: 0;
  font-size: 18px;
  font-weight: 400;
}

div, p, form, input, a, span, button {
  box-sizing: border-box;
}

p {
  margin: 0;
}

ul, li {
  display: block;
  padding: 0;
  margin: 0;
}

h1, h2, h3 {
  padding: 0;
  margin: 0;
  line-height: 1.25em;
  font-weight: lighter;
  color: DodgerBlue;
}

h1 {
  font-size: 2em;
  display: block;
  text-align: center;
}

h2 {
  font-size: 28px;
}

h3 {
  font-size: 22px;
}

input, button, textarea {
  outline:none;
}

a, a:hover, a:active {
  text-decoration: none;
  transition: all 0.5s ease;
  color: DodgerBlue;
  text-decoration: none;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.btn:active, .btn:focus, .btn:hover {
  box-shadow: none;
}

.animated {
  opacity: 0;
}
/* здесь у нас обработка страниц */
.list_style {
  list-style: decimal !important;
}
.exampleImg {
  display: inline-block !important;
  width: 300px;
  margin: .3em;
  box-shadow: 0 0 .5em rgb(0, 0, 0, 0.3);
  cursor: pointer;
}
.catTitle {
  margin-top: 1em;
  display: block;
  width: 100%;
  text-align: center;
  color: DodgerBlue;
}
.stubContainer {
  margin-bottom: 2em;
}
</style>
