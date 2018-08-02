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
              @click.native="rowClick(props.row)" class="cursor-pointer">
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
        :actions="action"
    />

    <br/>
    <q-field class="text-center">
      <q-btn  rounded push color="primary" @click="submit">Submit</q-btn>
      <q-btn  rounded push color="negative" @click="cancelAction">Cancel</q-btn>
    </q-field>

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
          operator: 'Eliger Roa',
          days: 'lunes, miercoles',
          address: 'Onolulu',
        },
        {
          activity: 'Rappel',
          category: 'X-Treme',
          operator: 'Gabriel Diaz',
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
          name: 'operator',
          label: 'Operator',
          field: 'operator',
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
          label: 'Delete',
          icon: 'delete',
          color: 'red',
          handler: this.deleteAction,
        },
        {
          label: 'Share',
          icon: 'share',
          color: 'primary',
        },
        {
          label: 'Play',
          icon: 'gamepad',
        },
        {
          label: 'Favorite',
          icon: 'favorite',
        },
      ],
    };
  },

  methods: {
    submit() {
      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.');
      } else {
        this.$q.notify({
          message: 'Login successfully.',
          type: 'positive',
        });

        this.$router.push('/view');
      }
    },
    cancelAction() {
      this.$v.$touch();
      this.$q.notify('Cancelled');
    },
    deleteRow() {
      this.$q.notify(`Deleting Activities: ${this.selectedSecond.map(e => e.activity).join(' - ')}`);
    },
    rowClick(row) {
      this.selectedRow = row;
      this.actionSheet = true;
    },
    deleteAction() {
      this.$q.notify(`Deleting Activiy: ${this.selectedRow.activity}`);
    },
    onOk(item) {
      if (item.handler) {
        // if we've already triggered a handler
        return;
      }
      this.$q.notify({
        color: 'secondary',
        message: `Clicked on "${item.label}"`,
      });
    },
  },
};
</script>

<style>
</style>
