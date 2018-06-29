<template>
  <q-page padding>
    <h4>{{ title }}</h4>

    <div class="group ">

      <q-field
        icon="mail"
        :error="$v.form.email.$error"
        error-label="Please type a valid email"
      >
        <q-input type="email" v-model="form.email" float-label="Email"
                @blur="$v.form.email.$touch" />
      </q-field>

      <q-field
        icon="lock"
        :error="$v.form.password.$error"
        error-label="Please type a valid password"
      >
        <q-input type="password" v-model="form.password"  float-label="Password"
                 @blur="$v.form.password.$touch" @key.enter="submit"/>
      </q-field>
      <br/>
      <p class="text-weight-medium text-center">Do you have and Acount?<br/>
        <a href="/register"
           class="link text-bold text-primary">Register for free</a>
      </p>
      <q-field class="text-center">
        <q-btn color="primary" @click="submit">Login</q-btn>
      </q-field>
    </div>
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

<style scoped>
 .link {
   text-decoration: none;
 }
</style>
