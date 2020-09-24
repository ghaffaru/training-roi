<template>
  <div>
    <div id="wrapper">
      <Aside />

      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Toolbar />

          <h2 class="ml-4">Create Training</h2>

          <b-form class="ml-4 mr-4">
            <div>
                <label for="trainer">Trainer</label>
                <b-form-select v-model="selected" :options="options"></b-form-select>
            </div>
            <div>
                <label for="subject">Subject</label>
                 <b-form-input type="text"></b-form-input>
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
  data() {
      return {
          options:  [{ value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' }],
      }
  }
};
</script>

<style></style>
