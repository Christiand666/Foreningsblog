<template>
  <div class="row">
    <a class="link-success my-5" href="/events/create">Create new event</a>
    <div class="col-sm-6">
      <div
        v-for="event in Events"
        :key="event.id"
        class="card"
        style="width: 18rem"
      >
        <div class="card-body">
          <h5 class="card-title">{{ event.title }}</h5>
          <p class="card-text">{{ event.description }}</p>
          <button v-on:click="Attend(event.id)" class="btn btn-success"
            >Tilmeld dig!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventService } from '../ServicesHelp//event.service';

export default {
  data() {
    return {
      Events: [],
    };
  },
  methods: {
    async Attend(eventId) {
      eventService.attend(6, eventId).then(response => this.CreateResponse = response.data);
    },
  },
  beforeMount() {
    eventService.getAll().then(events => this.Events = events);
  },
};
</script>