<template lang="pug">
div.stubContainer
  text-block(title="Замена стекла" v-bind:h1="true")
    p Часто случаются ситуации, вследствие которых повреждаются стеклянные поверхности. Иногда это могут быть совсем небольшие трещины, однако даже в таких случаях появляется необходимость замены стекла. Ведь трещина уже свидетельствует о том, что стеклянная структура нарушена и,  если не так скоро, то в ближайшем будущем, может полностью поломаться.
    p В таких случаях можно легко обойтись заменой лишь поврежденной части стекла, при этом оставляя в прежнем виде все остальное. Замена стекла подразумевает определенный процесс и понадобиться некоторая подготовка.
    p Сперва, специалисты снимут мерки поврежденного стекла, затем обработают новое и установят его на месте старого
  text-block(title="В чем преимущества замены стекла на новое? ")
    p На самом деле замена стекла имеет множество преимуществ по сравнению с покупкой нового изделия. Дело в том, что не всегда повреждаются небольшие стеклянные предметы, которые можно легко и просто заменить новыми. Трещины также могут образоваться и на больших предметах, таких как стеклянные двери, окна, витрины и душевые кабины, которые сами собой имеют высокую цену. Заменяя лишь определенный участок стекла, вам не придется переплачивать за стоимость нового товара, вы лишь платите за стоимость отдельного стеклянного участка. Помимо экономии замена стекла поможет также сократить временные расходы. Это делается довольно-таки быстро и подразумевает самые небольшие неудобства.
  text-block(title="В каких случаях еще делается замена стекла? ")
    p Очень часто приходится заменять совсем неповрежденное стекло. Такое бывает после ремонта или обновления вашего интерьера. Например, до ремонта у вас стояла душевая кабина из матового стекла, а после ремонта вы захотели заменить ее узорчатым стеклом, которое бы вписывалось в дизайн вашей ванной. Такая замена может потребоваться в самых разных случаях, будь то квартира или офисное помещение.
    p Наш магазин «Мир стекла и зеркал» также производит и замену стеклянных перегородок, которые могли служить в качестве стен или обрамлений в офисе или торговом центре. Это обычно делается для того, чтобы изменить размеры магазинов или комнат.
    p Более того, мы производим замену стекла не только в целях починки изделий, но и при воплощении ваших дизайнерских идей. В таких случаях ваше старое стекло может замениться на новое стекло другого типа: матовое, цветное или стекло с рисунками.
</template>
<script>
import TextBlock from '~/components/Common/TextBlock.vue'
export default {
  head () {
    return {
        title: 'Замена стекол в мебели и окнах Севастополь' + ' - Мир стекла и зеркал',
        meta: [
          { hid: 'description', name: 'description', content: 'Выполним замену стекол и зеркал в поврежденной мебели по доступной цене. Двери, окна, шкафы, столы, холодильники, раздвижные системы. Широкий ассортимент стекла.' },
          { hid: 'keywords', name: 'keywords', content: 'Замена, Севастополь, стекло' },
          { hid: 'lang', name: 'lang', content: 'ru-RU' }
        ]
      }
  },
  data: function () {
    return {
      galleryFilter: 'all',
      thumbnailDir: process.env.baseUrl + 'img/stub/StubGlassReplace/'
    }
  },
  components: {
    'text-block': TextBlock
  },
  methods: {
    showLightbox: function (imageName) {
      this.$refs.lightbox.show(imageName)
    },
    updateFilter (filterName) {
      this.galleryFilter = filterName
    }
  }
}
</script>

<style>
</style>
