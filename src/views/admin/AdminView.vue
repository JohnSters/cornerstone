<template>
  <v-app>
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
        ></v-list-item>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat>
      <v-divider></v-divider>
      <v-btn class="ml-2">home</v-btn>
      <v-btn class="ml-2">database</v-btn>
      <v-btn class="ml-2" to="/">logout</v-btn>
    </v-app-bar>
    <v-main fluid style="height: 100vh">
      <v-card></v-card>
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