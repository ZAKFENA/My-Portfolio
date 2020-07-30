var btn1El = document.getElementById("btn1");
var btn2El = document.getElementById("btn2");
var btn3El = document.getElementById("btn3");
var btn4El = document.getElementById("btn4");
var questionEl = document.getElementById("question");
var headerEl = document.getElementById("header");
var answerResultEl = document.getElementById("answerResult");
var btnStartEl = document.getElementById("startBtn");
var startParagraphEl = document.getElementById("startParagraph");
var startHeaderEl = document.getElementById("startHeader");
var timerEl = document.getElementById("timer");
var scoreInitialsEl = document.getElementById("scoreInitials");
var finalScoreEl = document.getElementById("finalScore");
var questionPageEl = document.getElementById("questionPage");
var i = 0;
var scoreCardEl = document.getElementById("scoreCard");
var timeLeft = 60;
var btnSectionEl = document.getElementById("btnSection");
var scoreSubmitEl = document.getElementById("scoreSubmit");
var btnScoreSaveEl = document.getElementById("btnScoreSave");
var btnHighScoresEl = document.getElementById("btnHighScores");
var scoresListEl = document.getElementById("scoresList");

var questions = [
  {
    header: "Question 1",
    question: "Commonly used data types DO NOT include:",
    btn1El: "strings",
    btn2El: "booleans",
    btn3El: "alerts",
    btn4El: "numbers",
    correct: "alerts",
  },

  {
    header: "Question 2",
    question: "The condition in an if/else statement is enclosed with _____.",
    btn1El: "quotes",
    btn2El: "curly brackets",
    btn3El: "parenthesis",
    btn4El: "square brackets",
    correct: "quotes",
  },

  {
    header: "Question 3",
    question: "Arrays in JavaScript can be be used to store ____.",
    btn1El: "numbers and strings",
    btn2El: "other ways",
    btn3El: "booleans",
    btn4El: "all of the above",
    correct: "all of the above",
  },

  {
    header: "Question 4",
    question:
      "String value must be enclosed within ____ when being assinged to variables",
    btn1El: "commas",
    btn2El: "curly brackets",
    btn3El: "quotes",
    btn4El: "parenthesis",
    correct: "parenthesis",
  },

  {
    header: "Question 5",
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    btn1El: "JavaScript",
    btn2El: "terminal/bash",
    btn3El: "for length",
    btn4El: "console log",
    correct: "console log",
  },
];

// Function to display first page

firstPage();

function firstPage() {
  btnSectionEl.style.visibility = "hidden";
  answerResultEl.style.visibility = "hidden";
  headerEl.style.visibility = "visible";
  questionEl.style.visibility = "visible";
  headerEl.textContent = "Java Code Quiz";
  scoreSubmitEl.style.visibility = "hidden";
}

// Timer function
function setTime() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time left: " + timeLeft + " Seconds";

    if (timeLeft <= 0 || i == questions.length - 1) {
      clearTimeout(timerInterval);
      timerEl.textContent = "Time Left: 0 Seconds";
    }
  }, 1000);
}

// Function starts Quiz
function startQuiz() {
  scoresListEl.style.visibility = "hidden";
  btnSectionEl.style.visibility = "visible";
  answerResultEl.style.visibility = "visible";
  headerEl.textContent = questions[0].header;
  questionEl.textContent = questions[0].question;
  btn1El.textContent = questions[0].btn1El;
  btn2El.textContent = questions[0].btn2El;
  btn3El.textContent = questions[0].btn3El;
  btn4El.textContent = questions[0].btn4El;
  i = 0;
}

btnStartEl.addEventListener("click", function () {
  setTime();
  startQuiz();
});

// addEventsListeners for the multiple choice buttons
btn1El.addEventListener("click", function () {
  if (i == questions.length - 1) {
    renderScore();
    clearInterval(timerInterval);
  } else if (questions[i].correct === questions[i].btn1El) {
    CorrectAlert();
    i++;
    renderNext();
  } else {
    timeLeft = timeLeft - 10;
    wrongAlert();
    i++;
    renderNext();
  }
});

btn2El.addEventListener("click", function () {
  if (i == questions.length - 1) {
    renderScore();
    clearInterval(timerInterval);
  } else if (questions[i].correct === questions[i].btn2El) {
    CorrectAlert();
    i++;
    renderNext();
  } else {
    timeLeft = timeLeft - 10;
    wrongAlert();
    i++;
    renderNext();
  }
});
btn3El.addEventListener("click", function () {
  if (i == questions.length - 1) {
    renderScore();
    clearInterval(timerInterval);
  } else if (questions[i].correct === questions[i].btn3El) {
    CorrectAlert();
    i++;
    renderNext();
  } else {
    timeLeft = timeLeft - 10;
    wrongAlert();
    i++;
    renderNext();
  }
});
btn4El.addEventListener("click", function () {
  if (i == questions.length - 1) {
    renderScore();
    clearInterval(timerInterval);
  } else if (questions[i].correct === questions[i].btn4El) {
    CorrectAlert();
    i++;
    renderNext();
  } else {
    timeLeft = timeLeft - 10;
    wrongAlert();
    i++;
    renderNext();
  }
});

// Functions after choosing answers
function wrongAlert() {
  var countdown = 2;
  var alertInterval = setInterval(function () {
    countdown--;
    answerResultEl.textContent = "Wrong";

    if (countdown <= 0) {
      answerResultEl.textContent = "";
      clearInterval(alertInterval);
    }
  }, 500);
}
function CorrectAlert() {
  var countdown = 2;
  var alertInterval = setInterval(function () {
    countdown--;
    answerResultEl.textContent = "Correct";

    if (countdown < 0) {
      answerResultEl.textContent = "";
      clearInterval(alertInterval);
    }
  }, 500);
}

function renderNext() {
  headerEl.textContent = questions[i].header;
  questionEl.textContent = questions[i].question;
  btn1El.textContent = questions[i].btn1El;
  btn2El.textContent = questions[i].btn2El;
  btn3El.textContent = questions[i].btn3El;
  btn4El.textContent = questions[i].btn4El;
}

function renderScore() {
  btnSectionEl.style.visibility = "hidden";
  answerResultEl.style.visibility = "hidden";
  headerEl.style.visibility = "visible";
  questionEl.style.visibility = "visible";
  scoreSubmitEl.style.visibility = "visible";
  headerEl.textContent = "All is Done!!";
  questionEl.textContent =
    "Enter you initials to save your score. Your Score is " + timeLeft;
}

btnScoreSaveEl.addEventListener("click", function (event) {
  // event.preventDefault();
  scoreSubmitEl.style.visibility = "hidden";
  questionEl.style.visibility = "hidden";
  saveScore();
});

function saveScore() {
  var previousScores = localStorage.getItem("scoreInitials");
  if (previousScores) {
    localStorage.setItem(
      "scoreInitials",
      previousScores + scoreInitialsEl.value + "-" + timeLeft + ","
    );
    questionEl.textContent(scoreInitialsEl.value);
  } else {
    localStorage.setItem(
      "scoreInitials",
      scoreInitialsEl.value + "-" + timeLeft + ","
    );
    questionEl.textContent("Your Score List" + scoreInitialsEl.value);
  }
}

function viewScore() {
  var scoreRender = localStorage.getItem("scoreInitials");
  scoresListEl.textContent = scoreRender.split(",");
}

btnHighScoresEl.addEventListener("click", function () {
  viewScore();
});
