<template>
  <div>

    <v-navigation-drawer floating permanent absolute right width="500">
      <v-list>
        <v-list-item class="mb-2" v-for="item in items" :key="item.title">
          <v-card
              min-width="400"
              dark
          >
            <v-card-title class="text-h5">
              {{ item.title }}
            </v-card-title>

            <v-card-subtitle>{{ item.text }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn v-on:click="showPoint(item.position)">
                Show
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-list-item>
      </v-list>
      <v-overlay
          absolute
          v-if="overlay"
      >
        <v-btn v-on:click="hidePoint">Hide overlay</v-btn>
      </v-overlay>
    </v-navigation-drawer>
    <Map :point="point"></Map>
  </div>

</template>

<script>
import Map from "./Map";

export default {
  components: {
    Map
  },

  name: "PlaceList",
  props: ['items'],
  data: function () {
    return {
      point: null,
      overlay: false,
    }
  },
  methods:
      {
        showPoint: function (point) {
          this.overlay = true;
          this.point = point;
        },
        hidePoint:function(){
          this.overlay = false;
          this.point = null;
        }
      }
}
</script>

<style scoped>

</style>