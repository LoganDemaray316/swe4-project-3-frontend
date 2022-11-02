<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menueItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app color="darkBlue" dark>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon>
      </span>
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-4"
        contain
        src="../assets/OC_LOGO_WHITE.svg"
        transition="scale-transition"
        width="40"
      />

      <v-toolbar-title class="font-weight-bold"
        >SECTION PLANNING</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          depressed
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    title: "Dashboard",
    sidebar: false,
    menuItems: [
      { title: "Dashboard", path: "/" },
      { title: "Course Catalog", path: "/" },
      { title: "Something else", path: "/" },
    ],
  }),
};
</script>

<style></style>
