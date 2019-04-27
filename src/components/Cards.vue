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
       <!-- <b-form-input style="width:45px, text-align:center" v-model="text" ></b-form-input> -->
        <b-row>
          <b-col>
            <b-button variant="danger">-</b-button>
          </b-col>
          <b-col>
            <b-form-input v-model="text" ></b-form-input>
          </b-col>        
          <b-col>
           <b-button variant="success">+</b-button>
          </b-col>
        </b-row>
        <b-button href="#" variant="primary"> COMPRAR </b-button>
      </b-card>
    </div>
   </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  data() {
    return {
     text: ""
    }
  } 
}
</script>


// :width="widthModal"