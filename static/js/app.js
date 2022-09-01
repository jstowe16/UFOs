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

// 1. Create a variable to keep track of all the filters as an object.
let filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedVar = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let varValue = changedVar.property("value");

    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedVar.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (varValue) {
      filters[filterId] = varValue;
      console.log(varValue);
      console.log(filterId);
      console.log(filters);
    }
    else {
      delete filters[filterId];
    };
    
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  };

// 7. Use this function to filter the table when data is entered.
function filterTable() {

    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    // console.log(filters);
    if (filters['datetime']){
        console.log(filters['datetime']);
        filteredData = filteredData.filter(row =>row.datetime === filters['datetime']);

    };
    if (filters['city']){
        console.log(filters['city']);
        filteredData = filteredData.filter(row =>row.city === filters['city']);

    };
    if (filters['state']){
        console.log(filters['state']);
        filteredData = filteredData.filter(row =>row.state === filters['state']);
        
    };
    if (filters['country']){
        console.log(filters['country']);
        filteredData = filteredData.filter(row =>row.country === filters['country']);

    };
    if (filters['shape']){
        console.log(filters['shape']);
        filteredData = filteredData.filter(row =>row.shape === filters['shape']);

    };

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
};

// this is the line that actually uses d3 to listen for the click and tells what to do
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);