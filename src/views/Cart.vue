<template>
  <b-container class="gradient widthPage">
    <h1 class="styleTitle">PRODUCTOS SELECCIONADOS</h1>
    <div style="margin-top: 3rem">
      <b-col v-for="(item, index) in itemSelected " :key="index">
        <Items :itemSelected="item" ></Items>
      </b-col>

    </div>


    <b-row style="margin: 4rem 1rem">
      <b-col class="orderTotal">
        PRECIO TOTAL : S/. {{ totalPrice }}
      </b-col>
    </b-row> 

  </b-container>
</template>

<script>
import Items from '@/components/Items.vue'

  export default {
    components: {
      Items
    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {
      itemSelected() {
        let items = this.$store.state.usersSelectedToCart
          return items
      },
      totalPrice () {
        let count = 0
        for (let index = 0; index < this.itemSelected.length; index++) {
          count += (this.itemSelected[index].counter *  this.itemSelected[index].price)
          
        }
        return count
      }
    } 
  }
</script>

<style>
.widthPage{
  min-width: 1140px !important;
}

.orderTotal{
  text-align: right;
  font-size: 1.5rem;
}

</style>

