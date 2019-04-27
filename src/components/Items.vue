<template>
  <div>
    <b-row>
        <b-col>
        USER :  {{ itemSelected.userName }}
        </b-col>
          <b-col>
        ITEMS:  {{ itemSelected.counter }}
        </b-col>
          <b-col>
        PRECIO: S/. {{ itemSelected.price}}
        </b-col>
      <!-- <b-col>
        PRECIO: S/. {{ user.dob.age }}
        </b-col> -->
      
    </b-row>
  </div>
</template>

<script>
  export default {
    props: {
      itemSelected: Object
    },
  }
</script>

