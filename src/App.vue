<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer padless>
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";


export default {
  name: 'App',

  components: {
    Header,
    // Map,
    // PlaceList,
  },


};
</script>
