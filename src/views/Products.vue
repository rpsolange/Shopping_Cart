<template>
  <div class="container">

   <b-button variant="primary" style="margin-top: 4rem" @click="cart"> IR AL CARRITO </b-button>

    <b-row style="margin-top: 6rem">
      <b-col v-for="(user, index) in allUsers " :key="index">

        <!-- {{ user }} -->
        <Cards :user="user" ></Cards>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue'

export default {
  name: 'products',
  components: {
    Cards
  },
  data() {
   return {
    //  allUsers: this.$store.state.allUsers
   }
  },
  methods: {
    cart() {
     this.$router.replace({ name: 'cart'})
    }
  },
  computed: {
    allUsers() {
      let users = this.$store.state.allUsers
      return users
    }
  }
}
</script>

