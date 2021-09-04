// ex14: club everything to make the game

let readlineSync = require("readline-sync");
let userName = readlineSync.question("What's your name ? ");
console.log("Welcome " + userName + " to the F.R.I.E.N.D.S Quiz ?");

let score = 0;

function playGame(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right Answer");
    score = score + 1;
  } else {
    console.log("Wrong Answer");
    score = score;
  }
  console.log("Your score is " + score);
}
// Making an array of objects containing key value pairs of questions and answers
var qnaList = [
  {
    question: "Which character has a twin? ",
    answer: "Phoebe",
  },
  {
    question: "What’s Phoebe’s sister’s name? ",
    answer: "Ursula",
  },
  {
    question: "What was the name of the millionaire Monica dated? ",
    answer: "Pete",
  },
  {
    question: "Who got stuck in a pair of leather pants? ",
    answer: "Ross",
  },
  {
    question: "Who hates Thanksgiving? ",
    answer: "Chandler",
  },
];
//Making a for loop & calling function with differnt questions and answers

for (let i = 0; i < qnaList.length; i++) {
  playGame(qnaList[i].question, qnaList[i].answer);
}

console.log("Your final score is " + score);
