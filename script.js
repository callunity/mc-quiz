var score = 0;
var questionNumber = 0;
var allQuestions = [
  {
    question: "What does proper \"sushi\" require?",
    choices: ["Raw fish", "Rolls wrapped in seaweed", "Vinegared rice", "Wasabi"],
    difficulty: 2,
    correctAnswer: 2
  },
  {
    question: "An astronaut's suit developing a hole during a spacewalk would result in which of the following?",
    choices: ["Boiling internal fluids", "Bodily explosions", "Death by hypothermia","Death by hypoxia"],
    difficulty: 1,
    correctAnswer: 3
  },
  {
    question: "What is the square root of 4?",
    choices: ["2", "1", "0"],
    difficulty: 0,
    correctAnswer: 0
  }
];

var displayQuestion = function() {
  $('#questions').append('<p class="question">' + allQuestions[questionNumber].question + '</p>');
};

var displayOptions = function() {
    length = allQuestions[questionNumber].choices.length;
    for (var i = 0; i < length; i++) {
      $('#choices').append('<label><input name="choice" type="radio" value="' + i + '" id="' + i + '">' + allQuestions[questionNumber].choices[i] + '</label><br>')
    }
};

var adjustScore = function() {
  var checked = $('input[name=choice]:checked').val();
  var answer = allQuestions[questionNumber].correctAnswer;
    if (checked == answer) {
      score += 1;
    }
};

var changeQuestion = function() {
  questionNumber += 1;
  if (questionNumber === allQuestions.length) {
    $('#button').hide();
    $('#questions').append('<p class="finalScore">Congratulations, you\'ve finished! Your score is ' + score + ' out of ' + allQuestions.length + '.');
  } else {
    displayQuestion();
    displayOptions();
  }
};

$(document).ready(function() {
  displayQuestion();
  displayOptions();

  $('#button').click(function() {
    adjustScore();

    $('.question').remove();
    $('#choices').empty();

    changeQuestion();

  })
});