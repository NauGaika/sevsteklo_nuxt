<template lang="pug">
transition(name="modal")
  div.modal-mask
    div.modal-wrapper
      div.modal-container(v-bind:style="{ width: calcWidth, height: calcHeight, marginTop: calcMarginTop, marginLeft: calcMarginLeft}")
        div.modal-header
            h3 {{name}}
        div.modal-body
          slot
        div.modal-footer
          button.ModalButton(v-if="buttonName" @click="close") {{buttonName}}
          button.ModalButton(v-if="buttonNameSecond" @click="closeOK") {{buttonNameSecond}}
</template>

<script>

export default {
  data: function () {
    return {
    }
  },
  props: ['name', 'buttonName', 'width', 'height', 'buttonNameSecond'],
  components: {
  },
  methods: {
    close () {
      this.$emit('close')
    },
    closeOK () {
      this.$emit('closeOK')
    }
  },
  computed: {
    calcMarginLeft () {
      let a = 0
      if (this.width) {
        a = -this.width / 2
      } else {
        a = -document.documentElement.clientWidth / 2
      }
      return 'calc(' + String(a) + 'px + 2em)'
    },
    calcMarginTop () {
      let a = 0
      if (this.height) {
        a = -this.height / 2
      } else {
        a = -document.documentElement.clientHeight / 2
      }
      return 'calc(' + String(a) + 'px + 2em)'
    },
    calcHeight () {
      if (this.height) {
        return this.height + 'px'
      } else {
        return 'calc(100%-0.5em)'
      }
    },
    calcWidth () {
      if (this.width) {
        return this.width + 'px'
      } else {
        return 'calc(100%-0.5em)'
      }
    }
  }
}
</script>

<style>
  .modal-mask {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: block;
    transition: opacity .3s ease;
    overflow: auto;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    position: fixed;
    left: 50%;
    top: 50%;
    width: calc(100% - 4em);
    height: calc(100% - 4em);
    display: block;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    overflow: auto;
  }

  .modal-header h3 {
    color: rgb(0, 141, 210);
    display: block;
    width: 100%;
    text-align: center;
  }

  .modal-footer {
    text-align: center;
  }
  .modal-body {
    position: relative;
    text-align: center;
    color: black;
    bottom: 0;
    overflow: auto;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .ModalButton {
    display: inline-block;
    transition: 0.2s;
    font-weight: 400;
    border-radius: 5px;
    background: rgb(0, 141, 210);
    color: white;
    padding: 1em 0.5em;
    text-align: center;
    border: none;
    text-transform: full-width;
  }
  .ModalButton:hover {
    background: rgb(0, 151, 230);
  }
  .ModalButton:active {
    background: rgb(0, 131, 200);
    box-shadow: 0 3px rgb(0, 95, 150) inset;
  }
  @media (max-width: 400px) {
    .modal-container{
      margin: 0 !important;
      width: 100%;
      height: 100%;
    }
  }
</style>
