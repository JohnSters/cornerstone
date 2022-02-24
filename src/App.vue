<template>
  <v-app>
    <v-main>
      <MainAppBar/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MainAppBar from './components/MainAppBar.vue'
import Home from "./views/Home.vue";

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
