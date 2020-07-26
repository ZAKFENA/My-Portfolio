var btn1El = document.getElementById("btn1");
var btn2El = document.getElementById("btn2");
var btn3El = document.getElementById("btn3");
var btn4El = document.getElementById("btn4");
var questionEl;

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    btn1El: "strings",
    btn2El: "booleans",
    btn3El: "alerts",
    btn4El: "numbers",
    correct: "btn3El",
  },

  {
    question: "The condition in an if/else statement is enclosed with _____.",
    btn1El: "quotes",
    btn2El: "curly brackets",
    btn3El: "parenthesis",
    btn4El: "square brackets",
    correct: "btn2El",
  },

  {
    question: "Arrays in JavaScript can be be used to store ____.",
    btn1El: "numbers and strings",
    btn2El: "other ways",
    btn3El: "booleans",
    btn4El: "all of the above",
    correct: "btn4El",
  },

  {
    question:
      "String value must be enclosed within ____ when being assinged to variables",
    btn1El: "commas",
    btn2El: "curly brackets",
    btn3El: "quotes",
    btn4El: "parenthesis",
    correct: "btn3El",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    btn1El: "JavaScript",
    btn2El: "terminal/bash",
    btn3El: "for length",
    btn4El: "console log",
    correct: "btn4El",
  },
];

btn1El.textContent = questions[0].btn1El;
btn2El.textContent = questions[0].btn2El;
btn3El.textContent = questions[0].btn3El;
btn4El.textContent = questions[0].btn4El;

document.appendChild(btn1El);
document.appendChild(btn2El);
document.appendChild(btn3El);
document.appendChild(btn4El);
