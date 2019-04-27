<template>
   <div>
     <div>
       
      <b-card
        :title= user.name.first
        :img-src= user.picture.large
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
       <b-row>
          <b-col>
            PRECIO: S/. {{ user.dob.age }}
           </b-col>
         
        </b-row>

         <b-row>
          <b-col>
            <b-button :disabled="counter == 0" variant="danger" @click="rest" >-</b-button>
          </b-col>
          <b-col>
            <b-form-input disabled v-model="counter" ></b-form-input>
          </b-col>        
          <b-col>
           <b-button variant="success" @click="add">+</b-button>
          </b-col>
        </b-row>
        <b-button variant="primary" style="margin-top: 2rem" :disabled="counter == 0" @click="addToCart(user)" > AGREGAR </b-button>
      </b-card>
    </div>
   </div>
</template>

<script>
import { debug } from 'util';
export default {
  props: {
    user: Object
  },
  data() {
    return {
     counter: 0
    }
  },
  methods: {
    rest () {
      this.counter = (this.counter -1)
    },
    add () {
      this.counter = (this.counter + 1)
    },
    addToCart (user) {

      let payload = {
        counter: this.counter,
        picture: user.picture.large,
        userName: user.name.first,
        price: (this.counter * Number(user.dob.age)),
      }

      this.$store.dispatch("addToCard", payload );   
    }
  }
}
</script>


// :width="widthModal"