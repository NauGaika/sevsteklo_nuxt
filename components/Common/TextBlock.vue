<template lang="pug">
  div
    div.TextBlock
      h2.TextBlockCatTitle(v-if="h1") {{title}}
      h1.TextBlockCatTitle(v-else) {{title}}
    div.StubDescription
      slot
</template>

<script>
export default {
  data: function () {
    return {

    }
  },
  props: ['title', 'h1'],
  components: {

  },
  methods: {
  }
}
</script>

<style>
.TextBlock h1, .TextBlock h2 {
  font-size: 1.3em;
}
  .TextBlockCatTitle {
    margin-top: 1.5em;
    margin-bottom: 0.7em;
    display: block;
    width: 100%;
    text-align: center;
    color: DodgerBlue;
    font-size: 2em;
  }
  .StubDescription {
    text-align: center;
    line-height: 1.7em;
    margin-bottom: .5em;
  }
  .StubDescription img {
    display: inline-block;
  }
  .StubDescription p {
    text-indent: 20px;
    margin-top: 0.5em;
  }
  .StubDescription ul{
    margin-top: 0.5em;
    margin-left: 1em;
  }
  .StubDescription ul li{
    margin-top: 1em;
  }
  .StubDescription ul li:before{
    content:'•';
    margin-left:-1em;
    margin-right: 0.5em;
  }
</style>
