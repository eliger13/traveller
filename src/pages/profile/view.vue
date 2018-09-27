<template>
  <q-page padding>
    <h4>{{ title }}</h4>

    <div class="row justify-center">
      <div class= "col-8">
        <div class="justify-center row">
          <img src="//i.stack.imgur.com/34AD2.jpg" />
        </div>

        <br />
        <q-list>
          <q-item>
            <q-item-side icon="person" color="primary"/>
            <q-item-main>
              <q-item-tile label> Full Name </q-item-tile>
              <q-item-tile sublabel>{{ form.name }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="mail" color="primary"/>
            <q-item-main >
              <q-item-tile label> Email </q-item-tile>
              <q-item-tile sublabel>{{ form.email }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="local_phone" color="primary"/>
            <q-item-main >
              <q-item-tile label> Telephone </q-item-tile>
              <q-item-tile sublabel>{{ form.phone }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item-separator inset />
          <q-item>
            <q-item-side icon="place" color="primary"/>
            <q-item-main >
              <q-item-tile label>Address </q-item-tile>
              <q-item-tile sublabel>{{ form.address }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="cake" color="primary"/>
            <q-item-main >
              <q-item-tile label> Birthday </q-item-tile>
              <q-item-tile sublabel>{{ form.birth }}</q-item-tile>
            </q-item-main>
          </q-item>

          <q-item>
            <q-item-side icon="wc" color="primary"/>
            <q-item-main >
              <q-item-tile label> Gender </q-item-tile>
              <q-item-tile sublabel>{{ getGenders() }}</q-item-tile>
            </q-item-main>
          </q-item>
      </q-list>

      <br/>
        <q-field class="text-center">
          <q-btn  rounded push color="primary" @click="submit"> Modify </q-btn>
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
        gender: 'f',
        address: 'caba',
      },
      url: '',
      genders: [
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
      this.$router.push('/profile/modify/');
    },
    getGenders() {
      for (let i = 0; i < this.genders.length; i += 1) {
        if (this.genders[i].value === this.form.gender) {
          return this.genders[i].label;
        }
      }
      return this.form.gender;
    },
  },
};
</script>

<style>
  img {
    border-radius: 50%;
    width: 20%;
    height: 20%;
}
</style>
