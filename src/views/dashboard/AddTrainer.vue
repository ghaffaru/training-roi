<template>
  <div>
    <div id="wrapper">
      <Aside />

      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Toolbar />

          <h2 class="ml-4">Add a Trainer</h2>

          <b-form class="ml-4 mr-4">
            <div>
              <label for="firstName">First Name</label>
              <b-form-input type="text"></b-form-input>
            </div>

             <div>
              <label for="lastName">Last Name</label>
              <b-form-input type="text"></b-form-input>
            </div>

             <div>
              <label for="lastName">Email</label>
              <b-form-input type="text"></b-form-input>
            </div>

             <div>
              <label for="lastName">Phone</label>
              <b-form-input type="number"></b-form-input>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "../../components/dashboard/Aside";
import Toolbar from "../../components/dashboard/Toolbar";

export default {
  components: {
    Aside,
    Toolbar,
  },
};
</script>

<style>
</style>