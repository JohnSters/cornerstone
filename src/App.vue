<template>
  <v-app>
    <v-main>
      <MainAppBar/>
    </v-main>
  </v-app>
</template>

<script>
import MainAppBar from './components/MainAppBar.vue'

export default {
  name: 'App',

  components: {
    MainAppBar,
  },

  data: () => ({
    //
  }),
}
</script>
