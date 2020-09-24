<template>
  <div>
    <Navbar />
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col><h2>Login</h2></b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-form @submit.prevent="submit">
            <div>
              <label for="email">Email</label>
              <b-form-input v-model="email" type="email"></b-form-input>
              <span v-if="$v.email.$error" style="color:red">Email field is required</span>
            </div>

            <div>
              <label for="password">Password</label>
              <b-form-input v-model="password" type="password"></b-form-input>
              <span v-if="$v.password.$error" style="color:red">Password Field is required</span>
            </div>
            <br />
            <div>
              <b-button block variant="info" type="submit">Login</b-button>
            </div>
          </b-form>
          <br>
          Dont have an Account ? <router-link to="/register">Register</router-link>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

import { required } from "vuelidate/lib/validators";

export default {
  components: {
    Navbar,
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  validations: {
    email: {
      required,
    },
    password: {
      required,
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      
    },
  },
};
</script>

<style></style>
