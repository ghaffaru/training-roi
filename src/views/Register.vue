<template>
  <div>
    <Navbar />
    <!-- <div class="container">
      <br />
      <h3>Register</h3>
      <form action="">
        <div class="row">
          <div class="col-md-6 xl-6 sm-6">
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="title" />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" class="form-control" id="lastName" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <div class="form-group">
              <label for="birthdate">Date of birth</label>
              <datepicker :bootstrap-styling="true"></datepicker>
            </div>

            <div class="form-group">
              <label for="department">Department</label>
              <select class="form-control">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div class="col-md-6 xl-6 sm-6">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" />
            </div>

            <div class="form-group">
              <label for="phone">Phone</label>
              <input type="number" class="form-control" id="phone" />
            </div>

            <div class="form-group">
              <label for="company">Company</label>
              <select class="form-control">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class="form-group">
              <label for="role">Role</label>
              <select class="form-control">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <button type="button" class="btn btn-primary btn-block">
              Register
            </button>
          </div>
          <div class="col-md-4"></div>
        </div>
      </form>
    </div> -->
    <br />
    <b-container>
      <h2>Register</h2>
      <b-form @submit.prevent="submit">
        <b-row>
          <b-col>
            <b-form-group id="role" label="Role" label-for="input-1">
              <b-form-select
                :options="options"
                v-model="roleId"
              ></b-form-select>
              <span v-if="$v.roleId.$error" style="color: red">
                The Role field is required</span
              >
            </b-form-group>
            <div>
              <label for="firstName">First Name</label>
              <b-form-input type="text" v-model="firstName"></b-form-input>
              <span v-if="$v.firstName.$error" style="color: red">
                The First Name field is required</span
              >
            </div>

            <div>
              <label for="email">Email</label>
              <b-form-input type="email" v-model="email"></b-form-input>
              <span v-if="$v.email.$error" style="color: red">
                The Email field is required</span
              >
            </div>

            <div>
              <label for="password">Password</label>
              <b-form-input type="password" v-model="password"></b-form-input>
              <span v-if="$v.password.$error" style="color: red">
                The Password field is required</span
              >
            </div>

            <b-form-group id="role" label="Department" label-for="input-1">
              <b-form-select
                :options="departments"
                v-model="departmentId"
              ></b-form-select>
              <span v-if="$v.departmentId.$error" style="color: red">
                The Department field is required</span
              >
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="role" label="Organization" label-for="input-1">
              <b-form-select
                :options="organizations"
                v-model="companyId"
              ></b-form-select>
              <span v-if="$v.companyId.$error" style="color: red">
                The Organization field is required</span
              >
            </b-form-group>
            <div>
              <label for="lastName">Last Name</label>
              <b-form-input type="text" v-model="lastName"></b-form-input>
              <span v-if="$v.lastName.$error" style="color: red">
                The Last Name field is required</span
              >
            </div>
            <div>
              <label for="title">Title</label>
              <b-form-input type="text" v-model="title"></b-form-input>
              <span v-if="$v.title.$error" style="color: red">
                The Title field is required</span
              >
            </div>

            <div>
              <label for="phone">Phone</label>
              <b-form-input type="number" v-model="phoneNumber"></b-form-input>
              <span v-if="$v.phoneNumber.$error" style="color: red">
                The Phone field is required</span
              >
            </div>

            <div>
              <label for="example-datepicker">Date of Birth</label>
              <b-form-datepicker
                id="example-datepicker"
                class="mb-2"
                v-model="dateOfBirth"
              ></b-form-datepicker>
              <span v-if="$v.dateOfBirth.$error" style="color: red">
                The Date of Birth field is required</span
              >
            </div>
          </b-col>
        </b-row>
        <div>
          <b-row>
            <b-col></b-col>
            <b-col
              ><b-button block variant="info" type="submit"
                >Register</b-button
              ></b-col
            >
            <b-col></b-col>
          </b-row>
          <br />
          <b-row>
            <b-col></b-col>
            <b-col
              >Already have an Account?
              <router-link to="/login">Login</router-link></b-col
            >
            <b-col></b-col>
          </b-row>
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from "../components/Navbar";
import { required, minLength, between, email } from "vuelidate/lib/validators";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      options: [{value: 1, text: 'Trainer'}],
      organizations: [{value: 1, text: 'Abeyie Studios'}],
      departments: [{value: 1, text: 'Createor cluv'}],

      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      title: "",
      companyId: "",
      departmentId: "",
      roleId: "",
      dateOfBirth: "",
    };
  },
  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    email: {
      required,
      email,
    },
    roleId: {
      required,
    },
    companyId: {
      required,
    },
    password: {
      required,
    },
    departmentId: {
      required
    },
    phoneNumber: {
      required
    },
    title: {
      required
    },
    dateOfBirth: {
      required
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      
      if (this.$v.$invalid) {
        return;
      }else{
        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          dateOfBirth: this.dateOfBirth,
          phoneNumber: this.phoneNumber,
          email: this.email,
          password: this.password,
          title: this.title,
          companyId: this.companyId,
          departmentId: this.departmentId,
          roleId: this.roleId
        }

        axios.post('https://troiapi.azurewebsites.net/api/TrainingROI/NewUser', data)
        .then(response => {
          console.log(response);
        }).catch(err => {
          console.log(err);
        })
      }
    },

  
  },

  mounted() {
   
  },
};
</script>

<style></style>
