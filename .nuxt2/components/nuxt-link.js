
export default {
  name: 'NuxtLink',
  functional: true,
  render(h, { data, children }) {
    return h('router-link', data, children)
  }
}
