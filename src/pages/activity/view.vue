<template>
  <q-page padding>
   <h4>{{ title }}</h4>

    <div class="row justify-center">
      <div class= "col-8">
        <q-list>
          <q-item>
            <q-item-side icon="photo_album" />
            <q-item-main>
              <q-item-tile label> Category </q-item-tile>
              <q-item-tile sublabel>{{category}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="terrain" />
            <q-item-main >
              <q-item-tile label> Activity </q-item-tile>
              <q-item-tile sublabel>{{activity}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="assignment_ind" />
            <q-item-main >
              <q-item-tile label> Host </q-item-tile>
              <q-item-tile sublabel>{{host}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="place" />
            <q-item-main >
              <q-item-tile label>Address </q-item-tile>
              <q-item-tile sublabel>{{address}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="outlined_flag" />
            <q-item-main >
              <q-item-tile label> Country </q-item-tile>
              <q-item-tile sublabel>{{country}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="language" />
            <q-item-main >
              <q-item-tile label> Language </q-item-tile>
              <q-item-tile sublabel>{{language}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="description" />
            <q-item-main >
              <q-item-tile label> Description </q-item-tile>
              <q-item-tile sublabel>{{description}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="receipt" />
            <q-item-main >
              <q-item-tile label> Requirements </q-item-tile>
              <q-item-tile sublabel>{{requirements}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="monetization_on" />
            <q-item-main >
              <q-item-tile label> Price </q-item-tile>
              <q-item-tile sublabel>US{{price}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item-separator />

          <q-list-header>Schedule </q-list-header>
          <q-item>
            <q-item-side icon="date_range" />
            <q-item-main>
              <q-item-tile label> Days</q-item-tile>
              <q-item-tile sublabel>{{daysOfWeek}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="update" />
              <q-item-main>
              <q-item-tile label> Start </q-item-tile>
              <q-item-tile sublabel>{{start}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="update"/>
            <q-item-main>
              <q-item-tile label> End</q-item-tile>
              <q-item-tile sublabel>{{end}}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item-separator />

          <q-list-header>Documentaries</q-list-header>
          <q-item>
            <q-item-side image="" />
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
      category: 'Deportes extremos',
      activity: 'activity',
      host: 'host',
      address: 'address',
      country: 'conutry',
      language: [],
      description: 'descripton',
      price: 0,
      requirements: 'requirements',
      daysOfWeek: [],
      start: 0,
      end: 0,
      photos: '',
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
          value: 'Ing',
        },
        {
          label: 'Español',
          value: 'Esp',
        },
        {
          label: 'Frances',
          value: 'Fr',
        },
        {
          label: 'Portugues',
          value: 'Portu',
        },
        {
          label: 'Mandarin',
          value: 'Mand',
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
  methods: {
    submit() {
      this.$router.push('/activity/edit/');
    },
  },
};
</script>

<style>
</style>
