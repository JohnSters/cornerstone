<template>
  <v-app>
    <v-main style="height: 100vh" class="bg-grey bg-grey-lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
}
</script>
