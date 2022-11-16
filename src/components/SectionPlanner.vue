<template>
    <v-container fluid>
        <v-row>
            <v-col cols="3">
                <v-card>
                    <v-card-title class="font-weight-bold white--text darkBlue">
                        FILTERS
                    </v-card-title>
                    <v-card-text></v-card-text>
                    <v-select class="font-weight-1 darkBlue--text lightBlue"
                            ref="dept"
                            color="darkBlue"
                            v-model="dept"
                            :items="departments"
                            :menu-props="{maxHeight: '400'}"
                            label="Department"
                            multiple
                        ></v-select>
                    <v-card-text></v-card-text>
                    <v-select class="font-weight-1 darkBlue--text lightBlue"
                            ref="faculty"
                            color="darkBlue"
                            v-model="faculty"
                            :items="facultyMembers"
                            :menu-props="{maxHeight: '400'}"
                            label="Faculty"
                            multiple
                        ></v-select>
                    <v-card-text></v-card-text>
                    <v-select class="font-weight-1 darkBlue--text lightBlue"
                            ref="room"
                            color="darkBlue"
                            v-model="room"
                            :items="rooms"
                            :menu-props="{maxHeight: '400'}"
                            label="Room"
                            multiple
                        ></v-select>
                    <v-card-text></v-card-text>
                    <v-select class="font-weight-1 darkBlue--text lightBlue"
                            ref="daysOfWeek"
                            color="darkBlue"
                            v-model="daysOfWeek"
                            :items="daysOptions"
                            :menu-props="{maxHeight: '400'}"
                            label="Days of Week"
                            multiple
                        ></v-select>
                    <v-card-text></v-card-text>
                </v-card>
            </v-col>
                <v-col cols="9">
                    <v-card>
                    <v-calendar
                        ref="calendar"
                        :now="today"
                        :value="today"
                        :events="events"
                        color="primary"
                        type="week"
                    >
                    </v-calendar>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
</template>
  
<script>
    export default {
      name: "SectionPlanner",
      data: () => ({
        alignments: [
            'start',
            'center',
            'end',
        ],

        departments: [
            'CMSC',
            'COMM',
            'MUSC',
        ],

        facultyMembers: [
            'David North',
            'Brian Simmons',
            'Kyle Pullen'
        ],

        rooms: [
            '233',
            '231',
            '228',
        ],

        daysOptions: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            "Friday",
        ],
/* 
        
        //today: '2022-11-09',
        //sections: [],
        //sectionTimes: [],
        //courses: [],
        
        //methods: {
            
        //}

        // event: [
        //     {
        //         name: 'Object Oriented Programming',
        //         start: '2022-11-07 10:00',
        //         end: '2022-11-07 10:55',
                
        //     },
        //     {
        //         name: 'Assembly Language',
        //         start: '2022-11-09 11:00',
        //         end: '2022-11-09 11:55',
        //     },
        // ]
        */
        }),
    };
</script>