import Vue from "vue";
import Router from "vue-router";

const routerOptions = [
  {
    path: "/",
    component: "Login",
  },
  {
    path: "/HomeDashboard",
    component: "HomeDashboard",
    name: "homeDashboard",
  },
  {
    path: "/SectionPlanner",
    component: "SectionPlanner",
  },
  {
    path: "/CourseCatalog",
    component: "CourseCatalog",
  },
];

const routes = routerOptions.map((route) => {
  return {
    ...route,
    component: () => import(`./components/${route.component}.vue`),
  };
});

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes,
  linkExactActiveClass: "active",
  base:
    //    process.env.NODE_ENV === 'development'? "/" : "/tutorScheduling/", - for AWS
    process.env.NODE_ENV === "development" ? "/" : "/",
});
