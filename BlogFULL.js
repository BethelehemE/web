var list1 = [];

function showPost(){
  // getting the elements from the text areas
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var pic = document.getElementById("pic").value;
  var tag = document.getElementById("tag").value;

  sortThroughTags();

  // name printing
  var name1 = document.createElement("p");
  var name2 = document.createTextNode("User: " + name);
  name1.appendChild(name2);

  // image displaying
  var pic1 = document.createElement("img");
  pic1.setAttribute("src", pic);
  pic1.setAttribute("class", "he");

  // description printing
  var description1 = document.createElement("p");
  var description2 = document.createTextNode(description);
  description1.appendChild(description2);

  // tag printing
  var tag1 = document.createElement("p");
  var tag2 = document.createTextNode("#" + tag);
  tag1.appendChild(tag2);

  // creating a new div to create posts
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

}

function sortThroughTags(){
  // finding the tag and pushing it to a list
  var tag = document.getElementById("tag").value;
  list1.push(tag);
  return list1;
}

function getList1(){
  // search bar searching
  var tagList;
  tagList = sortThroughTags();

  var findTag = document.getElementById("mySearch");
  var makeUp = findTag.value.toUpperCase();

  for (var i = 0; i < tagList.length; i++) {
      if (tagList[i].toUpperCase().indexOf(makeUp) > -1) {
          document.getElementById(tagList[i]).style.display = "block";
      } else {
         document.getElementById(tagList[i]).style.display = "none";
      }
  }
}
