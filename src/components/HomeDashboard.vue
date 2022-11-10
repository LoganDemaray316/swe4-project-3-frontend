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
                <SectionItem :section="section"></SectionItem>
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
  import SectionItem from "./SectionItem.vue";

  export default {
    name: "HomeDashboard",
    components: {
      SectionItem,
    },
    data() {
      return {
        // Fake section data that will be replaced by a store getter to fill this list with section objects.
        sections: [
          {
            sectionId: 0,
            sectionNumber: "CMSC-2113",
            sectionInstanceNumber: 1,
            sectionName: "Object Oriented Programming",
            sectionStartTime: "10:00am",
            sectionEndTime: "10:55am",
            sectionDOW: ["Monday", "Wednesday", "Friday"],
            sectionLocation: "PEC 213",
            sectionSize: 30,
            sectionStartDate: "08/06/2022",
            sectionEndDate: "11/18/2022",
            sectionSemester: "Fall",
            sectionTerms: ["T1", "T2"],
          },
          {
            sectionId: 1,
            sectionNumber: "CMSC-2413",
            sectionInstanceNumber: 1,
            sectionName: "Assembly Language",
            sectionStartTime: "11:00am",
            sectionEndTime: "11:55am",
            sectionDOW: ["Tuesday", "Thursday"],
            sectionLocation: "PEC 211",
            sectionSize: 30,
            sectionStartDate: "08/06/2022",
            sectionEndDate: "11/18/2022",
            sectionSemester: "Fall",
            sectionTerms: ["T1", "T2"],
          },
        ],
      };
    },
  };
</script>
