
$(document).ready(function() {

  $("#button0").click(function() {
  var searchTerm = $("#sBar").val();
  var api0 = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&limit=10&namespace=0&format=json&callback=?&origin=*";

  if (searchTerm === "") {
    alert("Please enter name of the article you would like to access into the search box.");
  }

$.ajax({

  type: "GET",
  async: false,
  dataType: "json",
  url: api0,  
 
  success: function(info) {

  if (info[1].length >= 10) {

    info[1].reverse().splice(0, 2);
    info[2].reverse().splice(0, 2);
    info[3].reverse().splice(0, 2);
  
  } else {

    info[1].reverse();
    info[2].reverse();
    info[3].reverse();
 
  }

  $("#outputSection").html(" ");

  for (var i = 0; i < info[1].length; i++) {
    $("#outputSection").prepend("<li><a href="+info[3][i]+">"+info[1][i]+"</a><p>"+info[2][i]+"</p></li>");
 
  } 

},
  
  error: function() {
    alert("An error has occured, please try again");
  
      }

  }); 

});

  $("#sBar").keypress(function(event) {
      
    if (event.which === 13) {
      $("#button0").click();
    }   if (searchTerm === "") {
       alert("Please enter name of the article you would like to access into the search box.");
      
      }
  });  


$("#button1").click(function() {
var randomArticle = "https://en.wikipedia.org/wiki/Special:Random";
window.open(randomArticle);


  }); 

});




