<template>
  <v-app>
    <NavBar></NavBar>

    <v-main class="lightGray">
      <HomeDashboard></HomeDashboard>
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from "./components/NavBar.vue";
  import HomeDashboard from "./components/HomeDashboard.vue";

  export default {
    name: "App",
    components: {
      NavBar,
      HomeDashboard,
    },
    data: () => ({}),
    computed: {
      theme() {
        return this.$vuetify.theme.dark ? "dark" : "light";
      },
    },
  };
</script>
