<template>
  <v-container fluid>
    <v-card-title>
      <v-text-field
        color="darkBlue"
        v-model="input"
        type="text"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details></v-text-field>
      <v-dialog v-model="createDialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="font-weight-bold darkBlue--text"
            v-bind="attrs"
            v-on="on">
            <font-awesome-icon
              class="darkBlue--text mr-2"
              icon="fa-solid fa-plus"
              size="xl" />
          </v-btn>
        </template>
        <CourseItemCreate
          @closeCourseDialogEvent="closeCreateDialog"
          @openCourseSnackbarEvent="openCourseSnackbar"></CourseItemCreate>
      </v-dialog>
      <v-btn color="darkBlue" plain v-on:click="filterShowing = !filterShowing">
        <font-awesome-icon
          class="darkBlue--text"
          icon="fa-solid fa-filter"
          size="xl" />
      </v-btn>
    </v-card-title>
    <v-container fluid>
      <v-row v-if="filterShowing">
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "SEMESTER" }}
          </v-card-title>
          <v-checkbox label="Fall" value="fall" hide-details></v-checkbox>
          <v-checkbox label="Winter" value="winter" hide-details></v-checkbox>
          <v-checkbox label="Spring" value="spring" hide-details></v-checkbox>
          <v-checkbox label="Summer" value="summer" hide-details></v-checkbox>
        </v-col>
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "LOCATION" }}
          </v-card-title>
          <v-checkbox
            label="In-Class"
            value="in-class"
            hide-details></v-checkbox>
          <v-checkbox label="Online" value="online" hide-details></v-checkbox>
        </v-col>
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "CLASS LEVEL" }}
          </v-card-title>
          <v-checkbox
            label="Freshman"
            value="freshman"
            hide-details></v-checkbox>
          <v-checkbox
            label="Sophomore"
            value="sophomore"
            hide-details></v-checkbox>
          <v-checkbox label="Junior" value="junior" hide-details></v-checkbox>
          <v-checkbox label="Senior" value="senior" hide-details></v-checkbox>
          <v-checkbox
            label="Graduate"
            value="graduate"
            hide-details></v-checkbox>
        </v-col>
        <v-col :lg="2" :md="3" :sm="6" :xs="12">
          <v-card-title class="font-weight-bold">
            {{ "LAB" }}
          </v-card-title>
          <v-checkbox
            label="Only Labs"
            value="onlylabs"
            hide-details></v-checkbox>
        </v-col>
      </v-row>
    </v-container>
    <v-pagination v-model="page" :length="2"></v-pagination>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="course in courses"
                :key="course.courseId"
                :lg="6"
                :md="6"
                :sm="12"
                :xs="12">
                <CourseItem
                  :course="course"
                  @openCourseSnackbarEvent="openCourseSnackbar"></CourseItem>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination v-model="page" :length="2"></v-pagination>
    <v-snackbar
      class="font-weight-bold"
      v-model="snackbar"
      :timeout="timeout"
      :color="snackbarColor">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
          class="font-weight-bold">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
  import CourseItem from "../components/CourseItem.vue";
  import CourseItemCreate from "../components/CourseItemCreate.vue";

  export default {
    name: "CourseCatalog",
    components: {
      CourseItem,
      CourseItemCreate,
    },
    data() {
      return {
        createDialog: false,
        deleteDialog: false,
        filterShowing: false,
        timeout: 2000,
        snackbar: false,
        snackbarText: "",
        snackbarColor: "darkBlue",
        // Fake course data that will be replaced by a store getter to fill this list with course objects.
        courses: [
          {
            courseId: 0,
            courseNumber: "ACCT-2113",
            courseClass: "Accounting Principles I",
            courseSemester: ["Fall, Winter"],
            courseLab: false,
            coursePrereq: "",
            courseDescription:
              "Purpose of accounting, recording transactions, preparing financial statements, the use of special journals and general and subsidiary ledgers, introduction of accounting principles, accounting for a merchandising firm, and payroll accounting. This course is normally offered every semester.",
          },
          {
            courseId: 1,
            courseNumber: "ACCT-2213",
            courseClass: "Accounting Principles II",
            courseSemester: ["Fall", "Spring"],
            courseLab: false,
            coursePrereq: "ACCT-2113",
            courseDescription:
              "Continuation of Accounting Principles I. Partnership accounting, corporation accounting, additional accounting principles, analyzing and interpreting financial statements, development of management decision-making accounting data, introduction to cost accounting, and cost-volume-profit analysis. This course is normally offered every semester.",
          },
          {
            courseId: 2,
            courseNumber: "ACCT-3113",
            courseClass: "Intermediate Accounting I",
            courseSemester: ["Fall"],
            courseLab: false,
            coursePrereq: "ACCT-2213",
            courseDescription:
              "Study of accounting theory and assumptions underlying Generally Accepted Accounting Principles related to financial statements, generally, and current assets, specifically. Special consideration is given to pronouncements of the Financial Accounting Standards Board, the American Institute of Certified Public Accountants, the American Accounting Association and the Securities and Exchange Commission. This course is normally offered fall semester.",
          },
          {
            courseId: 3,
            courseNumber: "ACCT-3213",
            courseClass: "Intermediate Accounting II",
            courseSemester: ["Spring"],
            courseLab: false,
            coursePrereq: "ACCT-3113",
            courseDescription:
              "Continuation of Intermediate Accounting I. Study of Generally Accepted Accounting Principles related to plant assets, liabilities and capital, financial statement analysis, price level accounting, and leasing transactions. This course is normally offered spring semester.",
          },
          {
            courseId: 4,
            courseNumber: "ACCT-3313",
            courseClass: "Cost Accounting",
            courseSemester: ["Fall", "Spring"],
            courseLab: false,
            coursePrereq: "ACCT-2213",
            courseDescription:
              "The development of cost and accounting data for internal use in planning, control, and decision making by managers. Topics and techniques studied are job-order and process cost accounting; accounting for materials, labor, and factory overhead costs; standard cost accounting; payroll; budgeting; responsibility accounting; cost-volume-profit analysis, and direct costing. This course is offered every semester.",
          },
          {
            courseId: 5,
            courseNumber: "ACCT-3323",
            courseClass: "Managerial Accounting",
            courseSemester: ["Fall", "Spring"],
            courseLab: false,
            coursePrereq: "",
            courseDescription:
              "Study of the use of cost accounting data as a tool for planning, control, and decision making by managers. Topics studied include the nature of costs and their behavior; design of job-order and process cost accounting systems; cost-volume-profit relationships and profit planning; segmented reporting; comparison of direct costing with absorption costing; control of operations through standard costs and flexible budgets; pricing of products and services; relevant costs for decision-making and capital budgeting. This course is offered as needed.",
          },
          {
            courseId: 6,
            courseNumber: "ACCT-3413",
            courseClass: "Income Taxation",
            courseSemester: ["Fall"],
            courseLab: false,
            coursePrereq: "ACCT-2213",
            courseDescription:
              "An introduction to the federal income tax, considering income, deductions, payment of tax, and other matters relating to personal income tax returns. This course is normally offered fall semester.",
          },
          {
            courseId: 7,
            courseNumber: "ACCT-3513",
            courseClass: "Advanced Federal Taxation",
            courseSemester: ["Spring"],
            courseLab: false,
            coursePrereq: "ACCT-3413",
            courseDescription:
              "A continuation of the study of the federal income tax as it relates to corporations, partnerships and fiduciaries. Also included is the study of more specialized income tax problems and the federal Social Security, estate, and gift taxes. This course is normally offered spring semester.",
          },
          {
            courseId: 8,
            courseNumber: "ACCT-3713",
            courseClass: "Accounting Information Systems",
            courseSemester: ["Spring"],
            courseLab: false,
            coursePrereq: "ACCT-3113",
            courseDescription:
              "Concepts underlying the analysis, design, use, control and audit of accounting information systems. The flow of accounting information through computerized information systems is emphasized. This course is normally offered in the spring semester.",
          },
        ],
      };
    },
    methods: {
      search() {},
      closeCreateDialog(val) {
        this.createDialog = val;
      },
      closeDeleteDialog(val) {
        this.deleteDialog = val;
      },
      openCourseSnackbar(val) {
        this.snackbar = val[1];
        this.snackbarText = val[0];
        this.snackbarColor = val[2];
      },
    },
  };
</script>
