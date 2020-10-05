<template>
  <div>
    <div id="wrapper">
      <Aside />

      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Toolbar />

          <h2 class="ml-4">Add a Trainer</h2>
          <b-form class="ml-4 mr-4" @submit.prevent="addTrainer">
            <div class="row">
              <div class="col-md-6">
                <div>
                  <label for="firstName">First Name</label>
                  <b-form-input type="text" v-model="firstName"></b-form-input>
                  <span v-if="$v.firstName.$error" style="color: red"
                    >First Name field is required</span
                  >
                </div>

                <div>
                  <label for="lastName">Email</label>
                  <b-form-input type="text" v-model="email"></b-form-input>
                  <span v-if="$v.email.$error" style="color: red"
                    >Email field is required</span
                  >
                </div>
                <div>
                  <label for="title">Title</label>
                  <b-form-input type="text" v-model="title"></b-form-input>
                </div>

                <div>
                  <label for="example-datepicker">Date of Birth</label>
                  <b-form-datepicker
                    id="example-datepicker"
                    class="mb-2"
                    v-model="dateOfBirth"
                  ></b-form-datepicker>
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
              </div>
              <div class="col-md-6">
                <div>
                  <label for="lastName">Last Name</label>
                  <b-form-input type="text" v-model="lastName"></b-form-input>
                  <span v-if="$v.lastName.$error" style="color: red"
                    >Last Name field is required</span
                  >
                </div>
                <div>
                  <label for="phone">Phone</label>
                  <b-form-input type="number" v-model="phone"></b-form-input>
                  <span v-if="$v.phone.$error" style="color: red"
                    >Phone field is required</span
                  >
                </div>

                <div>
                  <label for="password">Password</label>
                  <b-form-input
                    type="password"
                    v-model="password"
                  ></b-form-input>
                  <span v-if="$v.password.$error" style="color: red"
                    >Password field is required</span
                  >
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

                  <div>
                  <label for="skills">Skills</label>
                  <b-form-input
                    type="text"
                    v-model="skills"
                  ></b-form-input>
                
                </div>
              </div>
            </div>

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

          <br />
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
      skills: ""
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
    async addTrainer() {
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
          roleId: 2,
          title: this.title,
          skills: this.skills
        };
        if (this.dateOfBirth != "") data['dateOfBirth'] = this.dateOfBirth;
        try {
          let trainer = await axios.post(
            "https://troiapi.azurewebsites.net/api/TrainingROI/NewUser",
            data
          );

          swal("Created", "The trainer has been created", "success");

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

<style></style>
