<template>
  <q-page padding>
    <h4>{{ title }}</h4>

  <div class="group ">
  </div>

  </q-page>
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      title: 'Setting',
    };
  },

  validations: {
    form: {
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

        this.$router.push('/add');
      }
    },
  },
};
</script>

<style>
</style>
