<template>
  <v-app>
    <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
    <v-app-bar color="grey-lighten-2"></v-app-bar>
    <v-main>
      <v-card height="200px"></v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AdminView",
  data: () => ({
    drawer: false,
    items: [
      { title: 'Home', icon: 'mdi-home-city' },
      { title: 'My Account', icon: 'mdi-account' },
      { title: 'Users', icon: 'mdi-account-group-outline' },
    ],
    rail: true,
  }),
}
</script>

<style scoped>

</style>