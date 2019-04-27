export default {
  ALLUSERS (state, data) {
    state.allUsers = data.data.results
    console.log(state, "state")
  },
  authenticate: function(state, payload) {
    state.authenticate = payload;
  }
}