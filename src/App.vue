<template>
  <v-app>
    <v-main style="height: 100vh" class="bg-grey bg-grey-lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MainAppBar from "./components/app-bars/MainAppBar.vue";
import Home from "./views/HomeView.vue";

export default {
  name: 'App',

  components: {
    MainAppBar,
    Home
  },

  data: () => ({
    //
  }),
}
</script>
