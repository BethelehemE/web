var i = 0;
var arr = ["Color.red", "Color.blue"]

function alert_(){
  alert(5+11);
}
function showPost(){
  // var hel = document.createElement("li");
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var pic = document.getElementById("pic").value;
  var tag = document.getElementById("tag").value;
  sortThroughTags();
  // hel.appendChild(tag);
  // hel.setAttribute("id", "onee")
  // alert(tagList);
  var name1 = document.createElement("p");


  var name2 = document.createTextNode("User: " + name);
  name1.appendChild(name2);

  var pic1 = document.createElement("img");
  pic1.setAttribute("src", pic);
  pic1.setAttribute("class", "he");

  var description1 = document.createElement("p");
  var description2 = document.createTextNode(description);
  description1.appendChild(description2);

  var tag1 = document.createElement("p");
  var tag2 = document.createTextNode("#" + tag);
  tag1.appendChild(tag2);

  var element = document.createElement("div");

  element.appendChild(name1);
  element.appendChild(tag1);
  element.appendChild(description1);
  element.appendChild(pic1);
  var currentDiv = document.getElementById("div1");
  var parent_ = document.getElementsByClassName("col-md-6");
  element.setAttribute("class", "alert alert-light");
  element.setAttribute("class", "shadow p-3 mb-5 bg-white rounded");
  element.setAttribute("id", tag);
  currentDiv.parentNode.insertBefore(element, currentDiv);
  // var tagElem;
  // tagElem = document.createElement("li");
  // tagElem.setAttribute("id", "tagElement");
  // tagElem.innerHTML = tag;
  //
  // var tagList;
  // var tagToAdd;
  // tagList = document.getElementById("tagList");
  // tagToAdd = document.getElementById("tagElement");
  // tagList.innerHTML = tagToAdd;
  //
  // alert(tagToAdd);

  i++;

}
var list1 = [];
function sortThroughTags(){

  var tag = document.getElementById("tag").value;
  list1.push(tag);
  return list1;
}
function getList1(){
  var tagList;
  tagList = sortThroughTags();

  var findTag = document.getElementById("mySearch");
  var makeUp = findTag.value.toUpperCase();

  //var sortTag = document.getElementById("tag");
  // var a;
  // ul = document.getElementById("tagList");
  // li = ul.getElementsByTagName("li");
  //
  // var inner = ul.innerHTML;

//  var listTag = getList();
  //var li = sortTag.getElementsByTagName("li");
  for (var i = 0; i < tagList.length; i++) {
      // a = li[i].getElementsByTagName;
      //alert(li[i]);

      if (tagList[i].toUpperCase().indexOf(makeUp) > -1) {
          //tagList[i].style.display = "";
          document.getElementById(tagList[i]).style.display = "block";
      } else {
         //tagList[i].style.display = "none";
         document.getElementById(tagList[i]).style.display = "none";
      }
  }
}
