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

  var element = document.createElement("div");

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
