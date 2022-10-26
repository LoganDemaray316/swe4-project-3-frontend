<template>
  <v-toolbar app color="darkBlue" dark>
    <v-img
      alt="Vuetify Logo"
      class="shrink mr-4"
      contain
      src="../assets/OC_LOGO_WHITE.svg"
      transition="scale-transition"
      width="40"
    />

    <v-toolbar-title class="font-weight-bold">SECTION PLANNING</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn depressed color="darkBlue" class="font-weight-bold"
        >Dashboard</v-btn
      >
      <v-btn depressed color="darkBlue" class="font-weight-bold"
        >Course Catalog</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({}),
};
</script>

<style></style>
