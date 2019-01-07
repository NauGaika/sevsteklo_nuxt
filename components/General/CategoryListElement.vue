<template lang="pug">
div.CategoryListElement(@click="goToPage")
  div
    a
      img(v-bind:src="imgval", alt="foto-products")
  div
    a
      h3.CategoryListElement-title {{name}}
      p.CategoryListElement-description {{description}}
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  props: ['name', 'link', 'img', 'description'],
  computed: {
    imgval () {
      return this.$props.img.replace('\\static\\', '')
    }
  },
  methods: {
    goToPage: function () {
      this.$router.push({path: this.link})
    }
  }
}
</script>

<style>
.CategoryListElement {
  width: calc(30%);
  margin: .5em;
  box-shadow: 0 .1em .2em 0em rgb(0,0,0,0.4);
  overflow: hidden;
  border-radius: .3em;
}
.CategoryListElement div {
  width: 100%;
  position: relative;
}

.CategoryListElement div a img {
  transition: all 1s ease-out;
  width: 300px;
  height: auto;
}

.CategoryListElement div a img:hover {
  transform: scale(1.1);
}

.CategoryListElement-title{
  font-size: 22px;
  margin: 0 0 20px;
  text-decoration: underline;
  color: #008dd2;
}

.CategoryListElement-title:hover {
  color: #1EB2FA;
}
.CategoryListElement-description {
  padding-bottom: .5em;
  color: #777;
}
</style>
