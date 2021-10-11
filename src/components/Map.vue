<template>
  <v-sheet>

<!--        <div id="map"></div>-->

  </v-sheet>

</template>


<script>
import L from 'leaflet'

export default {
  name: "Map",
  mounted() {
    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  },
  data: function () {
    return {
      map: null,
    }
  },
}
</script>

<style scoped>

</style>