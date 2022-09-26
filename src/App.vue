<template>
  <v-app>
    <NavBar></NavBar>

    <v-main>
      <v-container></v-container>
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from "./components/NavBar.vue";

  export default {
    name: "App",
    components: {
      NavBar,
    },
    data: () => ({}),
  };
</script>
