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
    commit('ADDTOCART', payload)
  }, 
  async authenticate (store, payload){
    const {mail, pass} = payload
    const {email, password} = store.state

    const validateEmail = (mail == email)
    const validatePassword = (pass == password)

    if(validateEmail && validatePassword){
      store.commit("authenticate", true);
    }
  }
}