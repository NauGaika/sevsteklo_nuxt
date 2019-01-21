export default function ({ store, route, redirect }) {
  if (process.server) {
    store.dispatch('HeaderMenu/getMenuPointsFromDb')
    store.dispatch('CommonProps/getCommonProps')
  }
}
