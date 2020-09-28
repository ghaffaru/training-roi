<template>
  <div>
    <div id="wrapper">
      <Aside />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Toolbar />
          <b-modal id="my-model" hide-footer>
            <template v-slot:modal-title> Upload Trainees data </template>
            <div class="d-block text-center">
              <b-form @submit.prevent="sendFile">
                <b-form-group
                  label="CSV File"
                  label-for="file"
                  label-cols-sm="2"
                  label-size="sm"
                >
                  <b-form-file
                    id="file-small"
                    accept=".csv"
                    size="sm"
                    required
                  ></b-form-file>
                  <br />
                  <div>
                    <b-button
                      class="mt-3"
                      variant="info"
                      block
                      @click="$bvModal.hide('bv-modal-example')"
                      >Submit</b-button
                    >
                  </div>
                </b-form-group>
              </b-form>
            </div>
          </b-modal>
          <h2 class="ml-4">Add Trainee data</h2>

          <b-container>
            <p>
              <span class="mr-2">Add 1 trainee data or</span>
              <b-button
                v-b-modal="'my-modal'"
                variant="info"
                @click="$bvModal.show('my-model')"
                >Upload CSV File</b-button
              >
            </p>

            <b-row>
              <b-col>
                <b-form>
                  <div>
                    <label for="firstName">First Name</label>
                    <b-form-input v-model="text"></b-form-input>
                  </div>
                </b-form>
              </b-col>
              <b-col>2 of 3</b-col>
            </b-row>
          </b-container>
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
  methods: {
    sendFile() {},
  },
};
</script>

<style>
</style>