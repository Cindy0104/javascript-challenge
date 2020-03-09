// from data.js



var tableData = data;
var tbody = d3.select("tbody");
tbody.html("");
tableData.forEach(function(UFOData) {
    console.log(UFOData);
    var row = tbody.append("tr");
    Object.entries(UFOData).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  var button = d3.select("#filter-btn");
  button.on("click", function(){
    //Prevent the page from refreshing
      d3.event.preventDefault();
      var inputdate = d3.select("#datetime");
      var inputvalue = inputdate.property("value");
      var filterdate = tableData.filter(UFOdata => UFOdata.datetime === inputvalue);
      console.log(filterdate);
      var tbody = d3.select("tbody");
      tbody.html("");

      filterdate.forEach(function(newUFOData) {
          
          var row = tbody.append("tr");
          Object.entries(newUFOData).forEach(function([key, value]) {
            // Append a cell to the row for each value
            // in the weather report object
            var cell = row.append("td");
            cell.text(value);  
          });
      });      

 });
