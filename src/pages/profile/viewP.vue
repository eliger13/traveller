<template>
  <q-page padding>
    <h4>{{ title }}</h4>

    <div class="row justify-center">
      <div class= "col-8">
        <q-list>
          <q-item>
            <q-item-side icon="person" />
            <q-item-main>
              <q-item-tile label> Full Name </q-item-tile>
              <q-item-tile sublabel>{{ form.name }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="mail" />
            <q-item-main >
              <q-item-tile label> Email </q-item-tile>
              <q-item-tile sublabel>{{ form.email }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="local_phone" />
            <q-item-main >
              <q-item-tile label> Telephone</q-item-tile>
              <q-item-tile sublabel>{{ form.phone }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="place" />
            <q-item-main >
              <q-item-tile label>Address </q-item-tile>
              <q-item-tile sublabel>{{ form.address }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="cake" />
            <q-item-main >
              <q-item-tile label> Birthday </q-item-tile>
              <q-item-tile sublabel>{{ form.birth }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="person" />
            <q-item-main >
              <q-item-tile label> Gender </q-item-tile>
              <q-item-tile sublabel>{{ form.gender }}</q-item-tile>
            </q-item-main>
          </q-item>

            <q-field icon="photo_camera">
              <q-uploader :url="url"
              float-label="Download Photo"
              v-model="form.photos"/>
            </q-field>

      </q-list>

      <br/>
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
      title: 'Person Profile',
      form: {
        name: 'name',
        email: 'traveleando@email.com',
        phone: 0,
        birth: 0,
        gender: [],
        address: 'caba',
      },
      url: '',
      listOfGenders: [
        {
          label: 'Female',
          value: 'f',
        },
        {
          label: 'Male',
          value: 'm',
        },
      ],
    };
  },

  methods: {
    submit() {
      this.$router.push('/modify');
    },
  },
};
</script>

<style>
</style>
