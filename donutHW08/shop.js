// Donut shop object constructor-------------------
function makeShop(loc, min, max, avg) {
  this.location = loc;
  this.minCR = min; // Minimum customers/hour
  this.maxCR = max; // Maximum customers/hour
  this.donutsPerCust = avg;
  this.soldDonutsArray = [];

  // Generate pseudo-random integer on [min, max]
  this.randIntFullRange = function() {
    return Math.round(Math.random() * (this.maxCR - this.minCR + 1)) + this.minCR;
  };
  this.donutsThisHour = function() {
    return Math.round(this.donutsPerCust * this.randIntFullRange());
  };

  /*push.shopHash[loc] = 1; //set up has for location names, read as truthy if they exist*/
}


//SHOPS INFO-----------------------------
var shops = [
 Portland = new makeShop("Portland", 8, 43, 4.50),
 Vancouver = new makeShop("Vancouver", 9, 23, 6.33),
 Salem = new makeShop("Salem", 2, 28, 1.25),
 Eugene = new makeShop("Eugene", 8, 58, 3.75),
 Medford = new makeShop("Medford", 4, 37, 2.00)
];

/*var shopHash ={}

var userEnteredCityName = userLocation; //get from form input  <-- this is a string

if (shopHash[userEnteredCityName]) {  // true if already in hash

}*/



//Header array------------------
var time = ["City", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6am", "Total" ];

//BUILD TABLE FOUNDATION============================
var body = document.getElementById("tableAnchor");
var tbl = document.createElement("table");
var tableHead = document.createElement("thead");
var tableBody = document.createElement("tbody");
tbl.appendChild(tableHead);
tbl.appendChild(tableBody);
body.appendChild(tbl);

//Build header for table:::::::::::::::::::::::::
function makeHead(){
  for (var gg = 0; gg < 1; gg++){
    var hRow = document.createElement("tr");


    for (var hh = 0; hh < time.length; hh++){
      var head = document.createElement("th");
      head.innerHTML += time[hh];
      hRow.appendChild(head);

    }
    tableHead.appendChild(hRow);
  }
tbl.setAttribute("border", "4");
}
//Fill created table below header

function makeTable(){

  for (var i = 0; i < shops.length; i++){
    var row = document.createElement("tr");
    //First cell: city
    var city = document.createElement("td");
    var cityText = document.createTextNode(shops[i].location);
    city.appendChild(cityText);
    row.appendChild(city);
    var total=0;
    //Following cells: random numbers
    for (var kk = 0; kk < (time.length - 2); kk++){
      var cell = document.createElement("td");
      var hourStore = shops[i].donutsThisHour();
      var cellText = document.createTextNode(hourStore);
      total += hourStore;
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    //final cell: total calculator (total value found above on ln. 67)
      var totalReport = document.createElement("td");
      var totalReportText = document.createTextNode(total);
      totalReport.appendChild(totalReportText);
      row.appendChild(totalReport);

      tableBody.appendChild(row);
  }

tbl.setAttribute("id", "mainTable")
}
//Call table on load
makeHead();
makeTable();

overloadCounter = 0;


function addNewShop(){
  var userLocation = (document.getElementById('loc').value);
  var userMinCR =  parseInt(document.getElementById('minCR').value);
  var userMaxCR =  parseInt(document.getElementById('maxCR').value);
  var userAvgCustDonuts = parseFloat(document.getElementById('donutPerCust').value);
  if ((userMinCR != NaN) && (userMaxCR != NaN) && (userAvgCustDonuts != NaN)){
  var newShop = new makeShop (userLocation, userMinCR, userMaxCR, userAvgCustDonuts);

  shops.push(newShop);

  tableBody.innerHTML = "";
  overloadCounter++;

  } else {
    alert("Please enter correct data types in the form");
  }

  /*if (shopHash[userEnteredCityName] = 1){*/
//Rickroll and printing
  if (overloadCounter > 4){
    body.innerHTML = "";
    var rick = document.createElement("IFRAME");
    rick.setAttribute("width", "100%");
    rick.setAttribute("height", "800px");
    rick.setAttribute("src", "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1");
    document.body.appendChild(rick);
  }else if (overloadCounter <=4){
    tableBody.innerHTML="";
    makeTable();
//Clear form directly after making new table
    function clearForm () {
    document.getElementById("loc").value="";
    document.getElementById("minCR").value="";
    document.getElementById("maxCR").value = "";
    document.getElementById("donutPerCust").value="";
    }//end clear form
  clearForm();

    }//end printing bracket
  /*}//end shophash limiter
  else {alert ("Try a new city, instead!")}*/
}//final addshop bracket

