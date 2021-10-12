<template>
  <div>
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
            data-projection="EPSG:4326" style="height: 400px">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="img/pin.png" :scale="0.2" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
    <v-banner>
      {{center}}
    </v-banner>
  </div>
</template>


<script>

export default {
  name: "Map",
  mounted() {

  },
  data: function () {
    return {
      zoom: 13,
      center: [30, 59],
      rotation: 0,
      geolocPosition: undefined,
    }
  },
  props: ['points']
}
</script>

<style scoped>

</style>