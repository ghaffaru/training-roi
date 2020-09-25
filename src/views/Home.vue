<template>
  <div class="home">

    <Register />
  </div>
</template>

<script>

import Navbar from '../components/Navbar'
import Register from './Register'
export default {
  name: 'Home',
  components: {
    Navbar,
    Register
  },

  mounted() {
    if (this.$store.state.user.userId) {
      this.$router.push('/dashboard')
    } 
  }
}
</script>
