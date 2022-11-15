<template>
  <v-app>
    <v-navigation-drawer v-if="sidebarChange" v-model="sidebar" app>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="darkBlue" dark>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="sidebar = true"></v-app-bar-nav-icon>
      </span>
      <v-img
        alt="OC Logo"
        class="shrink mr-4"
        contain
        src="./assets/OC_LOGO_WHITE.svg"
        transition="scale-transition"
        width="40"
      />

      <v-toolbar-title class="font-weight-bold darkBlue--text"
        >SECTION PLANNER</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          color="white"
          plain
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- <v-main class="lightGray"> </v-main> -->
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    sidebar: false,
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
    sidebarChange() {
      if (this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
