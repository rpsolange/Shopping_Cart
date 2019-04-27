<template>
  <div class="container">
    <div class="text-center" style="margin-top: 6rem">
      <b-button variant="primary" :disabled="itemsInCart.length  == 0"  @click="cart">
        IR AL CARRITO <b-badge variant="light"> {{ itemsInCart.length }} </b-badge>
      </b-button>
    </div>
    <b-row style="margin-top: 6rem">
      <b-col v-for="(user, index) in allUsers " :key="index">
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
    },
    itemsInCart() {
      let totalItems = this.$store.state.usersSelectedToCart
      return totalItems
    }
  }
}
</script>

