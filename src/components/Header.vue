<template>
  <div>
    <v-navigation-drawer
        permanent
        expand-on-hover
        app
    >
      <v-list
          nav
          dense
      >
        <router-link to="/" append>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>

              Home

            </v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/map">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>

              Map

            </v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>