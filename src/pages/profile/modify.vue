<template>
  <q-page padding>
    <h4>{{ title }}</h4>

  <div class="group ">

      <q-field
        icon="person"
        :error="$v.form.name.$error"
        error-label="Please type a valid Full Name">
          <q-input type="text"
                  v-model="form.name"
                  float-label="Full Name"
                  @blur="$v.form.name.$touch" />
      </q-field>

      <q-field
        icon="mail"
        :error="$v.form.email.$error"
        error-label="Please type a valid email">
          <q-input type="email"
                  v-model="form.email"
                  float-label="Email"
                  @blur="$v.form.email.$touch" />
      </q-field>

      <q-field
        icon="local_phone"
        :error="$v.form.phone.$error"
        error-label="Please type a valid telepone">
        <q-input type="number"
                v-model="form.phone"
                float-label="Telephone"
                @blur="$v.form.phone.$touch" />
      </q-field>

      <q-field
        icon="cake"
        :error="$v.form.birth.$error"
        error-label="Please type a valid Birthday">
          <q-datetime type="date"
                      v-model="form.birth"
                      float-label="Birthday"
                      @blur="$v.form.phone.$touch" />
      </q-field>

      <q-field icon="person">
          <q-select radio
                    v-model="form.gender.genders"
                    float-label="Gender"
                    :options="listOfGenders"/>
      </q-field>

      <q-field
        icon="place"
        :error="$v.form.address.$error"
        error-label="Please type a valid Address">
          <q-input type="text"
                  v-model="form.address"
                  float-label="Address"
                  @blur="$v.form.address.$touch" />
      </q-field>

      <q-field icon="photo_camera">
        <q-uploader :url="url"
          float-label="Download Photo"
          v-model="form.photos"/>
      </q-field>

      <q-modal v-model="opened" float-label="Password">
        <h6>Password</h6>
        <q-btn color="primary"
            @click="opened"
            label="Close"/>
      </q-modal>

      <br/>
      <q-field class="text-center">
        <q-btn  rounded push color="primary" @click="submit">Submit</q-btn>
        <q-btn  rounded push color="negative" @click="cancelAction">Cancel</q-btn>
      </q-field>
  </div>
  </q-page>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      title: 'Person Profile',
      opened: false,
      form: {
        name: '',
        email: '',
        phone: '',
        birth: '',
        gender: {
          genders: ['f', 'm'],
        },
        address: '',
      },
      url: '',
      listOfGenders: [
        {
          label: 'Female',
          value: 'f',
        },
        {
          label: 'Male',
          value: 'm',
        },
      ],
    };
  },

  validations: {
    form: {
      name: { required, minLength: minLength(7) },
      email: { required, email },
      phone: { required, minLength: minLength(8) },
      birth: { required },
      gender: { },
      address: { required, minLength: minLength(8) },
    },
  },

  methods: {
    submit() {
      this.$router.push('/viewP');
    },
  },
};
</script>

<style>
</style>
