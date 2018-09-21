<template>
  <q-page padding>
    <h4>{{ title }}</h4>
    <div>
      <q-table
        grid
        hide-header
        :data="dataBooking"
        :columns="columns"
        :filter="filter"
        :selection="selection"
        :selected.sync="selected"
        :visible-columns="visibleColumns"
        row-key="name">

        <template slot="top-right" slot-scope="props">
          <q-search hide-underline v-model="filter" />
        </template>

        <div slot="item"
          slot-scope="props"
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 transition-generic" >

        <q-card class="transition-generic"
          :class="props.selected ? 'bg-grey-2' : ''">
          <q-card-title class="relative-position">
            <q-checkbox v-model="props.selected" :label="props.row.name" />
          </q-card-title>
          <q-card-separator />
          <q-card-main class="q-pa-none">
            <q-list no-border>
              <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')"
                :key="col.name">
                <q-item-main>
                  <q-item-tile label>{{ col.label }}</q-item-tile>
                </q-item-main>
                <q-item-side right>
                  <q-item-tile>{{ col.value }}</q-item-tile>
                </q-item-side>
              </q-item>
            </q-list>
          </q-card-main>
        </q-card>
        </div>
      </q-table>
    </div>
  </q-page>
</template>

<script>

export default {
  data() {
    return {
      title: 'Bookings',
      dataBooking: [
        {
          activity: 'Surf',
          category: 'Water X-Treme',
          days: 'lunes, miercoles',
          address: 'Onolulu',
        },
        {
          activity: 'Rappel',
          category: 'X-Treme',
          days: 'martes, miercoles',
          address: 'Wikiwiki',
        },
      ],
      columns: [
        {
          name: 'activity',
          label: 'Activity',
          field: 'activity',
          align: 'left',
        },
        {
          name: 'category',
          label: 'Category',
          field: 'category',
          align: 'left',
        },
        {
          name: 'days',
          label: 'Days',
          field: 'days',
          align: 'left',
        },
        {
          name: 'address',
          label: 'address',
          field: 'address',
          align: 'left',
        },
      ],
      filter: [],
      selected: [],
    };
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
