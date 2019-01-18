import axios from 'axios'
const HeaderMenu = {
  namespaced: true,
  state: {
    menuPoints: []
  },
  mutations: {
    addMenuPoint (state, arr) {
      state.menuPoints = arr
    },
    changeMenuPointState (state, position) {
      state.menuPoints[position].isOpen = !state.menuPoints[position].isOpen
    }
  },
  actions: {
    getMenuPointsFromDb ({ commit, state }) {
      if (state.menuPoints.length === 0) {
        const path = `http://127.0.0.1:3000/api/get-menu-point/`
        axios.get(path)
          .then(response => {
            let data = response.data
            for (let i in data) {
              data[i].isOpen = false
            }
            commit('addMenuPoint', data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  },
  getters: {
    getMenuPoints: state => {
      return state.menuPoints
    }
  }
}

export default HeaderMenu
