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
          <b-alert variant="success" show v-if="this.$route.query.new"
            >You have successfully registered, Please Login</b-alert
          >
          <b-form @submit.prevent="submit">
            <div>
              <label for="email">Email</label>
              <b-form-input v-model="email" type="email"></b-form-input>
              <span v-if="$v.email.$error" style="color:red"
                >Email field is required</span
              >
            </div>

            <div>
              <label for="password">Password</label>
              <b-form-input v-model="password" type="password"></b-form-input>
              <span v-if="$v.password.$error" style="color:red"
                >Password Field is required</span
              >
            </div>
            <br />
            <div>
              <b-button block variant="info" type="submit">
                <b-spinner small type="grow" v-if="loading"></b-spinner
                >Login</b-button
              >
            </div>
          </b-form>
          <br />
          Dont have an Account ?
          <router-link to="/register">Register</router-link>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { required } from "vuelidate/lib/validators";
import swal from 'sweetalert';
import axios from 'axios';
export default {
  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
      email: "",
      password: "",

      loading: false,
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
      this.loading = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.loading = false;
        return;
      } else {
        axios
          .get(
            `
https://troiapi.azurewebsites.net/api/TrainingROI/GetUser/${this.email}/${this.password}`
          )
          .then((response) => {
            this.$store.dispatch('setUser', response.data).then(() => {
              this.$router.push('/dashboard')
            })
            console.log(response.data);
          }).catch(err => {
            swal('Oops', 'Incorrect Email or Password', 'error')
            this.loading = false;
          })
      }
    },
  },
  mounted() {
    console.log(this.$v);
    if (this.$store.state.user.userId) {
      this.$router.push('/dashboard')
    } 
  }
};
</script>

<style></style>
