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
      <v-dialog v-model="dialog" scrollable max-width="300px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="darkBlue" plain dark v-bind="attrs" v-on="on">
            <font-awesome-icon
              class="darkBlue--text"
              icon="fa-solid fa-filter"
              size="xl"
            />
          </v-btn>
        </template>
        <v-card>
          <v-card-title>Filters For Courses</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px; width: 300px">
            <v-checkbox-group v-model="dialogm1">
              <v-card-title class="font-weight-bold">
                {{ "SEMESTER" }}
              </v-card-title>
              <v-row>
                <v-checkbox label="Fall" value="fall"></v-checkbox>
                <v-checkbox label="Winter" value="winter"></v-checkbox>
                <v-checkbox label="Spring" value="spring"></v-checkbox>
                <v-checkbox label="Summer" value="summer"></v-checkbox>
              </v-row>
              <v-card-title class="font-weight-bold">
                {{ "LOCATION" }}
              </v-card-title>
              <v-checkbox label="In-Class" value="in-class"></v-checkbox>
              <v-checkbox label="Online" value="online"></v-checkbox>
              <v-checkbox label="Belize" value="belize"></v-checkbox>
              <v-checkbox label="Benin" value="benin"></v-checkbox>
              <v-checkbox label="Bhutan" value="bhutan"></v-checkbox>
              <v-checkbox label="Bolivia" value="bolivia"></v-checkbox>
              <v-checkbox
                label="Bosnia and Herzegovina"
                value="bosnia"
              ></v-checkbox>
              <v-checkbox label="Botswana" value="botswana"></v-checkbox>
              <v-checkbox label="Brazil" value="brazil"></v-checkbox>
              <v-checkbox label="Brunei" value="brunei"></v-checkbox>
              <v-checkbox label="Bulgaria" value="bulgaria"></v-checkbox>
              <v-checkbox label="Burkina Faso" value="burkina"></v-checkbox>
              <v-checkbox label="Burma" value="burma"></v-checkbox>
              <v-checkbox label="Burundi" value="burundi"></v-checkbox>
            </v-checkbox-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-title>
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

export default {
  name: "HomeDashboard",
  components: {
    CourseItem,
  },
  data() {
    return {
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

<!-- 
    
    This is homedashboard, I am waiting for router to work...

    <template>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="font-weight-bold white--text darkBlue">
              YOUR SECTIONS
            </v-card-title>
            <v-container fluid>
              <v-row dense>
                <v-col
                  v-for="section in sections"
                  :key="section.sectionId"
                  :lg="sections.length < 4 ? 6 : 3"
                  :md="6"
                  :sm="6"
                  :xs="12">
                  <CourseItem :section="section"></CourseItem>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-title class="font-weight-bold white--text darkBlue">
              FAVORITES
            </v-card-title>
            <v-card-text> </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-title class="font-weight-bold white--text darkBlue">
              ABOUT
            </v-card-title>
            <v-card-text> </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
            },
          ],
        };
      },
    };
  </script> -->
