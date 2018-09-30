//Business logic

var score=0;
var answered=0;
var calculate = function(){
for (var i=0;i<form.length; i++){
  var response = $("input:radio[ name=Q "+i+" ]:checked").val();
      score += parseInt(response);
      if (response != undefined) {
        answered += 1
      }
    }
alert("you got " + score + "/" + form.length );
}
  
//User interface
$(document).ready(function(){
  $("#form").click(function(event){
    event.preventDefault();
    calculate(); 
    var feedback = ""
    var opinion =""
    if (answered === 5) {
      feedback = "Your score is:";
      $("#display").text(score+"%").fadeIn();
      if (score <= 20) {
        $("#opinion").text("POOR PERFORMANCE").fadeIn();
      } else if (score <= 60) {
        $("#opinion").text("ROOM FOR IMPROVEMENT").fadeIn();
      } else if (score <= 80) {
        $("#opinion").text("VERY GOOD").fadeIn();
      } else {
        $("#opinion").append("EXCELLENT WORK").fadeIn();
      }
    }
    else {
      feedback = "Please answer all the questions and submit again!";
    })


})








































