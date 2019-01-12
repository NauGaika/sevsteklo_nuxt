<template lang="pug">
section.products
  h2.products__title.
    Категории товаров
  div.CategoryListElementContainer
    product-element(
      v-for="cat in allCategory"
      v-bind:key="cat.id"
      v-bind:link="cat['link']"
      v-bind:img="cat['imgSrc']"
      v-bind:name="cat['title']"
      v-bind:description="cat['description']"
      )
</template>

<script>
import CategoryListElement from './CategoryListElement'


export default {
  props: ['allCategory'],
  components: {
    'product-element': CategoryListElement
  }
}
</script>

<style>
@media (min-width: 600px)
{
    .CategoryListElementContainer{
      display: flex;
      flex-wrap: wrap;
    }
    .products {
      padding-top: 2em;
      text-align: center;
      background: #fff;
    }

    .products__title {
      margin-bottom: 1em;
    }
}
@media (max-width: 600px) {
  .CategoryListElementContainer{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .products {
    padding-top: 2em;
    text-align: center;
    background: #fff;
  }

  .products__title {
    margin-bottom: 1em;
  }
}

</style>
