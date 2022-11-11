<template>
  <v-card ref="form">
    <v-card-title class="font-weight-bold lightGreen white--text">
      ADD COURSE
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field
              ref="courseName"
              required
              v-model="courseName"
              :rules="[() => !!courseName || 'This field is required']"
              color="darkBlue"
              label="Course Name"
              placeholder="Programming I"
            >
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              ref="courseNumber"
              required
              v-model="courseNumber"
              :rules="[
                () => !!courseNumber || 'This field is required',
                () =>
                  (!!courseNumber && courseNumber.length >= 9) ||
                  'Number too short',
                () =>
                  (!!courseNumber && courseNumber.length <= 9) ||
                  'Number too long',
                () => courseNumber[4] === '-' || 'Format must be \'ABCD-1234\'',
                () =>
                  !/\d/.test(courseNumber.substring(0, 4)) ||
                  'First 4 must be char',
                () =>
                  !/[a-zA-Z]/g.test(courseNumber.substring(5, 9)) ||
                  'Last 4 must be num',
              ]"
              color="darkBlue"
              label="Course Number"
              placeholder="CMSC-1111"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script></script>
