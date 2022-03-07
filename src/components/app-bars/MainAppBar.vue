<template>
  <!-- App Bar for the front page.  -->
  <nav class="toolbar" align="center">
    <v-app-bar app flat>
      <v-container>
        <v-row align="center">
          <v-app-bar-title>
            cornerstone
          </v-app-bar-title>
          <div>
            <v-btn to="/">Home</v-btn>
          </div>
          <v-spacer />
          <div>
            <v-btn to="/login">Login</v-btn>
            <v-btn to="/contact">Contact</v-btn>
          </div>
        </v-row>
      </v-container>
    </v-app-bar>
  </nav>
</template>

<script>

export default {
  name: 'MainAppBar',
  data: () => ({}),
}
</script>

<style>
.v-container {
}
</style>