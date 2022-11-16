<template>
  <v-container>
    <v-app-bar app color="darkBlue" dark>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </span>
      <v-img
        alt="OC Logo"
        class="shrink mr-4"
        contain
        src="../assets/OC_LOGO_WHITE.svg"
        transition="scale-transition"
        width="40" />

      <v-toolbar-title class="font-weight-bold darkBlue--text">{{
        title
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          color="white"
          plain
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-if="drawer" v-model="drawer" app left>
      <v-list>
        <v-list-item
          exact
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
  export default {
    name: "MenuBar",
    data: () => ({
      title: "SECTION PLANNER",
      drawer: false,
      menuItems: [
        { title: "Dashboard", path: "/HomeDashboard" },
        { title: "Section Planner", path: "/SectionPlanner" },
        { title: "Course Catalog", path: "/CourseCatalog" },
      ],
    }),
    computed: {
      theme() {
        return this.$vuetify.theme.dark ? "dark" : "light";
      },
      drawerChange() {
        if (this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl) {
          return false;
        } else {
          return true;
        }
      },
    },
  };
</script>
