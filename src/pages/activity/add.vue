<template>
  <q-page padding>
   <h4>{{ title }}</h4>

    <div class="group ">
      <q-field icon="photo_album">
        <q-select radio
          float-label="Category"
          v-model="form.category"
          :options="categories"/>
      </q-field>

      <q-field
        icon="terrain"
        :error="$v.form.activity.$error"
        error-label="Please type a valid activity"
        >
        <q-input
          v-model="form.activity"
          float-label="Activity"
          @blur="$v.form.activity.$touch"/>
      </q-field>

      <q-field
        icon="assignment_ind"
        :error="$v.form.host.$error"
        error-label="Please type a valid host"
        >
        <q-input
          v-model="form.host"
          float-label="Host"
          @blur="$v.form.host.$touch" />
      </q-field>

      <q-field
        icon="place"
        :error="$v.form.address.$error"
        error-label="Please type a valid address"
        >
        <q-input
          v-model="form.address"
          float-label="Address"
          @blur="$v.form.address.$touch" />
      </q-field>

      <q-field icon="outlined_flag">
        <q-select
          float-label="Country"
          v-model="form.country"
          :options="countries"/>
      </q-field>

      <q-field icon="language">
        <q-select multiple
          float-label="Languages"
          v-model="form.language"
          :options="listOfLanguages"/>
      </q-field>

      <q-field icon="description">
        <q-input
          v-model="form.description"
          type="textarea"
          float-label="Description"
          :max-height="100"
          rows="7"/>
      </q-field>

      <q-field icon="receipt">
        <q-input
          v-model="form.requirements"
          type="textarea"
          float-label="Requirements"
          :max-height="100"
          rows="7"/>
      </q-field>

      <q-field>
        <q-input
          v-model="form.price"
          type="number"
          prefix="$US"
          float-label="Price"/>
      </q-field>

      <q-list>
        <q-list-header>Schedule </q-list-header>
        <q-item>
          <q-item-side icon="date_range" />
          <q-item-main>
            <q-select multiple
              float-label="Days"
              v-model="form.schedule.daysOfWeek"
              :options="listDaysOfWeek"/>
          </q-item-main>
        </q-item>

        <q-item>
          <q-item-side icon="update" />
          <q-item-main>
            <q-datetime
              v-model="form.schedule.start"
              type="time"
              float-label="Start"/>
          </q-item-main>
        </q-item>

        <q-item>
          <q-item-side icon="update"/>
          <q-item-main>
            <q-datetime
              v-model="form.schedule.end"
              type="time"
              float-label="End"/>
          </q-item-main>
        </q-item>
      </q-list>

      <q-field>
        <q-uploader multiple :url="url"
          float-label="Download Photo"
          v-model="form.photos"/>
      </q-field>
      <br/>
      <q-field class="text-center">
        <q-btn  rounded push color="primary" @click="submit">Submit</q-btn>
        <q-btn  rounded push color="negative" @click="cancelAction">Cancel</q-btn>
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
        category: [],
        activity: '',
        host: '',
        address: '',
        country: [],
        language: [],
        description: '',
        price: '',
        requirements: '',
        schedule: {
          daysOfWeek: [],
          start: '',
          end: '',
        },
        photos: '',
      },
      url: '',
      categories: [
        {
          label: 'Naturaleza',
          value: 'nature',
        },
        {
          label: 'Deportes Extremos',
          value: 'Extrem',
        },
        {
          label: 'Relax',
          value: 'relax',
        },
      ],
      countries: [
        {
          label: 'Asia',
          value: 'asia',
        },
        {
          label: 'America',
          value: 'america',
        },
        {
          label: 'Africa',
          value: 'africa',
        },
        {
          label: 'Europe',
          value: 'europe',
        },
        {
          label: 'Oceania',
          value: 'oceania',
        },
      ],
      listOfLanguages: [
        {
          label: 'Ingles',
          value: 'ing',
        },
        {
          label: 'Español',
          value: 'esp',
        },
        {
          label: 'Frances',
          value: 'fr',
        },
        {
          label: 'Portugues',
          value: 'portu',
        },
        {
          label: 'Mandarin',
          value: 'mand',
        },
      ],
      listDaysOfWeek: [
        {
          label: 'Lunes',
          value: 1,
        },
        {
          label: 'Martes',
          value: 2,
        },
        {
          label: 'Miercoles',
          value: 3,
        },
        {
          label: 'Jueves',
          value: 4,
        },
        {
          label: 'Viernes',
          value: 5,
        },
        {
          label: 'Sabado',
          value: 6,
        },
        {
          label: 'Domingo',
          value: 7,
        },
      ],
    };
  },

  validations: {
    form: {
      activity: { required, minLength: minLength(4) },
      host: { required, minLength: minLength(8) },
      address: { required, minLength: minLength(8) },
      country: { required },
      language: {},
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

        this.$router.push('/activity/view/');
      }
    },
    cancelAction() {
      this.$v.$touch();
      this.$q.notify('Cancelled');
    },
  },
};
</script>

<style>
</style>
