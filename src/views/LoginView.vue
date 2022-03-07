<template>
  <MainAppBar />
  <AdminLogin />
</template>

<script>
import AdminLogin from "../components/administration/AdminLoginComp.vue";
import MainAppBar from "../components/app-bars/MainAppBar.vue";

export default {
  name: "Login",

  components: {
    MainAppBar,
    AdminLogin,
  }
}
</script>

<style scoped>

</style>