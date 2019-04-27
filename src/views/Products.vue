<template>
  <div class="container gradient">
    <h1 class="styleTitle">SHOPPING CART</h1>
    <div class="text-right">
      <buttonComponent :eventButton="cart" :disabledButton="itemsInCart.length  == 0">
        <span> IR AL CARRITO <b-badge variant="light"> {{ itemsInCart.length }} </b-badge> </span>
      </buttonComponent>
    </div>
    <b-row style="margin-top: 4rem">
      <b-col cols="3" v-for="(user, index) in allUsers " :key="index">
        <Cards :user="user" ></Cards>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue'
import buttonComponent from '@/components/buttonComponent'

export default {
  name: 'products',
  components: {
    Cards,
    buttonComponent
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

<style>
  .gradient {
    
    background: #9b59b6;
    /*Linear gradient... */
    background:
        radial-gradient(
        at center, #185a86, #9b59b6
        );
	}
  .styleTitle{
    padding: 20px;
  }
</style>
