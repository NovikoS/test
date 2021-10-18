<template>
  <div>
    <v-progress-circular
        indeterminate
        color="primary"
        v-if="loading"
    ></v-progress-circular>
    <v-container v-else>
      <v-row justify="center">
        <vl-map data-projection="EPSG:4326" :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
                style="height: 800px">
          <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

          <!--      <vl-layer-tile id="bingmaps">-->
          <!--        <vl-source-bingmaps :api-key="apiKey" :imagery-set="imagerySet"></vl-source-bingmaps>-->
          <!--      </vl-layer-tile>-->


          <vl-layer-tile v-if="loading" id="osm">
            <vl-source-osm></vl-source-osm>
          </vl-layer-tile>

          <vl-geoloc @update:position="geolocPosition = $event">
            <template slot-scope="geoloc">
              <vl-feature v-if="geoloc.position" id="position-feature">
                <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
                <vl-style-box>
                  <vl-style-icon src="img/man.png" :scale="0.2" :anchor="[0.5, 1]"></vl-style-icon>
                </vl-style-box>
              </vl-feature>
            </template>
          </vl-geoloc>

          <vl-feature v-if="point">
            <vl-geom-point :coordinates="point"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="img/pin.png" :scale="0.2"
                             :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
          </vl-feature>


        </vl-map>


      </v-row>
    </v-container>
  </div>
</template>


<script>

export default {
  name: "Map",
  data: function () {
    return {
      zoom: 5,
      center: [30, 59],
      rotation: 0,
      geolocPosition: null,
      apiKey: 'ArbsA9NX-AZmebC6VyXAnDqjXk6mo2wGCmeYM8EwyDaxKfQhUYyk0jtx6hX5fpMn',
      imagerySet: 'AerialWithLabels',
      overlayCoordinate: [30, 30],
      overlay: false,
      loading:true,
    }
  },
  watch: {
    point: function (val) {
      if (val != null){
        this.center = val;
        this.zoom = 13;
      }
      else{
        this.center = this.geolocPosition;
        this.zoom = 10;
      }
    },
    geolocPosition:function(val){
      if (val != null){
        this.loading = false;
      }
    }
  },
  props: ['point']
}
</script>

<style scoped>

</style>