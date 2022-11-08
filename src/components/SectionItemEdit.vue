<template>
  <v-card>
    <v-card-title class="font-weight-bold lightGreen white--text">
      EDIT SECTION
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field color="darkBlue" label="Section Name"> </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field color="darkBlue" label="Section Number">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <!-- Section Time Picker -->
          <v-col cols="6">
            <v-dialog
              ref="dialog"
              v-model="sectionTimePickerShown"
              :return-value.sync="time"
              persistent
              width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  color="darkBlue"
                  v-model="time"
                  label="Section Time"
                  readonly
                  v-bind="attrs"
                  v-on="on">
                </v-text-field>
              </template>
              <v-time-picker
                ampm-in-title
                color="darkBlue"
                v-if="sectionTimePickerShown"
                v-model="time"
                full-width>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  class="font-weight-bold"
                  color="darkerRed"
                  @click="sectionTimePickerShown = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  class="font-weight-bold"
                  color="darkerGreen"
                  @click="$refs.dialog.save(time)">
                  Save
                </v-btn>
              </v-time-picker>
            </v-dialog>
          </v-col>
          <v-col cols="6">
            <v-text-field color="darkBlue" label="Section Size"> </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "SectionItemEdit",
    data() {
      return {
        time: null,
        sectionTimePickerShown: false,
      };
    },
  };
</script>
