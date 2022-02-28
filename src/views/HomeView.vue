<template>
  <MainAppBar />
  <v-container>
    <v-row>
      <v-col
          class="mt-3"
          v-for="n in 9"
          :key="n"
          cols="4"
      >
        <v-card-title primary-title class="justify-center">
          <div>
            <h3 class="headline pink--text text--accent-2">Lorum</h3>
            <div>Lorem ipsum dolor sit amet.</div>
          </div>
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn flat color="green">use backend</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MainAppBar from "../components/app-bars/MainAppBar.vue";
export default {
  name: "Home",
  components: {
    MainAppBar
  }
}
</script>

<style scoped>

</style>