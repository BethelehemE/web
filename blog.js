// function hidepost(){
//   document.getElementById("name").style.display = "none"
//   document.getElementById("description").style.display = "none"
// }
var ourLoc;
var view;
var map;
var i = 0;
var arr = ["Color.red", "Color.blue"]

function alert_(){
  alert(5+11);
}

function showPost(){
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var pic = document.getElementById("pic").value;
  var name1 = document.createElement("p");


  var name2 = document.createTextNode("User: " + name);
  name1.appendChild(name2);

  var pic1 = document.createElement("img");
  pic1.setAttribute("src", pic);
  pic1.setAttribute("class", "he");

  var description1 = document.createElement("p");
  var description2 = document.createTextNode(description);
  description1.appendChild(description2);
  //if(i%2 == 0){
  // var element = document.createElement("div");
  // }else{
  var element = document.createElement("div");
  // }
  element.appendChild(name1);
  element.appendChild(description1);
  element.appendChild(pic1);
  var currentDiv = document.getElementById("div1");
  var parent_ = document.getElementsByClassName("col-md-6");
  element.setAttribute("class", "alert alert-light");
  element.setAttribute("class", "shadow p-3 mb-5 bg-white rounded");
  currentDiv.parentNode.insertBefore(element, currentDiv);


  i++;
}
function ww(){
  // var name = document.getElementById("name").value;
  // var description = document.getElementById("description").value;
  // var pic = document.getElementById("pic").value;
  // var currentDiv = document.getElementById("div1");

  document.getElementById("div1").innerHTML("hey");

}


function init() {
	ourLoc = ol.proj.fromLonLat([-122.0364, 37.4090]);
	view = new ol.View({
		center: ourLoc,
		zoom: 8
	});
	map = new ol.Map({
		target: 'map',
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()
        // preload: 6
			})
		],
		loadTilesWhileAnimating: false,
    loadTilesWhileInteracting: true,
		view: view
	});
}

function panHome(){
  view.animate({
    center: ourLoc,
    duration: 10000,
    zoom: 8
  });
}

function makeCountryRequest(){
  var countryName = document.getElementById("countryname").value;


  if(countryName === ""){
    alert("You didn't enter a country name!");
    return;
  }

  var query = "https://restcountries.eu/rest/v2/name/" + countryName;

  query = query.replace(/ /g, "%20");
  // alert(query);

  // var lon = 0.0;
  // var lat = 0.0;

  var countryrequest = new XMLHttpRequest();

  countryrequest.open('GET', query, true);
  countryrequest.onload = function processCountryRequest() {
    if(countryrequest.readyState != 4){
      return;
    }
    // alert("Ready State " + countryrequest.readyState);
    // alert("Status " + countryrequest.status);
    // alert("Response " + countryrequest.responseText);
    if(countryrequest.status != 200 || countryrequest.responseText === ""){
      alert("Sorry, couldn't find that country!");
      return;
    }

    var countryInfo = JSON.parse(countryrequest.responseText);

    var lat = countryInfo[0].latlng[0]
    var lon = countryInfo[0].latlng[1]
    // if(lat == undefined || lon == undefined){
    //   alert("not a real country :/")
    // }else{

      alert(countryName + ": lon " + lon + ", lat " + lat)
      var location = ol.proj.fromLonLat([lon, lat]);
      view.animate({
        center: location,
        duration: 1000,
        zoom: 3
      });
}
    countryrequest.send();
    // }
}
//
// function processCountryRequest(){
//
//   });
// }

window.onload = init;

// function sdf(){
//   var mymap = L.map('one').setView([-122.03639030456543, -37.409334912568596], 13);
//
//
// 				L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2gtYWxpbmEiLCJhIjoiY2o2ODgyM2xiMGVxdzJxbjZoazZ5ejluMyJ9.hk2ve995u1d6kbj64CbmOQ', {
// 					maxZoom: 18,
// 					attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
// 						'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
// 						'Imagery © <a href="http://mapbox.com">Mapbox</a>',
// 					id: 'mapbox.streets'
// 				}).addTo(mymap);
// // -122.03639030456543, 37.409334912568596
//
// 				$.getJSON("fountainpoint.geojson", function(data){
// 					mydata = data;
// 					console.log(mydata)
//
// 			for (i = 0; i < mydata.length; i++){
// 				var properties = mydata[i].properties;
// 				var lon = properties.Longitude;
// 				var lat = properties.Latitude;
// 				var address = properties.Addresses;
// 				L.marker([lat, lon]).bindPopup(String(address)).addTo(mymap);
// 			};
//
// 			});
// }
