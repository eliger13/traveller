<template>
  <q-page padding>
    <h4>{{ title }}</h4>

    <div class="group ">
      <p class="text-weight-medium text-center">
          Remember that it must be a minimum of 8 characters.</p>

      <q-field
        icon="lock"
        :error="$v.form.oldPassword.$error"
        error-label="Please type a valid password"
      >
        <q-input type="password"
              v-model="form.oldPassword"
              float-label="Old Password"
              @blur="$v.form.oldPassword.$touch"
              @key.enter="submit"/>
      </q-field>

      <q-field
        icon="lock"
        color="secundary"
        :error="$v.form.password.$error"
        error-label="Please type a valid password"
      >
      <q-input type="password"
            v-model="form.password"
            float-label="Password"
            @blur="$v.form.password.$touch"
            @key.enter="submit"/>
      </q-field>

      <q-field
        icon="lock"
        :error="$v.form.confirmPassword.$error"
        error-label="Please type a valid confirm password"
      >
        <q-input type="password"
              v-model="form.confirmPassword"
              float-label="Confirm Password"
              @blur="$v.form.confirmPassword.$touch"
              @key.enter="submit"/>
      </q-field>
      <br/>
      <q-field class="text-center">
        <q-btn rounded push color="primary" @click="submit"> Submit </q-btn>
        <q-btn rounded push color="negative" @click="cancelAction">Cancel</q-btn>
      </q-field>
  </div>

  </q-page>
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      title: 'Change Password',
      form: {
        password: '',
        confirmPassword: '',
      },
    };
  },

  validations: {
    form: {
      oldPassword: { required, minLength: minLength(8) },
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
          message: 'Change your Password successfully.',
          type: 'positive',
        });

        this.$router.push('/settings/setting/');
      }
    },
    cancelAction() {
      this.$v.$touch();
      this.$q.notify('Cancelled');
      this.$router.push('/settings/setting/');
    },
  },
};
</script>

<style>
</style>
