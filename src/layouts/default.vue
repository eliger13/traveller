<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Travel App
          <div slot="subtitle">TravellerAndo</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="$router.push('/')">
          <q-item-side icon="home"/>
          <q-item-main label="Home"/>
        </q-item>
        <q-item-separator/>

        <q-item @click.native="$router.push('/viewP')">
          <q-item-side icon="person" />
          <q-item-main label="Profile" sublabel="" />
        </q-item>

        <q-item @click.native="$router.push('/list')">
          <q-item-side icon="terrain" />
          <q-item-main label="Activities" sublabel="" />
        </q-item>

        <q-item @click.native="$router.push('/booking')">
          <q-item-side icon="today" />
          <q-item-main label="Bookings" sublabel="" />
        </q-item>

        <q-item @click.native="$router.push('/login')">
          <q-item-side icon="power_settings_new" />
          <q-item-main label="Sign off" sublabel="" />
        </q-item>

      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
  },
};
</script>

<style>
</style>
