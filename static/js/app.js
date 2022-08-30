// import the data from data.js
const tableData = data;

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



// using d3, function to listen for events, here filter on date
function handleClick() {
    
    // selector string is the item we're telling d3 to look for; holding it in the date variable
    let date = d3.select("#datetime").property("value");

    // initialize the filtered table with the orig one
    let filteredData = tableData;

    // if statement for date filter
    if (date) {
        // filter the table based on date
        // === is strict equality, == is loose equality
        filteredData = filteredData.filter(row =>row.datetime === date);
    };
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// this is the line that actually uses d3 to listen for the click and tells what to do
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);



// function listLoop(userList) {
//     for (var i = 0; i < userList.length; i++) {
//       console.log(userList[i]);
//     }
//  }