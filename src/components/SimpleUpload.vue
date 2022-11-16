<template>
  <form id="myForm">
    <input type="file" id="csvFile" accept=".csv" />
    <br />
    <input id="clickMe" type="submit" value="Submit" @click="sendFile()" />
  </form>
</template>

<script>
import FileImportService from "../services/fileImport";
let data = [];
let jsonObj = [];

export default {
  name: "SimpleUpload",

  data() {
    return {
      file: "",
    };
  },

  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    sendFile() {
      const csvFile = document.getElementById("csvFile");
      const input = csvFile.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        const text = e.target.result;
        data = text.split("\n");

        var headers = data[0].split(",");
        for (var i = 1; i < data.length; i++) {
          var x = data[i].split(",");
          var obj = {};
          for (var j = 0; j < x.length; j++) {
            obj[headers[j].trim()] = x[j].trim();
          }
          jsonObj.push(obj);
        }
      };

      console.log(jsonObj);
      reader.readAsText(input);
      this.parseFile();
    },
    parseFile() {
      for (let i = 0; i < jsonObj.length; i++) {
        delete jsonObj[i]["Synonym"];
        delete jsonObj[i]["UG/GR"];
        delete jsonObj[i]["Section Number"];
        delete jsonObj[i]["Crs Level"];
        delete jsonObj[i]["Section Title"];
        delete jsonObj[i]["Course Type"];
        delete jsonObj[i]["Reg Restrictions"];
        delete jsonObj[i]["Faculty Name (LFM)"];
        delete jsonObj[i]["Faculty Name 2 (LFM)"];
        delete jsonObj[i]["Sec Start Date"];
        delete jsonObj[i]["Meeting Start Date"];
        delete jsonObj[i]["Sec End Date"];
        delete jsonObj[i]["Meeting End Date"];
        delete jsonObj[i]["Academic Year"];
        delete jsonObj[i]["Sec Num Of"];
        delete jsonObj[i]["Min Cred"];
        delete jsonObj[i]["Max Cred"];
        delete jsonObj[i]["Enr Count"];
        delete jsonObj[i]["Wait"];
        delete jsonObj[i]["Depts"];
        delete jsonObj[i]["Divisions"];
        delete jsonObj[i]["College"];
        delete jsonObj[i]["Instr Method"];
        delete jsonObj[i]["Sun"];
        delete jsonObj[i]["Mon"];
        delete jsonObj[i]["Tue"];
        delete jsonObj[i]["Wed"];
        delete jsonObj[i]["Thu"];
        delete jsonObj[i]["Fri"];
        delete jsonObj[i]["Sat"];
        delete jsonObj[i]["SEC.XLIST"];
        delete jsonObj[i]["SEC.FEE"];
        delete jsonObj[i]["SEC.COMMENTS"];
        delete jsonObj[i]["SEC.PRINTED.COMMENTS"];
        delete jsonObj[i]["Primary Section"];
        delete jsonObj[i]["Term Sort No"];
        delete jsonObj[i]["Only Pass/NoPass"];
        delete jsonObj[i]["Allow Pass/NoPass"];
        delete jsonObj[i]["Start Time 24hr"];
        delete jsonObj[i]["End Time 24hr"];
      }

      FileImportService.upload(jsonObj);
    },
  },
};
</script>
