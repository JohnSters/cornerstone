<template>
  <!-- App Bar for the front page.  -->
  <v-app-bar color="blue" flat>
    <v-btn to="/">Home</v-btn>
    <v-spacer></v-spacer>
    <v-btn class="mr-4" to="/admin">Admin</v-btn>
    <v-btn class="mr-4">Login</v-btn>
    <v-btn class="mr-4">Create</v-btn>
  </v-app-bar>
</template>

<script>
import logo from '../assets/logo.svg'

export default {
  name: 'HelloWorld',
}
</script>
