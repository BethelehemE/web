// function hidepost(){
//   document.getElementById("name").style.display = "none"
//   document.getElementById("description").style.display = "none"
// }
var i = 0;
var arr = ["Color.red", "Color.blue"]
function showPost(){
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var pic = document.getElementById("pic").value;
  var name1 = document.createElement("p");

  var name2 = document.createTextNode("User: " + name);
  name1.appendChild(name2);

  var pic1 = document.createElement("img");
  pic1.setAttribute("src", pic);


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
  if(i%2 == 0){
    element.setAttribute("class", "alert alert-light shadow p-3 mb-5 bg-white rounded");
  }else{
     element.setAttribute("class", "alert alert-secondary shadow p-3 mb-5 bg-white rounded");
   }
  currentDiv.insertBefore(element, null);


  i++;
}
