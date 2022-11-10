<template>
  <v-card elevation="2" class="lightBlue">
    <v-card-title class="font-weight-bold lightBlue white--text">
      {{ section.sectionClass }}
    </v-card-title>
    <v-card-subtitle class="font-weight-bold darkBlue--text pb-0">
      {{ section.sectionNumber + "-" + section.sectionInstanceNumber }}
    </v-card-subtitle>

    <v-chip-group column class="mx-4 my-2">
      <v-chip
        :ripple="false"
        class="font-weight-bold white darkBlue--text mr-2"
      >
        <font-awesome-icon
          class="darkBlue--text mr-2"
          icon="fa-solid fa-clock"
        />
        {{ section.sectionHours }}
      </v-chip>
      <v-chip
        :ripple="false"
        class="font-weight-bold white darkBlue--text mr-2"
      >
        <font-awesome-icon
          class="darkBlue--text mr-2"
          icon="fa-solid fa-calendar-days"
        />
        {{ section.sectionSemester }}
      </v-chip>
      <v-chip
        :ripple="false"
        class="font-weight-bold white darkBlue--text"
        v-if="section.sectionLab"
      >
        <font-awesome-icon
          class="darkBlue--text mr-2"
          icon="fa-solid fa-flask"
        />
        {{ "LAB" }}
      </v-chip>
    </v-chip-group>
    <v-list disabled class="white darkBlue--text pt-0 pb-0">
      <v-list-item-group>
        <v-list-item
          class="font-weight-bold darkBlue--text"
          v-if="section.sectionHasPrereq"
        >
          <v-list-item-icon class="mr-2">
            <font-awesome-icon
              class="darkBlue--text"
              icon="fa-solid fa-circle-exclamation"
            />
          </v-list-item-icon>
          <v-list-item-content>
            {{ section.sectionPrereq }}
          </v-list-item-content>
        </v-list-item>

        <v-divider class="lightGray"></v-divider>

        <v-list-item class="font-weight-bold darkBlue--text">
          <v-list-item-content>
            {{ section.sectionDescription }}
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-divider class="lightGray"></v-divider>
    </v-list>
    <v-card-actions class="white">
      <v-btn text class="font-weight-bold darkBlue--text"> Edit </v-btn>
      <v-btn text class="font-weight-bold darkerRed--text"> Delete </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SectionItem",
  props: {
    section: Object,
  },
};
</script>
