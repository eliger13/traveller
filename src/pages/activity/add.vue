<template>
  <q-page padding>
   <h4>{{ title }}</h4>

    <div class="group ">
      <q-field>
      <q-select float-label="Category"
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
        icon="terrain"
        :error="$v.form.activity.$error"
        error-label="Please type a valid activity"
      >
        <q-input type="email" v-model="form.activity" float-label="Activity"
                @blur="$v.form.activity.$touch" />
      </q-field>

      <q-field
        icon="assignment_ind"
        :error="$v.form.host.$error"
        error-label="Please type a valid host"
      >
        <q-input type="email" v-model="form.host" float-label="Host"
                @blur="$v.form.host.$touch" />
      </q-field>

      <q-field
        icon="place"
        :error="$v.form.address.$error"
        error-label="Please type a valid address"
      >
        <q-input type="email" v-model="form.address" float-label="Address"
                @blur="$v.form.address.$touch" />
      </q-field>

      <q-field>
      <q-select icon="" float-label="Country"
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
        icon="translate"
        :error="$v.form.language.$error"
        error-label="Please type a valid language"
      >
        <q-input type="email" v-model="form.language" float-label="Language"
                @blur="$v.form.language.$touch" />
      </q-field>

      <q-field>
        <q-input
          icon="message"
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
          icon="message"
          v-model="form.requirements"
          type="textarea"
          float-label="Requirements"
          :max-height="100"
          rows="7"
        />
      </q-field>

      <q-list>
        <q-list-header>Schedule </q-list-header>
        <q-item>
          <q-item-side icon="date_range" />
          <q-item-main>
            <q-select multiple
              float-label="Days"
              v-model="form.schedule.daysOfWeek"
              :options="listDaysOfWeek"
            />
          </q-item-main>
        </q-item>
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

      <q-field>
        <q-uploader :url="url" float-label="Download Photo" v-model="form.photos"
        />
      </q-field>

      <br/>
      <q-field class="text-center">
        <q-btn  rounded push color="primary" @click="submit">Submit</q-btn>
        <q-btn  rounded push color="negative" @click="submit">Cancel</q-btn>
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
          daysOfWeek: [],
          start: '',
          end: '',
        },
        photos: '',
      },
      url: '',
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
