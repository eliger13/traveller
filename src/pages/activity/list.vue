<template>
  <q-page padding>
   <h4>{{ title }}</h4>

    <q-table
      :data="tableData"
      :columns="columns"
      selection="multiple"
      :selected.sync="selectedSecond"
      row-key="__index"
      color="secondary"
      title="Select some Activity">
      <template slot="top-selection" slot-scope="props">
        <div class="col" />
        <q-btn color="negative" flat round delete icon="delete" @click="deleteRow" />
      </template>

      <template slot="body" slot-scope="props">
        <q-tr :props="props"
              @click.native="rowClick(props.row)"
              class="cursor-pointer">
          <q-td auto-width>
            <q-checkbox color="primary" v-model="props.selected" />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name">
            {{ col.value }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-action-sheet
        v-model="actionSheet"
        @ok="onOk"
        :actions="action"/>
  </q-page>
</template>

<script>

export default {
  data() {
    return {
      actionSheet: false,
      selectedRow: {},
      title: 'List Activities',
      tableData: [
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
      selectedSecond: [],
      action: [
        {
          label: 'View',
          icon: 'art_track',
          color: 'primary',
          handler: this.viewAction,
        },
        {
          label: 'Edit',
          icon: 'edit',
          color: 'primary',
          handler: this.editAction,
        },
        {
          label: 'Delete',
          icon: 'delete',
          color: 'red',
          handler: this.deleteAction,
        },
      ],
    };
  },

  methods: {
    deleteRow() {
      this.$q.notify(`Deleting Activities: ${this.selectedSecond.map(e => e.activity).join(' - ')}`);
    },
    rowClick(row) {
      this.selectedRow = row;
      this.actionSheet = true;
    },
    deleteAction() {
      this.$q.notify(`Deleting Activity: ${this.selectedRow.activity}`);
    },
    viewAction() {
      this.$q.notify({
        color: 'secondary',
        message: `Clicked on "${this.selectedRow.activity}"`,
      });
      this.$router.push('/view');
    },
    editAction() {
      this.$q.notify({
        color: 'secondary',
        message: `Clicked on "${this.selectedRow.activity}"`,
      });
      this.$router.push('/edit');
    },
    onOk(item) {
      return item.handler;
    },
  },
};
</script>

<style>
</style>
