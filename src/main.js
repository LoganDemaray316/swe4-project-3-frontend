import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store/store";
//import "material-design-icons-iconfont/dist/material-design-icons.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faLocationDot);
library.add(faUserGroup);
library.add(faCalendar);
library.add(faCalendarWeek);
library.add(faClock);
library.add(faCalendarDays);
library.add(faPen);
library.add(faTrash);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
