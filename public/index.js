"use strict";

function handleEvent() {
  var searchTerm = document.getElementById("sBar").value;
  if (searchTerm === "") {
    alert("Please enter name of the article you would like to access into the search box.");
    return;
  }

  var api = "https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=" + searchTerm + "&limit=8";
  fetch(api).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data[1].length === 0) {
      alert("No results found for search item.");
    }
    var list = "<ul>" + data[1].map(function (item, index) {
      return "<li><a href=\"" + data[3][index] + "\" target=\"_blank\">" + item + "</a><p>" + data[2][index] + "</p></li>";
    }).join("") + "</ul>";
    var outputSection = document.getElementById("outputSection");
    outputSection.innerHTML = list;
  }).catch(function () {
    alert("Data failed to load, please try again.");
  });
}

var body = document.querySelector("body");
body.addEventListener("keypress", function (event) {
  if (event.charCode === 13) {
    handleEvent();
  }
});

var button0 = document.getElementById("button0");
button0.addEventListener("click", handleEvent);

var button1 = document.getElementById("button1");
button1.addEventListener("click", function () {
  var randomArticle = "https://en.wikipedia.org/wiki/Special:Random";
  window.open(randomArticle);
});