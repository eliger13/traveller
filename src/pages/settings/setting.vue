<template>
  <q-page padding>
    <h4>{{ title }}</h4>

    <div>
      <q-list link>
        <q-list-header> Password </q-list-header>

        <q-item @click.native="$router.push('/settings/password/')" >
          <q-item-main>
            <q-item-tile  label>Change Password</q-item-tile>
            <q-item-tile sublabel>Change or update your password
            </q-item-tile>
          </q-item-main>
        </q-item>

        <q-item-separator />

        <q-list-header>Notifications</q-list-header>
        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="selection" val="sms" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Text Message</q-item-tile>
            <q-item-tile sublabel>Receive text messages on your phone
            </q-item-tile>
          </q-item-main>
        </q-item>

        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="selection" val="email" color="secondary" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Email</q-item-tile>
            <q-item-tile sublabel>Receive emails to your linked email
            </q-item-tile>
          </q-item-main>
        </q-item>

        <q-item tag="label">
          <q-item-side>
            <q-checkbox v-model="selection" val="push" color="red" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Push</q-item-tile>
            <q-item-tile sublabel>Notifications of reservations and days of
                                  activities to your phone</q-item-tile>
          </q-item-main>
        </q-item>

        <q-item-separator />

        <q-list-header>Language</q-list-header>

        <q-item link tag="label">
          <q-item-side>
            <q-radio v-model="language" val="sp" />
          </q-item-side>
          <q-item-main label="Español" />
        </q-item>

        <q-item link tag="label">
          <q-item-side>
            <q-radio v-model="language" val="en" />
          </q-item-side>
          <q-item-main label="English" />
        </q-item>

        <q-item link tag="label">
          <q-item-side>
            <q-radio v-model="language" val="pt" />
          </q-item-side>
          <q-item-main label="Portugues" />
        </q-item>

        <q-item link tag="label">
          <q-item-side>
            <q-radio v-model="language" val="fr" />
          </q-item-side>
          <q-item-main label="français" />
        </q-item>

      </q-list>
    </div>
  </q-page>
</template>

<script>

export default {
  data() {
    return {
      title: 'Settings',
      selection: ['sms', 'email', 'push'],
      language: 'fr',
    };
  },
};
</script>

<style>
</style>
