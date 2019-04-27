<template>
  <div class="container">
    <b-row>
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

  },
  computed: {
    allUsers() {
      let users = this.$store.state.allUsers
      return users
    }
  }
}
</script>

