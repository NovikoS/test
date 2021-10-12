<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container>
        <v-row>
          <v-col>

            <Map></Map>

          </v-col>
        </v-row>
        <place-list :items="data"></place-list>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Map from "./components/Map";
import PlaceList from "./components/PlaceList";

export default {
  name: 'App',

  components: {
    Header,
    Map,
    PlaceList,
  },

  data: () => ({
    data: [
      {title: "Test", text: "TEST TEST TEST"},
      {title: "Test2", text: "TEST2 TEST2 TEST2"},
    ]
  }),
};
</script>
