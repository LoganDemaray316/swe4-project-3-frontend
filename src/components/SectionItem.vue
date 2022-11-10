<template>
  <v-card elevation="2" class="lightBlue">
    <v-card-title class="font-weight-bold lightBlue white--text">
      {{ section.sectionNumber + "-" + section.sectionInstanceNumber }}
    </v-card-title>
    <v-card-subtitle class="font-weight-bold darkBlue--text pb-0">
      {{ section.sectionName }}
    </v-card-subtitle>

    <v-chip-group column class="mx-4 my-2">
      <v-chip
        :ripple="false"
        class="font-weight-bold white darkBlue--text mr-2">
        <font-awesome-icon
          class="darkBlue--text mr-2"
          icon="fa-solid fa-clock" />
        {{ section.sectionStartTime + " : " + section.sectionEndTime }}
      </v-chip>
      <v-chip
        :ripple="false"
        class="font-weight-bold white darkBlue--text mr-2">
        <font-awesome-icon
          class="darkBlue--text mr-2"
          icon="fa-solid fa-calendar-days" />
        {{ createDOWString() }}
      </v-chip>
      <v-chip :ripple="false" class="font-weight-bold white darkBlue--text">
        <font-awesome-icon
          class="darkBlue--text mr-2"
          icon="fa-solid fa-location-dot" />
        {{ section.sectionLocation }}
      </v-chip>
    </v-chip-group>
    <v-list disabled class="white darkBlue--text pt-0 pb-0">
      <v-list-item-group>
        <v-list-item class="font-weight-bold darkBlue--text">
          <v-list-item-icon class="mr-2">
            <font-awesome-icon
              class="darkBlue--text"
              icon="fa-solid fa-user-group" />
          </v-list-item-icon>
          <v-list-item-content>
            {{ section.sectionSize }}
          </v-list-item-content>
        </v-list-item>

        <v-divider class="lightGray"></v-divider>

        <v-list-item class="font-weight-bold darkBlue--text">
          <v-list-item-icon class="mr-2">
            <font-awesome-icon
              class="darkBlue--text"
              icon="fa-solid fa-calendar" />
          </v-list-item-icon>
          <v-list-item-content>
            {{
              section.sectionSemester.toUpperCase() +
              ": " +
              section.sectionStartDate +
              " - " +
              section.sectionEndDate
            }}
          </v-list-item-content>
        </v-list-item>

        <v-divider class="lightGray"></v-divider>

        <v-list-item class="font-weight-bold darkBlue--text">
          <v-list-item-icon class="mr-2">
            <font-awesome-icon
              class="darkBlue--text"
              icon="fa-solid fa-calendar-week" />
          </v-list-item-icon>
          <v-list-item-content>
            {{ section.sectionTerms.join(", ") }}
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-divider class="lightGray"></v-divider>
    </v-list>
    <v-card-actions class="white">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="font-weight-bold darkBlue--text"
            v-bind="attrs"
            v-on="on">
            Edit
          </v-btn>
        </template>
        <SectionItemEdit
          @closeDialogEvent="closeDialog"
          :section="section"></SectionItemEdit>
      </v-dialog>

      <v-btn text class="font-weight-bold darkerRed--text"> Delete </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import SectionItemEdit from "./SectionItemEdit.vue";

  export default {
    name: "SectionItem",
    data() {
      return {
        dialog: false,
      };
    },
    components: {
      SectionItemEdit,
    },
    props: {
      section: Object,
    },
    methods: {
      closeDialog(val) {
        this.dialog = val;
      },
      createDOWString() {
        let ret = "";
        for (var i = 0; i < this.section.sectionDOW.length; i++) {
          if (this.section.sectionDOW[i] === "Thursday") {
            ret += " " + "TH";
          } else {
            ret += " " + this.section.sectionDOW[i][0];
          }
        }
        return ret.trim();
      },
    },
  };
</script>
