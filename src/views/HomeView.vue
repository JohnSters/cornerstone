<template>
  <MainAppBar />
  <v-container>This is the Home page</v-container>
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