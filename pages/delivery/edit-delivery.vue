<template lang="pug">
div
  span Пароль администратора
  input(v-model="pass" type="text" :style="{'color': pass_ok ? 'green' : 'red'}" @blur="checkPass")
  table(cellspacing="0")
    tbody
      tr(v-for="el in delivery" :key="'delivery_id' + el.id")
        td(style="width: 100px")  {{el.id}}
        td {{el.region}}
        td {{el.price}}
        td(style="width: 100px") 
          my-button(color="red" name="Удалить" @click="del(el.id)")
      tr
        td(colspan="2")
          input(v-model="new_region" type="text" placeholder="Регион")
        td
          input(v-model="new_price" type="number" placeholder="Регион")
        td(style="width: 100px") 
          my-button(:color="new_region.length > 0 && new_price > 0 && pass_ok ? 'green': 'grey'" name="Добавить" @click="add")
</template>
<!-- is, v-for, v-if, v-else-if, v-else, v-show, v-cloak, v-pre, v-once, id, ref, key, slot, v-model, другие атрибуты, v-on, v-html, v-text -->
<script>
import axios from 'axios'
import MyButtonNew from '~/components/Common/MyButtonNew'
export default {
  components: {
    'my-button': MyButtonNew
  },
  mixins: [],
  model: [],
  props: [],
  async asyncData ({ error }) {
    return axios.get(`${process.env.reqUrl}/delivery/get-delivery-list/`)
    .then((res) => {
      return {
        delivery: res.data,
        new_region: '',
        new_price: 0,
        pass: '',
        pass_ok: false
      }
    }).catch((e) => {
      error({statusCode: 404, message: 'Не найдены места доставки'})
    })
  },
  computed: {

  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  activated () {},
  deactivated () {},
  beforeDestroy () {},
  destroyed () {},
  methods: {
    del (id) {
      let newFormData = new FormData()
      newFormData.append('id', id)
      newFormData.append('pass', this.pass)
      axios.post(`/api/delivery/del-delivery`, newFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((req) => {
        for(let i in this.delivery) {
          if (this.delivery[i].id == id) {
            this.delivery.splice(i, 1)
          }
        }
      })
      
    },
    add () {
      if(this.pass_ok)
      {
        let newFormData = new FormData()
        newFormData.append('region', this.new_region)
        newFormData.append('price', this.new_price)
        newFormData.append('pass', this.pass)
        axios.post(`/api/delivery/set-delivery`, newFormData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((req) => {
          this.delivery.push(req.data)
          this.new_region = ''
          this.new_price = 0
        })
      }
    },
        
    checkPass () {
      let nFD = new FormData()
      nFD.append('pass',this.pass)
      axios.post(`${process.env.baseUrl}/api/article/check_pass`, nFD, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        this.pass_ok = true
      }).catch((e) => {
        this.pass_ok = false
      })
    }
  }
}
</script>
<style scope>
table {
  border-collapse: collapse;
  margin: 1em auto;
  width: 100%;
}
table tr th, table tr td {
  border: 1px solid;
  text-align: center;
  padding: .3em;
}
input {
  height: 100%;
  font-size: 1em;
  flex-grow: 1;
}
</style>
