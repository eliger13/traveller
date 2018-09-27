<template>
  <q-page padding>
    <h4>{{ title }}</h4>

  <div class="group ">

      <q-field
        icon="person"
        :error="$v.form.name.$error"
        error-label="Please type a valid Full Name"
      >
        <q-input type="text" v-model="form.name" float-label="Full Name"
                  @blur="$v.form.name.$touch" />
      </q-field>

      <q-field
        icon="mail"
        :error="$v.form.email.$error"
        error-label="Please type a valid email"
      >
        <q-input type="email" v-model="form.email"  float-label="Email"
                @blur="$v.form.email.$touch" />
      </q-field>

      <q-field
        icon="lock"
        :error="$v.form.password.$error"
        error-label="Please type a valid password"
      >
        <q-input type="password" v-model="form.password" float-label="Password"
               @blur="$v.form.password.$touch" @key.enter="submit"/>
      </q-field>

      <q-field
        icon="lock"
        :error="$v.form.confirmPassword.$error"
        error-label="Please type a valid confirm password"
      >
        <q-input type="password" v-model="form.confirmPassword"
              float-label="Confirm Password"
              @blur="$v.form.confirmPassword.$touch" @key.enter="submit"/>
      </q-field>
      <br/>
      <q-field class="text-center">
        <q-btn rounded push color="primary" @click="submit"> Register
        </q-btn>
      </q-field>
  </div>

  </q-page>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      title: 'Register',
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  },

  validations: {
    form: {
      name: { required, minLength: minLength(7) },
      email: { required, email },
      password: { required, minLength: minLength(8) },
      confirmPassword: { sameAsPassword: sameAs('password') },
    },
  },

  methods: {
    submit() {
      this.$v.$touch();

      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.');
      } else {
        this.$q.notify({
          message: 'Login successfully.',
          type: 'positive',
        });

        this.$router.push('/');
      }
    },
  },
};
</script>

<style>
</style>
