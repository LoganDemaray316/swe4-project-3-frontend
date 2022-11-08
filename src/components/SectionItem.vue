<template>
  <v-card elevation="2" class="lightBlue">
    <v-card-title class="font-weight-bold lightBlue white--text">
      {{ section.sectionNumber + "-" + section.sectionInstanceNumber }}
    </v-card-title>
    <v-card-subtitle class="font-weight-bold darkBlue--text pb-0">
      {{ section.sectionClass }}
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
        {{ section.sectionDOW.join(" ") }}
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
              section.sectionSemester.toUpperCase() + ": " + section.sectionDate
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
