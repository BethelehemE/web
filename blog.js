var list1 = [];
var blogPosts = [];

// creating the map and putting it at given coordinates when reloaded
var coordinatelist = [];
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VwdGFzIiwiYSI6ImNqa2E3dWtlYTF1aW0zcG9oazBuMjN3ZWoifQ.VYMlnaKdcAuHgFdXkBVk9Q';
var mapp = new mapboxgl.Map({
  container: 'mapboi',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-122.03639030456543, 37.409334912568596],
  zoom: 10
});

function showPost(){
  // getting the elements from the text areas
  var data = {};
  data.name = document.getElementById("title").value;
  data.description = document.getElementById("description").value;
//   data.pic = document.getElementById("pic").value;
  data.tag = document.getElementById("tag").value;
//   data.address = document.getElementById("address").value;
  data.likes = 0;
  blogPosts.push(data);
//   addToMap(data.address, blogPosts.length -1);
  addToPage2(data, blogPosts.length -1);
  saveData();
  $('#addform')[0].reset();
}
function saveData(){
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
}

function loadData() {
	var blogPostsStr = localStorage.getItem("blogPosts");
	if (blogPostsStr) {
		blogPosts = JSON.parse(blogPostsStr);
		for (var i=blogPosts.length -1; i >= 0; i--) {
		    var blogPost = blogPosts[i];
		    addToPage2(blogPost, i);
//         if (blogPost.lat && blogPost.lng) {
//           addMarker(blogPost.lng, blogPost.lat);
//           console.log("Used saved lat/lng");
//         } else {
// 		      addToMap(blogPost.address, i);
//           console.log("Used address geocoding service.");
//         }
		}
    saveData();
	}
}

function addToPage2(data, index) {
  var newDiv = $("#postcopy").clone(true, true).insertBefore("#div1");
  newDiv.find(".blogtitle").text("Title: " + data.name);
  newDiv.find(".blogdescription").text(data.description);
  newDiv.find(".blogtags").text("Tags: " + data.tag);
//   newDiv.find(".bloglocation").text("Location: " + data.address);
  newDiv.find(".bloglikes").text("Likes: " + data.likes);
  newDiv.find(".bloglikes").attr("id", "likeBtn" + index);
//   newDiv.find(".blogimg").attr("src", data.pic);
  newDiv.find(".deletebtn").attr("onclick", "deletePost(" + index + ");");
  newDiv.find(".likebtn").attr("onclick", "likePost(" + index + ");");
  newDiv.attr("id", "blogPost" + index);
  newDiv.show();
}

function addToPage(data, index) {

  // title printing
  var title1 = document.createElement("p");
  var title2 = document.createTextNode("Title: " + data.name);
  title1.appendChild(title2);

  // image displaying
//   var pic1 = document.createElement("img");
//   pic1.setAttribute("src", data.pic);
//   pic1.setAttribute("class", "he");

  // description printing
  var description1 = document.createElement("p");
  var description2 = document.createTextNode(data.description);
  description1.appendChild(description2);

  // tag printing
  var tag1 = document.createElement("p");
  var tag2 = document.createTextNode("#" + data.tag);
  tag1.appendChild(tag2);

  var but1 = document.createElement("button");
  var but0 = document.createElement("p");
  but1.setAttribute("onclick", "deletePost(" + index + ");");
  but1.setAttribute("class", "btn btn-danger");
  var but2 = document.createTextNode("delete");
  but1.appendChild(but2);
  but0.appendChild(but1);

  var like1 = document.createElement("button");
  var like0 = document.createElement("p");
  like1.setAttribute("onclick", "likePost(" + index + ")");
  like1.setAttribute("class", "btn btn-primary");
  var like2 = document.createTextNode("Like");
  like1.appendChild(like2);
  like0.appendChild(like1);

  // like1.setAttribute("id", "likeBtn" + index)

  var numlike = document.createElement("p");
  var numlike1 = document.createTextNode("Likes: " + data.likes);
  numlike.appendChild(numlike1);
  numlike.setAttribute("id", "likeBtn" + index);

  var add1 = document.createElement("p");
  var add2 = document.createTextNode(data.address);
  add1.appendChild(add2);

  // creating a new div to create posts
  var element = document.createElement("div");

  element.appendChild(title1);
  element.appendChild(tag1);
  element.appendChild(add1);
  element.appendChild(description1);
//   element.appendChild(pic1);
  element.appendChild(document.createElement("p"));
  element.appendChild(but0);
  element.appendChild(numlike);
  element.appendChild(like0);


  var currentDiv = document.getElementById("blogPost" + (index - 1));
  if (!currentDiv) {
    currentDiv = document.getElementById("div1");
  }
  var parent_ = document.getElementsByClassName("col-md-6");

  element.setAttribute("class", "alert alert-light");
  element.setAttribute("class", "shadow p-3 mb-5 bg-white rounded");
  element.setAttribute("id", "blogPost" + index);

  currentDiv.parentNode.insertBefore(element, currentDiv);

}
var numLikes = 0;
function likePost(index){

  numLikes = blogPosts[index].likes = blogPosts[index].likes + 1;
  document.getElementById("likeBtn" + index).innerHTML = "Likes: " + numLikes;
   saveData();
}
function addMarker(Longitude, Latitude) {
  var marker = new mapboxgl.Marker({
  })
  .setLngLat([
    Longitude, Latitude
  ])
  .addTo(mapp);
}
function addToMap(address, index) {
	$.ajax("https://www.mapquestapi.com/geocoding/v1/address?key=l7s93voA4rSOre3CAz07hjsAZuV7JACm&inFormat=kvp&outFormat=json&location=" + address + "&thumbMaps=false", {
		success: function(data) {
      	Longitude = data.results[0].locations[0].latLng.lng;
      	Latitude = data.results[0].locations[0].latLng.lat;
        addMarker(Longitude, Latitude);
        blogPosts[index].lat = Latitude;
        blogPosts[index].lng = Longitude;
        saveData();
      },
      error: function() {
         $('#notification-bar').text('An error occurred');
      }
   });
}

function getList1(){
  // search bar searching
  var findTag = document.getElementById("mySearch");
  var makeUp = findTag.value.toUpperCase();
  for (var i=blogPosts.length -1; i >= 0; i--) {
    if (blogPosts[i].tag.toUpperCase().indexOf(makeUp) > -1) {
        document.getElementById("blogPost" + i).style.display = "block";
    } else {
       document.getElementById("blogPost" + i).style.display = "none";
    }
  }
}

function deletePost(index){
  blogPosts.splice(index, 1);
  document.getElementById("blogPost" + index).style.display = "none";
  saveData();
}
