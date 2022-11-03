<template>
  <v-app>
    <NavBar></NavBar>

    <v-main>
      <SectionPlanner> </SectionPlanner>
    </v-main>
  </v-app>
</template>

<script>
  import NavBar from "./components/NavBar.vue";
  import SectionPlanner from "./components/SectionPlanner.vue";

  export default {
    name: "App",
    components: {
      NavBar,
      SectionPlanner
    },
    data: () => ({}),
  };
</script>
