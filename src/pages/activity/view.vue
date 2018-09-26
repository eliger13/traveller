<template>
  <q-page padding>
   <h4>{{ title }}</h4>

    <div class="row justify-center">
      <div class= "col-8">
        <q-list>
          <q-item>
            <q-item-side icon="photo_album" color="primary" />
            <q-item-main>
              <q-item-tile label> Category </q-item-tile>
              <q-item-tile sublabel>{{ getCategoryLabel() }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="terrain" color="primary" />
            <q-item-main >
              <q-item-tile label> Activity </q-item-tile>
              <q-item-tile sublabel>{{ form.activity }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item-separator inset />
          <q-item>
            <q-item-side icon="assignment_ind" color="primary" />
            <q-item-main >
              <q-item-tile label> Host </q-item-tile>
              <q-item-tile sublabel>{{ form.host }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="place" color="primary" />
            <q-item-main >
              <q-item-tile label>Address </q-item-tile>
              <q-item-tile sublabel>{{ form.address }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="outlined_flag" color="primary" />
            <q-item-main >
              <q-item-tile label> Country </q-item-tile>
              <q-item-tile sublabel>{{ getCountry() }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item-separator inset />
          <q-item>
            <q-item-side icon="language" color="primary" />
            <q-item-main >
              <q-item-tile label> Language </q-item-tile>
              <q-item-tile sublabel>{{ form.language }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="description" color="primary" />
            <q-item-main >
              <q-item-tile label> Description </q-item-tile>
              <q-item-tile sublabel>{{ form.description }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="receipt" color="primary" />
            <q-item-main >
              <q-item-tile label> Requirements </q-item-tile>
              <q-item-tile sublabel>{{ form.requirements }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item-separator inset />
          <q-item>
            <q-item-side icon="monetization_on" color="primary" />
            <q-item-main >
              <q-item-tile label> Price </q-item-tile>
              <q-item-tile sublabel>US{{ form.price }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item-separator />

          <q-list-header> Schedule </q-list-header>
          <q-item>
            <q-item-side icon="date_range" color="primary" />
            <q-item-main>
              <q-item-tile label> Days</q-item-tile>
              <q-item-tile sublabel>{{ getDays() }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="update" color="primary" />
              <q-item-main>
              <q-item-tile label> Start </q-item-tile>
              <q-item-tile sublabel>{{form.start}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="update" color="primary" />
            <q-item-main>
              <q-item-tile label> End</q-item-tile>
              <q-item-tile sublabel>{{form.end}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item-separator />

          <q-list-header> Documentaries </q-list-header>
          <q-item>
            <q-item-side />
            <q-item-main label="Download Photo " />
            <q-item-side right icon="photo" />
          </q-item>

          <q-item-separator />

        </q-list>

        <br />
        <q-field class="text-center">
          <q-btn  rounded push color="primary" @click="submit">Modify</q-btn>
        </q-field>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      title: 'Activity Experiences',
      form: {
        category: 'nature',
        activity: 'Montañismo',
        host: 'host',
        address: 'address',
        country: 'asia',
        language: ['ing', 'esp'],
        description: 'description',
        price: 0,
        requirements: 'requirements',
        days: [1, 2, 3],
        start: 0,
        end: 0,
        photos: '',
      },
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
      DaysOfWeek: [
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
  methods: {
    submit() {
      this.$router.push('/activity/edit/');
    },
    getCategoryLabel() {
      for (let i = 0; i < this.categories.length; i += 1) {
        if (this.categories[i].value === this.form.category) {
          return this.categories[i].label;
        }
      }
      return this.form.category;
    },
    getCountry() {
      for (let i = 0; i < this.countries.length; i += 1) {
        if (this.countries[i].value === this.form.country) {
          return this.countries[i].label;
        }
      }
      return this.form.country;
    },
    getDays() {
      for (let i = 0; i < this.DaysOfWeek.length; i += 1) {
        if (this.DaysOfWeek[i].value === this.form.days) {
          return this.DaysOfWeek[i].label;
        }
      }
      return this.form.days;
    },
  },
};
</script>

<style>
</style>
