//Game with all Array exercise 
//https://replit.com/@ShreyasDevarkar/Lecture1Game?embed=1&output=1

var readlineSync = require("readline-sync")

var name = readlineSync.question("What is your name? ")
console.log("Welcome to Batman Quiz " +name);
console.log("-------------------------");

var score = 0;


function playgame(question, answer)
{
  var useranswer = readlineSync.question(question);
  if(answer === useranswer)
  {
    console.log("Your answer is correct");
    score = score + 1;
    console.log("Your score is : " +score);
  }
  else
  {
    console.log("Your answer is incorrect");
    score = score - 1;
    console.log("Your score is : " +score);
  }
  console.log("-------------------------");
}


var questions =
[
  {
    question: "What is batman's Real name? ",
    answer: "Bruce Wayne",
  },


  {
    question: "What is batman's Vehicle called? ",
    answer: "Batmobile",
  },


  {
    question: "What is batman's best movie name? ",
    answer: "Dark Knight Rises",
  },


  {
    question: "Who is batman's counter-part? ",
    answer: "Robin",
  }
]

// var arraygame = ["questionone","questiontwo","questionthree","questionfour"];

for(var i=0;i<questions.length;i++)
{
  var currentquestion = questions[i];
  playgame(currentquestion.question, currentquestion.answer);
}

console.log("Thanyou for playing ! ")