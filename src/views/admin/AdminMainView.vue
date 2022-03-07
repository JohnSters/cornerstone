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
          <v-list-item prepend-icon="mdi-account-multiple" title="Add User" value="add-user" to="/create-user"></v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat>
      <v-divider></v-divider>
      <v-btn class="ml-2">home</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ props }">
          <v-btn
              v-bind="props"
          >
            Backend
          </v-btn>
        </template>
        <v-list class="elevation-2 rounded mt-2">
          <v-list-item
              link
              v-for="(item, index) in dropdown"
              :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn to="/">Log Out</v-btn>
    </v-app-bar>
    <v-main fluid style="height: 100vh">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "AdminView",
  data: () => ({
    drawer: false,
    showCreateComp: false,
    dropdown: [
      { title: 'Firebase' },
      { title: 'MongoDB' },
      { title: 'Kuzzle' },
      { title: 'Node' },
      { title: 'Deno' },
    ],
    rail: true,
  }),

  computed: {
    createUser() {
     this.showCreateComp = true
    }
  },

  components: {
  }
}
</script>

<style scoped>

</style>