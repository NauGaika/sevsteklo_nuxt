<template lang="pug">
  div.HeaderContainerContactsMenuScheduled
    p
      fa(:icon="fas.faClock")
      span  Пн-Пт с 10 до 17:00
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export default {
  computed: {
      fas () {
         return fas
      },
      faGithub () {
         return faGithub
      }
    },
}
</script>

<style>
.HeaderContainerContactsMenuScheduled {
  color: #777;
  font-size: .8em;
  text-align: right;
}
.HeaderContainerContactsMenuScheduled p {
  padding-top:.5em;
}
.header__accept-applic {
  text-align: right;
  color: #777777;
  font-size: 13px;
  margin-top: 20px;
}

.header__accept-applic p i {
  font-size: 17px;
}

.header__accept-applic-cost {
  color: #008dd2;
  text-decoration: none;
  border-bottom: dotted;
}

.header__accept-applic-cost:hover {
  color: #777777;
}
</style>
