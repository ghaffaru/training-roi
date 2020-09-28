<template>
  <div>
    <div id="wrapper">
      <Aside />

      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Toolbar />

          <h2 class="ml-4">Add a Trainer</h2>

          <b-form class="ml-4 mr-4" @submit.prevent="addTrainer">
            <div>
              <label for="firstName">First Name</label>
              <b-form-input type="text" v-model="firstName"></b-form-input>
               <span v-if="$v.firstName.$error" style="color:red"
                >First Name field is required</span
              >
            </div>

            <div>
              <label for="lastName">Last Name</label>
              <b-form-input type="text" v-model="lastName"></b-form-input>
               <span v-if="$v.lastName.$error" style="color:red"
                >Last Name field is required</span
              >
            </div>

            <div>
              <label for="lastName">Email</label>
              <b-form-input type="text" v-model="email"></b-form-input>
               <span v-if="$v.email.$error" style="color:red"
                >Email field is required</span
              >
            </div>

            <div>
              <label for="phone">Phone</label>
              <b-form-input type="number" v-model="phone"></b-form-input>
               <span v-if="$v.phone.$error" style="color:red"
                >Phone field is required</span
              >
            </div>

            <div>
              <label for="expertArea">Expert Area</label>
              <b-form-input type="text" v-model="expertArea"></b-form-input>
               <span v-if="$v.expertArea.$error" style="color:red"
                >Expert Area field is required</span
              >
            </div>
            <br />
            <div>
              <b-button size="lg" variant="info" type="submit">
                <b-spinner small type="grow" v-if="loading"></b-spinner
                >Add</b-button
              >
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
import { required } from "vuelidate/lib/validators";
import axios from 'axios';
import swal from 'sweetalert';
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
      expertArea: "",

      loading: false,
    };
  },
    validations: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required
      },
      phone: {
        required
      },
      expertArea: {
        required
      }
  },

  methods: {
    async addTrainer()   {
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
          phone: this.phone,
          expertArea: this.expertArea

        }


        try {
          let trainer = await axios.post('https://troiapi.azurewebsites.net/api/TrainingROI/NewTrainer', data)

          swal("Created", "The trainer has been created", "success");

          this.loading = false;
          this.firstName = '',
          this.lastName = '',
          this.phone = '',
          this.expertArea = '',
          this.email = ''
          this.$v.$reset();
        }
        catch (e) {
         swal('Oops', 'Could not create trainer, Try again', 'error')
        }


      }

    },

  
  },
  mounted() {
    console.log(this.$v);
  }
};
</script>

<style></style>
