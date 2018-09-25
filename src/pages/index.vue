<template>
  <q-page padding>
      <h4>{{ title }}</h4>

  <div>
    <calendar
      :eventArray="booking" />
  </div>
  </q-page>
</template>

<style>
</style>

<script>
import { Calendar } from 'quasar-calendar';

export default {
  components: {
    calendar: Calendar,
  },
  data() {
    return {
      title: 'Booking Calendar',
      booking: [
        {
          id: 1,
          summary: 'Surf',
          description: 'Some extra info goes here',
          location: '1232 Main St., Denver, CO',
          start: {
            dateTime: '2018-09-21T14:00:00',
            timeZone: 'America/New_York',
          },
          end: {
            dateTime: '2018-09-21T16:30:00',
            timeZone: 'American/New_York',
          },
          color: 'positive',
          attendees: [
            {
              id: 5,
              email: 'somebody@somewhere.com',
              displayName: 'John Q. Public',
              organizer: false,
              self: false,
              resource: false,
            },
          ],
        },
      ],
    };
  },
};
</script>
