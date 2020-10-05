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
                    ref="file"
                    required
                  ></b-form-file>
                  <span v-if="fileError" style="color: red">{{
                    fileError
                  }}</span>
                  <br />
                  <div>
                    <b-button class="mt-3" variant="info" block type="submit">
                      <b-spinner
                        small
                        type="grow"
                        v-if="fileLoading"
                      ></b-spinner
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
            <b-form @submit.prevent="submit">
              <b-row>
                <b-col>
                  <div>
                    <label for="firstName">First Name</label>
                    <b-form-input v-model="firstName"></b-form-input>
                    <span v-if="$v.firstName.$error" style="color: red"
                      >First Name field is required</span
                    >
                  </div>

                  <div>
                    <label for="email">Email</label>
                    <b-form-input v-model="email"></b-form-input>
                    <span v-if="$v.email.$error" style="color: red"
                      >Email field is required</span
                    >
                  </div>

                  <div>
                    <label for="phone">Phone</label>
                    <b-form-input v-model="phone" type="number"></b-form-input>
                    <span v-if="$v.phone.$error" style="color: red"
                      >Phone field is required</span
                    >
                  </div>

                  <div>
                    <label for="example-datepicker">Date of Birth</label>
                    <b-form-datepicker
                      id="example-datepicker"
                      class="mb-2"
                      v-model="dateOfBirth"
                    ></b-form-datepicker>
                  </div>

                  <b-form-group
                    id="role"
                    label="Organization"
                    label-for="input-1"
                  >
                    <b-form-select
                      :options="organizations"
                      v-model="companyId"
                    ></b-form-select>
                    <span v-if="$v.companyId.$error" style="color: red">
                      The Organization field is required</span
                    >
                  </b-form-group>
                </b-col>
                <b-col>
                  <div>
                    <label for="lastName">Last Name</label>
                    <b-form-input v-model="lastName"></b-form-input>
                    <span v-if="$v.lastName.$error" style="color: red"
                      >Last Name field is required</span
                    >
                  </div>

                  <div>
                    <label for="password">Password</label>
                    <b-form-input
                      v-model="password"
                      type="password"
                    ></b-form-input>
                    <span v-if="$v.password.$error" style="color: red"
                      >Password field is required</span
                    >
                  </div>

                  <div>
                    <label for="title">Title</label>
                    <b-form-input v-model="title"></b-form-input>
                  </div>
                  <b-form-group
                    id="role"
                    label="Department"
                    label-for="input-1"
                  >
                    <b-form-select
                      :options="departments"
                      v-model="departmentId"
                    ></b-form-select>
                    <span v-if="$v.departmentId.$error" style="color: red">
                      The Department field is required</span
                    >
                  </b-form-group>

                  <!-- <div> -->
                  <label for="skills">Skills</label>
                  <b-form-input type="text" v-model="skills"></b-form-input>

                  <!-- </div> -->
                </b-col>
              </b-row>

              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                  <div>
                    <b-button size="lg" block variant="info" type="submit">
                      <b-spinner small type="grow" v-if="loading"></b-spinner
                      >Add</b-button
                    >
                  </div>
                </div>
                <div class="col-md-4"></div>
              </div>
            </b-form>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "../../components/dashboard/Aside";
import Toolbar from "../../components/dashboard/Toolbar";
import { required } from "vuelidate/lib/validators";
import axios from "axios";
import swal from "sweetalert";
export default {
  components: {
    Aside,
    Toolbar,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      title: "",
      password: "",
      organizations: [],
      departments: [],
      loading: false,
      companyId: "",
      departmentId: "",
      roleId: "",
      dateOfBirth: "",
      skills: "",

      file: "",
      fileError: "",
      fileLoading: false
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
    },
    phone: {
      required,
    },
    password: {
      required,
    },
    companyId: {
      required,
    },
    departmentId: {
      required,
    },
  },
  methods: {
    sendFile() {
      this.fileLoading = true;
      this.file = this.$refs.file.files[0];

      if (!this.file) {
        this.fileError = "Please upload a csv file";
        this.fileLoading = false;
        return;
      } else {
        let formData = new FormData();
        formData.append("userDetailsFile", this.file);

        axios
          .post(
            "https://troiapi.azurewebsites.net/api/TrainingROI/UploadUserDetails",
            formData
          )
          .then((response) => {
            if (response.status == 206) {
              swal(
                "Oops",
                "Could not upload data, Please check the format",
                "error"
              );
              this.fileLoading = false;
            } else {
              swal("Created", "The trainees data has been uploaded", "success");
              this.fileLoading = false;
            }
          })
          .catch((error) => {
            swal(
              "Oops",
              "Could not upload data, Please check the format",
              "error"
            );
            this.fileLoading = false;
          });
      }
    },
    async submit() {
      this.loading = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.loading = false;
        return;
      } else {
        let data = {
          firstname: this.firstName,
          lastname: this.lastName,
          email: this.email,
          phoneNumber: this.phone,
          password: this.password,

          organizationId: this.companyId,
          departmentId: this.departmentId,
          title: this.title,
          roleId: 3,
          title: this.title,
          skills: this.skills,
        };
        if (this.dateOfBirth != "") data["dateOfBirth"] = this.dateOfBirth;
        try {
          let trainer = await axios.post(
            "https://troiapi.azurewebsites.net/api/TrainingROI/NewUser",
            data
          );

          swal("Created", "The trainee has been created", "success");

          this.loading = false;
          (this.firstName = ""),
            (this.lastName = ""),
            (this.phone = ""),
            (this.password = ""),
            (this.email = "");
          this.title = "";
          this.companyId = "";
          this.departmentId = "";
          this.dateOfBirth = "";
          this.skills = "";

          this.$v.$reset();
        } catch (e) {
          if (e.response.status == 406) {
            swal("Oops", "User already exist with that email", "error");
            this.loading = false;
          } else {
            swal("Oops", "Could not create trainer, Try again", "error");
            this.loading = false;
          }
        }
      }
    },
  },

  mounted() {
    axios
      .get("https://troiapi.azurewebsites.net/api/TrainingROI/GetAllCompany")
      .then((response) => {
        // console.log(response.data);
        let companies = response.data;
        companies.forEach((element) => {
          element.value = element.companyId;
          element.text = element.name;
        });

        this.organizations = companies;
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    axios
      .get(
        "https://troiapi.azurewebsites.net/api/TrainingROI/GetAllDepartments"
      )
      .then((response) => {
        let departments = response.data;
        departments.forEach((element) => {
          (element.value = element.companyId), (element.text = element.name);
        });

        this.departments = departments;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  },
};
</script>

<style>
</style>