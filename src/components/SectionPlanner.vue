<template>
    <div>
        <v-container
            fill-height
            fluid
            >
             <v-row>
                <v-col cols="3">
                    <v-row
                        v-for="filter in filters"
                        :key="filter.filterId"
                        no-gutters
                    >
                        <v-col cols=“1”>
                            {{filter.filterTitle}}
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="9">
                    <v-calendar
                        ref="calendar"
                        :now="today"
                        :value="today"
                        :events="events"
                        color="primary"
                        type="week"
                    >
                    </v-calendar>
                </v-col>
            </v-row>
        </v-container>
    </div>
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