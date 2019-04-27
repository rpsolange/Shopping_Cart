// import ApiCall from '../core/http/index'
import {HTTP} from '../main.js'

export default {
  async getData ({ commit }) {
    HTTP.get('?results=10')
    .then(res => {
      commit('ALLUSERS', res)
    })
  },
  async addToCard ({ commit }, payload ) {
    console.log(payload, "payload")
    commit('ADDTOCART', payload)

  }, 
}