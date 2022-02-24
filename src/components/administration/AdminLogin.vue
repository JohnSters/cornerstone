<template>
  <v-container>
    <v-card color="blue" class="ma-auto mt-11" max-width="500">
      <v-form class="pa-14 text-white">
        <v-text-field
            label="Name"
            required
        ></v-text-field>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "AdminLogin"
}
</script>

<style scoped>
.text-white input {
  color: white !important;
}
</style>