<template>
  <div class="container">
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
              <button type="button" class="btn btn-primary btn-block">Register</button>
          </div>
          <div class="col-md-4"></div>
      </div>
      
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Datepicker,
  },
};
</script>

<style></style>
