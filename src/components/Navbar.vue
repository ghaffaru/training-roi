<template>
  <div>
      <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">ROI</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
    
    </ul>
    <ul class="navbar-nav">
        <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
        </li>
        <span>   </span>
        <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
        </li>
    </ul>
    
  </div>
</nav> -->

<b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Training ROI</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <b-nav-item><router-link to="/" style="color:white">Home</router-link></b-nav-item>
        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       
       <b-nav-item><router-link to="/register" style="color:white">Register</router-link></b-nav-item>
        
        <b-nav-item><router-link to="/login" style="color:white">Login</router-link></b-nav-item>
       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>