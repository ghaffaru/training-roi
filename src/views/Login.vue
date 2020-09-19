<template>
  <div>
    <Navbar />
    <!-- <div class="container">
      <br />
      <h3 style="text-align:center">Login</h3>
      <form @submit.prevent="login">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" v-model="email" />
                <span v-if="$v.email.required">Email field is required</span>
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>

        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" v-model="password" id="password" />
            </div>
          </div>
          <div class="col-md-2"></div>
        </div>

        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <button type="submit" class="btn btn-primary btn-block">
              Login
            </button>
          </div>
          <div class="col-md-2"></div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <router-link to="/">
              Forgot password ?
            </router-link>
          </div>
          <div class="col-md-2"></div>
        </div>
      </form>
    </div> -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Vuelidate from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  components: {
    Navbar,
  },

  data() {
      return {
          email: '',
          password: ''
      }
  },

  validations: {
      email: {
          required
      },
      password: {
          required
      }
  },

  methods: {
      login() {
         console.log($v);
      }
  }
};
</script>

<style></style>
