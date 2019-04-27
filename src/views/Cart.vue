<template>
  <div style="margin-top: 5rem">
    <h1>PRODUCTOS SELECCIONADOS</h1>

    <div style="margin-top: 3rem">
      <b-col v-for="(item, index) in itemSelected " :key="index">
        <Items :itemSelected="item" ></Items>
      </b-col>

    </div>


    <b-row style="margin: 4rem 1rem">
      PRECIO TOTAL : S/. {{ totalPrice }}
    </b-row>

  </div>
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

