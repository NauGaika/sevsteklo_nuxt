export default function ({ store, route, redirect }) {
  if (process.server) {
    store.dispatch('HeaderMenu/getMenuPointsFromDb')
    store.dispatch('CommonProps/getCommonProps')
  }
  if (process.client) {
     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}
     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym")
     ym(51433120, "init", {
          id:51433120,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
     })
  }
}
