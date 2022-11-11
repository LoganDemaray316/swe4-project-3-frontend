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
      <v-dialog v-model="editDialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="font-weight-bold darkBlue--text"
            v-bind="attrs"
            v-on="on"
          >
            Edit
          </v-btn>
        </template>
        <CourseItemCreate></CourseItemCreate>
      </v-dialog>
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
                v-for="section in sections"
                :key="section.sectionId"
                :lg="6"
                :md="6"
                :sm="12"
                :xs="12"
              >
                <CourseItem :section="section"></CourseItem>
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
import CourseItemCreate from "./CourseItemCreate.vue";

export default {
  name: "HomeDashboard",
  components: {
    CourseItem,
    CourseItemCreate,
  },
  data() {
    return {
      filterShowing: false,
      // Fake section data that will be replaced by a store getter to fill this list with section objects.
      sections: [
        {
          sectionId: 0,
          sectionNumber: "CMSC-2113",
          sectionInstanceNumber: 1,
          sectionClass: "Object Oriented Programming",
          sectionStartTime: "10:00am",
          sectionEndTime: "10:55am",
          sectionDOW: ["M", "W", "F"],
          sectionLocation: "PEC 213",
          sectionSize: 30,
          sectionDate: "08/06/2022 - 11/18/2022",
          sectionSemester: "Fall",
          sectionTerms: ["T1", "T2"],
          sectionLab: true,
          sectionHours: 3,
          sectionHasPrereq: true,
          sectionPrereq: "CMSC-1111",
          sectionDescription:
            "Here is the long description that no student has ever read and then takes the class without looking it over and regrets it because they thought it would be easy.",
        },
        {
          sectionId: 1,
          sectionNumber: "CMSC-2413",
          sectionInstanceNumber: 1,
          sectionClass: "Assembly Language",
          sectionStartTime: "11:00am",
          sectionEndTime: "11:55am",
          sectionDOW: ["T", "TH"],
          sectionLocation: "PEC 211",
          sectionSize: 30,
          sectionDate: "08/06/2022 - 11/18/2022",
          sectionSemester: "Fall",
          sectionTerms: ["T1", "T2"],
          sectionLab: false,
          sectionHours: 3,
          sectionHasPrereq: false,
          sectionPrereq: "",
          sectionDescription:
            "Here is the long description that no student has ever read and then takes the class without looking it over and regrets it because they thought it would be easy.",
        },
      ],
    };
  },
};
</script>
