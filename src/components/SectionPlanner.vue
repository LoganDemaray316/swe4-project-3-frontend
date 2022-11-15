<template>
    <v-container fluid>
        <v-row>
            <v-col cols="3">
                <v-card>
                    <v-card-title class="font-weight-bold white--text darkBlue">
                        FILTERS
                    </v-card-title>
                    <v-card-text></v-card-text>
                    <v-card-text class="font-weight-1 darkBlue--text lightBlue">
                        Department
                    </v-card-text>
                    <v-card-text>
                        <v-checkbox
                            v-model="checkbox"
                            label="CMSC"
                            color="darkBlue"
                            value="darkBlue"
                        ></v-checkbox>
                    </v-card-text>
                    <v-card-text class="font-weight-1 darkBlue--text lightBlue">
                        Faculty
                    </v-card-text>
                    <v-card-text>
                        <v-checkbox
                            v-model="checkbox"
                            label="CMSC"
                            color="darkBlue"
                            value="darkBlue"
                        ></v-checkbox>
                    </v-card-text>
                    <v-card-text class="font-weight-1 darkBlue--text lightBlue">
                        Room
                    </v-card-text>
                    <v-card-text>
                        <v-checkbox
                            v-model="checkbox"
                            label="CMSC"
                            color="darkBlue"
                            value="darkBlue"
                        ></v-checkbox>
                    </v-card-text>
                    
                     <!--    <v-container fluid>  Department, faculty, room
                            <v-row dense>
                                <v-col 
                                    v-for="dept in departments"
                                    :key="dept.deptID"
                                <DepartmentItem
                                    :dept="dept"
                                    @openSnackbarEvent="openSnackBar"></DepartmentItem>
                                </v-col>
                            </v-row>
                    </v-container> -->
                </v-card>
            </v-col>
                   <!--  <v-row
                        v-for="filter in filters"
                        :key="filter.filterId"
                        no-gutters
                    >
                        <v-col cols=“1”>
                            {{filter.filterTitle}}
                            
                        </v-col>
                    </v-row>
                </v-col> -->
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

        filters: [
            'Department',
            'Faculty',
            'Room',
        ],
/* 
        return [
            checkbox: true,
        ], */
        
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
        
        }),
    };
</script>