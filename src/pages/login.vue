<template>
  <q-page padding>
    <h4>{{ title }}</h4>
    <q-field
      icon="mail"
      label="Email"
      :error="$v.form.email.$error"
      error-label="Please type a valid email"
    >
      <q-input type="email" v-model="form.email" @blur="$v.form.email.$touch" />
    </q-field>

    <q-field
      icon="lock"
      label="Password"
      :error="$v.form.password.$error"
      error-label="Please type a valid password"
    >
      <q-input type="password" v-model="form.password"
               @blur="$v.form.password.$touch" @key.enter="submit"/>
    </q-field>

    <q-btn color="primary" @click="submit">Submit</q-btn>
  </q-page>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      title: 'Login',
      form: {
        email: '',
        password: '',
      },
    };
  },

  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(8) },
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
      }
    },
  },
};
</script>

<style>
</style>
