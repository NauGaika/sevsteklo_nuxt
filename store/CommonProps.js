import axios from 'axios'
const CommonProps = {
  namespaced: true,
  state: {
    commonProps: []
  },

  mutations: {
    addCommonProps (state, arr) {
      state.commonProps = arr
    }
  },

  actions: {
    getCommonProps ({ commit, state }) {
      return new Promise((resolve, reject) => {
        const path = `http://sev-steklo.ru/api/get-all/common_props`
        axios.get(path)
        .then(response => {
          let data = response.data
          let newData = {}
          for (let i of data.RowData) {
            newData[i.name] = {
              value: i.value,
              id: i.id
            }
          }
          commit('addCommonProps', newData)
          resolve()
        })
        .catch(error => {
          console.log(error)
        })
      })
    }
  },

  getters: {
    commonPropsGet: state => {
      return state.commonProps
    },
    getCommonProp: state => name => {
      let par = state.commonProps[name]
      console.log(par)
      if (par != undefined) {
        return state.commonProps[name].value
      } else {
        return `Параметра ${name} нет в базе`
      }
    }
  }
}

export default CommonProps
