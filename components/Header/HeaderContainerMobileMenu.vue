<template lang="pug">
div.MobileMenu
  h1.smallLogo Мир стекла и зеркала г.Севастополь
  menu-general-button(v-on:ChangeStateMenu="changeMenuState" v-bind:menuIsOpen="menuIsOpen")
  div.MobileMenuLogo
    img(src="/img/logo.png")
    div.MobileMenuULContainer(v-bind:class="{ 'MobileMenuULContainer-opened' : menuIsOpen, 'MobileMenuULContainer-closed' : !menuIsOpen }")
        ul
          li(v-for="(point, keyPoint) in this.$store.getters['HeaderMenu/getMenuPoints']")
            a.MobileMenuLink(:href="point.src" v-if="point.sub_point.length == 0" :title="point.title" @click="changeMenuState") {{point.title}}
            a.MobileMenuTitle(v-if="point.sub_point.length != 0"  @click="changeMenuPointState({refName:'point_'+keyPoint, key: keyPoint})") {{point.title}}
              point-button(v-if="point.sub_point.length != 0" v-bind:ref="'point_'+keyPoint" v-bind:keyPoint="keyPoint")

            ul.MobileMenuSubList(
              v-if="point.sub_point.length > 0"
              v-bind:class="{'MobileMenuSubList-opened' : point.isOpen}"
            )
              li(v-for="sub in point.sub_point" class="sub")
                a.MobileMenuLink(:href="sub.src" :title="sub.title" @click="changeMenuState") {{sub.title}}

</template>
<script>
import HeaderContainerMobileMenuMenuButton from './HeaderContainerMobileMenuMenuButton.vue'
import HeaderContainerMobileMenuPointButton from './HeaderContainerMobileMenuPointButton.vue'
import {XYZ, Line, Path} from '~/assets/CommonScripts/CS_Geometry'

export default {
  components: {
    'menu-general-button': HeaderContainerMobileMenuMenuButton,
    'point-button': HeaderContainerMobileMenuPointButton
  },
  data: function () {
    return {
      menuIsOpen: false,
      timer: ''
    }
  },
  methods: {
    changeMenuState () {
      console.log('test')
      this.menuIsOpen = !this.menuIsOpen
    },
    changeMenuPointState(e) {
      this.$refs[e.refName][0].changeMenuPointState(e.key)
    }
  }
}
</script>
<style>
.test{
  border: 1px solid black;
}
@media (max-width: 900px)
{
  .MobileMenuULContainer-closed {
    display: none;
  }
  .smallLogo{
    font-size: 1em;
    display: block;
    padding-right: 3em;
    min-height: 2.5em;
    vertical-align: middle;
    padding-top: .5em;
    text-align: center;
  }
  .MobileMenuLogo img {
    display: none;
  }
  .MobileMenuULContainer ul {
    text-align: center;
  }
  .MobileMenuULContainer ul li ul {
    margin: .5em 0;
    background: whitesmoke;
  }
  .MobileMenuSubList {
    display: none;
  }
  .MobileMenuSubList-opened {
    display: block;
  }
  .MobileMenuLink {
    text-decoration: underline;
  }
  /* .MobileMenuLink:hover {
    background: DodgerBlue;
    padding: 0.5em;
    border-radius: .5em;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    color: white;
  } */
  .MobileMenuTitle {
    cursor: pointer;
  }
}
@media (min-width: 900px)
{
  a {
    cursor: pointer;
  }
  .MobileMenu {
    display: block;
    margin: 0 auto;
    margin-left: 4em;
    margin-right: 4em;
    margin-top: 4em;
    z-index: 100;
  }
  .smallLogo {
    display: none
  }
  .MobileMenuLogo{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
  .MobileMenuULContainer {
  }
  .MobileMenuLogo img {
    display: block;
    height: 6em;
    /* flex-grow: 0; */
    margin-top: -4em;
  }
  .MobileMenuULContainer {
    /* flex-grow: 1; */
    vertical-align: bottom;
    margin-left: 1em;
  }
  .MobileMenuULContainer ul {
    display: inline-block;
  }
  .MobileMenuULContainer ul li {
    display: inline-block;
    position: relative;
  }
  .MobileMenuULContainer ul li a {
    display: block;
    padding: 0.5em;
  }
  .MobileMenuULContainer ul li ul {
    position: absolute;
    padding-top: .5em;
    display: block;
    overflow: hidden;
    height: 0;
    width: auto;

  }
  .MobileMenuULContainer ul li:hover ul {
    overflow: visible;
  }
  .MobileMenuULContainer ul li ul li {
    display: block;
    cursor: pointer;
    background: white;
    box-shadow: 0 1em 1em .1em rgb(0,0,0,0.1);

  }
  .MobileMenuULContainer ul li ul li a {
    white-space: nowrap;
    padding: .5em;
  }
  .MobileMenuLink {
    text-decoration: underline;
    border-radius: .5em;
  }
  .MobileMenuLink:hover {
    background: DodgerBlue;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    color: white;
  }
}
</style>
