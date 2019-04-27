export default {
  ALLUSERS (state, data) {
    state.allUsers = data.data.results
  },
  ADDTOCART (state, data) {
    state.usersSelectedToCart.push(data) 
    console.log(state, "state")
  },
  authenticate: function(state, payload) {
    state.authenticate = payload;
  }
}