// import the data from data.js
const tableDate = data;

// Refernce the HTML table using D2
var tbody = d3.select("tbody");

// function for building the data table
function buildTable(data) {
    tbody.html("");
    
    // for loop using forEach instead of i i<<len.data...etc.
    data.forEach((dataRow)=>{
        
        // tells JS to find the tbody tag in the HTML and add a table row
        let row = tbody.append("tr");

        // looping through the data rows
        // put each sighting object onto its own row of data; "val" is each item in the object
        Object.values(dataRow).forEach((val)=>{
            // action of appending data into a table data tag td
            let cell = row.append("td");
            cell.text(val);
        });
    });
};



























// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello, world!");
}




function functionname(parameterinputs){

}




function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }