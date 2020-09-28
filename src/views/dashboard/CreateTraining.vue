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
              <b-form-select
                v-model="selected"
                :options="options"
              ></b-form-select>
            </div>
            <div>
              <label for="subject">Subject</label>
              <b-form-input type="text"></b-form-input>
            </div>
            <div>
              <label for="example-datepicker">Due Date</label>
              <b-form-datepicker
                id="example-datepicker"
                class="mb-2"
              ></b-form-datepicker>
              <div>
                <label for="status">Status</label>
                <b-form-select
                  v-model="status"
                  :options="statuses"
                ></b-form-select>
              </div>

              <div>
                <label for="status">Priority</label>
                <b-form-select
                  v-model="priority"
                  :options="priorities"
                ></b-form-select>
              </div>

              <div>
                <label for="email">Send Notification Email To</label>
                <b-form-input v-model="email"></b-form-input>
              </div>

              <div>
                <label for="description">Description</label>
                <b-form-textarea
                  id="textarea"
                  v-model="description"
                  placeholder="Training to improve team work among staff"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>

                <pre class="mt-3 mb-0">{{ text }}</pre>
              </div>

              <div>
                <b-row>
                  <b-col md="4" class="pb-2"></b-col>
                  <b-col md="4" class="pb-2"
                    ><b-button variant="info" block
                      >Create Training</b-button
                    ></b-col
                  >
                  <b-col md="4" class="pb-2"></b-col>
                </b-row>
              </div>
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
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
      ],
      statuses: [{ value: 1, text: "Not started" }],
      priorities: [{ value: 1, text: "High Priority" }],
    };
  },
};
</script>

<style></style>
