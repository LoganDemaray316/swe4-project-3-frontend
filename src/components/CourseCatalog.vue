<template>
  <v-container fluid>
    <v-card-title>
      <v-text-field
        color="darkBlue"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-btn color="darkBlue" plain v-on:click="filterShowing = !filterShowing">
        <font-awesome-icon
          class="darkBlue--text"
          icon="fa-solid fa-filter"
          size="xl"
        />
      </v-btn>
    </v-card-title>
    <v-container fluid>
      <v-row v-if="filterShowing">
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "SEMESTER" }}
          </v-card-title>
          <v-checkbox label="Fall" value="fall" hide-details></v-checkbox>
          <v-checkbox label="Winter" value="winter" hide-details></v-checkbox>
          <v-checkbox label="Spring" value="spring" hide-details></v-checkbox>
          <v-checkbox label="Summer" value="summer" hide-details></v-checkbox>
        </v-col>
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "LOCATION" }}
          </v-card-title>
          <v-checkbox
            label="In-Class"
            value="in-class"
            hide-details
          ></v-checkbox>
          <v-checkbox label="Online" value="online" hide-details></v-checkbox>
        </v-col>
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "CLASS LEVEL" }}
          </v-card-title>
          <v-checkbox
            label="Freshman"
            value="freshman"
            hide-details
          ></v-checkbox>
          <v-checkbox
            label="Sophomore"
            value="sophomore"
            hide-details
          ></v-checkbox>
          <v-checkbox label="Junior" value="junior" hide-details></v-checkbox>
          <v-checkbox label="Senior" value="senior" hide-details></v-checkbox>
          <v-checkbox
            label="Graduate"
            value="graduate"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "DAYS OF CLASS" }}
          </v-card-title>
          <v-checkbox label="Sunday" value="sunday" hide-details></v-checkbox>
          <v-checkbox label="Monday" value="monday" hide-details></v-checkbox>
          <v-checkbox label="Tuesday" value="tuesday" hide-details></v-checkbox>
          <v-checkbox
            label="Wednesday"
            value="wednesday"
            hide-details
          ></v-checkbox>
          <v-checkbox
            label="Thursday"
            value="thursday"
            hide-details
          ></v-checkbox>
          <v-checkbox label="Friday" value="friday" hide-details></v-checkbox>
          <v-checkbox label="Saturday" value="saturday"></v-checkbox>
        </v-col>
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "LAB" }}
          </v-card-title>
          <v-checkbox
            label="Only Labs"
            value="onlylabs"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-container>
    <v-pagination v-model="page" :length="6"></v-pagination>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="course in courses"
                :key="course.courseId"
                :lg="6"
                :md="6"
                :sm="12"
                :xs="12"
              >
                <CourseItem :course="course"></CourseItem>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination v-model="page" :length="6"></v-pagination>
  </v-container>
</template>

<script>
import CourseItem from "./CourseItem.vue";

export default {
  name: "HomeDashboard",
  components: {
    CourseItem,
  },
  data() {
    return {
      filterShowing: false,
      // Fake course data that will be replaced by a store getter to fill this list with course objects.
      courses: [
        {
          courseId: 0,
          courseNumber: "CMSC-2113",
          courseInstanceNumber: 1,
          courseClass: "Object Oriented Programming",
          courseStartTime: "10:00am",
          courseEndTime: "10:55am",
          courseDOW: ["M", "W", "F"],
          courseLocation: "PEC 213",
          courseSize: 30,
          courseDate: "08/06/2022 - 11/18/2022",
          courseSemester: "Fall",
          courseTerms: ["T1", "T2"],
          courseLab: true,
          courseHours: 3,
          courseHasPrereq: true,
          coursePrereq: "CMSC-1111",
          courseDescription:
            "Here is the long description that no student has ever read and then takes the class without looking it over and regrets it because they thought it would be easy.",
        },
        {
          courseId: 1,
          courseNumber: "CMSC-2413",
          courseInstanceNumber: 1,
          courseClass: "Assembly Language",
          courseStartTime: "11:00am",
          courseEndTime: "11:55am",
          courseDOW: ["T", "TH"],
          courseLocation: "PEC 211",
          courseSize: 30,
          courseDate: "08/06/2022 - 11/18/2022",
          courseSemester: "Fall",
          courseTerms: ["T1", "T2"],
          courseLab: false,
          courseHours: 3,
          courseHasPrereq: false,
          coursePrereq: "",
          courseDescription:
            "Here is the long description that no student has ever read and then takes the class without looking it over and regrets it because they thought it would be easy.",
        },
      ],
    };
  },
};
</script>
