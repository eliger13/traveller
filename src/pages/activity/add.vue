<template>
  <q-page padding>
   <h4>{{ title }}</h4>

    <div class="group ">
      <q-field>
      <q-select float-label="Activity"
        v-model="form.category"
        :options="[
        {
          label: 'Naturaleza',
          value: 'nature'
        },
        {
          label: 'Deportes Acuaticos',
          value: 'depAcuaticos'
        },
        {
          label: 'Deportes Extremos',
          value: 'depExtremos'
        },
        {
          label: 'Historia',
          value: 'history'
        }]"/>
      </q-field>

      <q-field
        icon="mail"
        :error="$v.form.activity.$error"
        error-label="Please type a valid activity"
      >
        <q-input type="email" v-model="form.activity" float-label="Activity"
                @blur="$v.form.activity.$touch" />
      </q-field>

      <q-field
        icon="mail"
        :error="$v.form.host.$error"
        error-label="Please type a valid host"
      >
        <q-input type="email" v-model="form.host" float-label="Host"
                @blur="$v.form.host.$touch" />
      </q-field>

      <q-field
        icon="mail"
        :error="$v.form.address.$error"
        error-label="Please type a valid address"
      >
        <q-input type="email" v-model="form.address" float-label="Address"
                @blur="$v.form.address.$touch" />
      </q-field>

      <q-field>
      <q-select float-label="Country"
        v-model="form.country"
        :options="[
        {
          label: 'America',
          value: 'america'
        },
        {
          label: 'Europe',
          value: 'europe'
        },
        {
          label: 'Africa',
          value: 'africa'
        },
        {
          label: 'Asia',
          value: 'asia'
        }]"/>
      </q-field>

       <q-field
        icon="mail"
        :error="$v.form.language.$error"
        error-label="Please type a valid language"
      >
        <q-input type="email" v-model="form.language" float-label="Language"
                @blur="$v.form.language.$touch" />
      </q-field>

      <q-field>
        <q-input
          v-model="form.description"
          type="textarea"
          float-label="Description"
          :max-height="100"
          rows="7"
        />
      </q-field>

      <q-field>
        <q-input v-model="form.price" type="number" prefix="$US"
                 float-label="Price"/>
      </q-field>

      <q-field>
        <q-input
          v-model="form.requirements"
          type="textarea"
          float-label="requirements"
          :max-height="100"
          rows="7"
        />
      </q-field>

      <q-list>
        <q-list-header>Schedule </q-list-header>
        <q-item>
        <q-item-side icon="update" />
        <q-item-main>
        <q-datetime v-model="form.schedule.start" type="time"
                    float-label="Start"/>
        </q-item-main>
        </q-item>
        <q-item>
        <q-item-side icon="update"/>
        <q-item-main>
        <q-datetime v-model="form.schedule.end" type="time"
                    float-label="End"/>
        </q-item-main>
        </q-item>
      </q-list>

      <br/>
      <q-field class="text-center">
        <q-btn color="primary" @click="submit">Submit</q-btn>_
        <q-btn color="negative" @click="submit">Cancel</q-btn>
      </q-field>
    </div>
  </q-page>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      title: 'Create Activity',
      form: {
        category: '',
        activity: '',
        host: '',
        address: '',
        country: '',
        language: '',
        description: '',
        price: '',
        requirements: '',
        schedule: {
          start: '',
          end: '',
        },
        photos: '',
      },
    };
  },

  validations: {
    form: {
      activity: { required, minLength: minLength(4) },
      host: { required, minLength: minLength(8) },
      address: { required, minLength: minLength(8) },
      country: { required },
      language: { required },
      description: {
        required,
        minLength: minLength(15),
        maxLength: maxLength(512),
      },
      price: { required },
      requirements: {
        required,
        minLength: minLength(15),
        maxLength: maxLength(512),
      },
      schedule: {
        start: { required },
        end: { required },
      },
      photos: {},
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
