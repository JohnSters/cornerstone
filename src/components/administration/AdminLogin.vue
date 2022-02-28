<template>
  <v-container>
    <v-card width="500" class="mx-auto mt-9">
      <v-card-title>Login Admin</v-card-title>
      <v-card-text>
        <v-text-field label="Username" prepend-icon="mdi-account-circle"/>
        <v-text-field
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"/>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info" to="/admin" @click="isAuthenticated">Login</v-btn>
        <v-btn color="success">Create new user</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "AdminLogin",
  data: () => ({
    showPassword: false,
  }),
}
</script>

<style scoped>
.text-white input {
  color: white !important;
}
</style>