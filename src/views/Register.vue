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
      <b-form>
        <b-row>
          <b-col>
            <b-form-group id="role" label="Role" label-for="input-1">
              <b-form-select :options="options"></b-form-select>
            </b-form-group>
            <div>
              <label for="firstName">First Name</label>
              <b-form-input type="text"></b-form-input>
            </div>

            <div>
              <label for="email">Email</label>
              <b-form-input type="email"></b-form-input>
            </div>

            <div>
              <label for="password">Password</label>
              <b-form-input type="password"></b-form-input>
            </div>

            <b-form-group id="role" label="Department" label-for="input-1">
              <b-form-select :options="departments"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="role" label="Organization" label-for="input-1">
              <b-form-select :options="organizations"></b-form-select>
            </b-form-group>
            <div>
              <label for="lastName">Last Name</label>
              <b-form-input type="text"></b-form-input>
            </div>
            <div>
              <label for="title">Title</label>
              <b-form-input type="text"></b-form-input>
            </div>

            <div>
              <label for="phone">Phone</label>
              <b-form-input type="number"></b-form-input>
            </div>

            <div>
              <label for="example-datepicker">Date of Birth</label>
              <b-form-datepicker
                id="example-datepicker"
                class="mb-2"
              ></b-form-datepicker>
            </div>
          </b-col>
        </b-row>
        <div>
          <b-row>
            <b-col></b-col>
            <b-col><b-button block variant="info">Register</b-button></b-col>
            <b-col></b-col>
          </b-row>
  <br>
          <b-row>
            <b-col></b-col>
            <b-col>Already have an Account? <router-link to="/login">Login</router-link></b-col>
            <b-col></b-col>
          </b-row>
        </div>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import Navbar from "../components/Navbar";
export default {
  components: {
    Datepicker,
    Navbar,
  },
  data() {
    return {
      options: ["Trainer"],
      organizations: ["Abeyie Studios"],
      departments: ["Creators Club"],
    };
  },
};
</script>

<style></style>
