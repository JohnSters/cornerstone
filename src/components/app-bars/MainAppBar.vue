<template>
  <!-- App Bar for the front page.  -->
  <v-app-bar color="blue" flat>
    <v-btn to="/">Home</v-btn>
    <v-spacer></v-spacer>
    <v-btn class="mr-4" to="/login">Login</v-btn>
    <v-btn class="mr-4">Create User</v-btn>
  </v-app-bar>
</template>

<script>

export default {
  name: 'MainAppBar',

  methods: {

  }
}
</script>
