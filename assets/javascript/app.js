$(document).ready(function() {
  game.startGame()
});

var Questions = [
  {
    question: "What is my birthday?",
    answers: [
      "feb 1",
      "jan 1",
      "I've always been here",
      "birthdays are a made up idea"
    ],
    correctAnswer: "feb 1"
  },
  {
    question: "What is Chicago's Capital?",
    answers: ["What?", "absent", "today", "not applicable"],
    correctAnswer: "absent"
  },
  {
    question: "What is the best taco?",
    answers: ["Asado", "Barbacoa", "steak", "chorizo"],
    correctAnswer: "steak"
  },
  {
    question: "Top 3 psychedelic Bands?",
    answers: [
      "Led Zeppelin, The Yardbirds, FUzz",
      "MGMT, Grateful Dead, King Crimson",
      "Tame Impala, Jimi Hendrix, Hawkwind",
      "Fuzz, Led Zeppelin, Electric Wizards"
    ],
    correctAnswer: "Fuzz, Led Zeppelin, Electric Wizards"
  },
  {
    question: "What is Code?",
    answers: ["life", "a headache", "synax", "instructions"],
    correctAnswer: "instructions"
  },
  {
    question: "Best place to live?",
    answers: ["A forest", "In a tree", "By a pirate bird", "don't live"],
    correctAnswer: "In a tree"
  },
  {
    question: "Why am I always tired?",
    answers: ["Just go to sleep", "I don't know", "Check question 5", "other"],
    correctAnswer: "I don't know"
  },
  {
    question: "Synax?",
    answers: ["yes", "yeaa", "no", "yea"],
    correctAnswer: "yea"
  },
  {
    question: "Top Beverage?",
    answers: ["Coke before 1903", "Water", "Coke after 1903"],
    correctAnswer: "Water"
  },
  {
    question: "Did good?",
    answers: ["yes", "no", "Doubt it", "maybe"],
    correctAnswer: "Doubt it"
  }
];

var correct = 0
var wrong = 0

// make resart game function
var game = {
  startGame: function() {

   
    game.renderQuestion();

    $(".answers").on("click", game.handleSubmit);
  
    game.timer();
  },
  currentQuestion: 0,
  timer: function() {
    var timeLeft = 10;

    $("#timer").html(timeLeft);

    losingTime = setInterval(function() {
      if (timeLeft > 0) {
        timeLeft--;
        $("#timer").html(timeLeft);
      } else {
        clearInterval(losingTime)
        game.nextQuestion()
      }
    }, 1 * 1000);
  },
  nextQuestion: function() {
    if (this.currentQuestion < Questions.length -1) {
      this.currentQuestion++;
      this.timer();
      this.renderQuestion();
    } else {
      game.setUp()
      $('#timer').html("")
      $('.score').html(`You got ${correct} out of ${Questions.length}`)
    }
  },
  renderQuestion: function() {
    var newQuestion = Questions[this.currentQuestion];
    $("#question").html(newQuestion.question);
    $('#answers').html("")

    for (var i = 0; i < newQuestion.answers.length; i++) {
      $("#answers").append(`<button class="answers" data-answer="${newQuestion.answers[i]}">${newQuestion.answers[i]}</button><br>`);
    }
    this.answers()
  },
  handleSubmit: function(event) {
    correctAnswer = Questions[game.currentQuestion].correctAnswer;
    selectedAnswer = $(event.target).data("answer");

    if (correctAnswer === selectedAnswer) {
      game.emptyPage();
      correct++
    } else {
      game.emptyPage();
      wrong++
    }
  },
  emptyPage: function() {
   this.setUp()
    this.nextQuestion();
  }, 
  setUp: function () {
    $("#question").html("");
    $("#answers").html("");
    clearInterval(losingTime);
  },
  answers: function() {

  $(".answers").on("click", game.handleSubmit);
  }
};