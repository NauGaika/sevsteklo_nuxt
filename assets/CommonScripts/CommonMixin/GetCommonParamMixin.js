import axios from 'axios'

var GetCommonParamMixin = {
  mounted: function () {
    for (let par in this.commonParams) {
      let path = `api/get-param/` + par
      axios.get(path)
        .then(response => {
          let data = response.data
          this.commonParams[par] = data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

export default GetCommonParamMixin
