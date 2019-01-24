if(jQuery){
  var checkAnswers = function(){
    var answerString = "";
    var answers = $(":checked");
    answers.each(function(i) {
      answerString = answerString + answers[i].value;
    });
    $(":checked").each(function(i) {
      var answerString = answerString + answers[i].value;
    });
	//alert(answerString);
    checkIfCorrect(answerString);
  };
  var checkIfCorrect = function(theString){
    if(parseInt(theString, 16) === 741617753021){
      $("body").addClass("correct");
      $("h1").text("You got all the questions right!");
      $("canvas").show();
    }
  };
  $("#question1").show();
};

$("#question2").show();
$("#question3").show();
$("#question4").show();
$("#question5").show();
$("#question6").show();
$("#question7").show();
$("#question8").show();
$("#question9").show();
$("#question10").show();
