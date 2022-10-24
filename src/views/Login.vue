<template>
  <v-container>
    <v-toolbar>
      <v-toolbar-title>Welcome to Tutorials!</v-toolbar-title>
    </v-toolbar>
    <br /><br />
    <Login />
    <br /><br />
  </v-container>
</template>

<script>
import Login from "@/components/Login";
export default {
  name: "google-login",
  components: {
    Login,
  },
};
</script>
