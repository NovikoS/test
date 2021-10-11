<template>
  <v-navigation-drawer right absolute floating permanent width="500">
    <v-list>
      <v-list-item class="mb-2" v-for="item in items" :key="item.title">
        <v-card
            min-width="400"
            dark
        >
          <v-card-title class="text-h5" >
            {{item.title}}
          </v-card-title>

          <v-card-subtitle >{{item.text}}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn text>
              Listen Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
export default {
  name: "PlaceList",
  props:['items']
}
</script>

<style scoped>

</style>