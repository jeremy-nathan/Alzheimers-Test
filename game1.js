// import { endTest } from 'add & subtract/end.js';
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "What is 20 + 0 = ?",
    choice1: "20",
    choice2: "1",
    choice3: "22",
    choice4: "98",
    answer: 1
  },
  {
    question:"What is 160 + 5 = ?",
    choice1: "167",
    choice2: "198",
    choice3: "165",
    choice4: "199",
    answer: 3
  },
  {
    question: "What is 120 - 5 = ?",
    choice1: "115",
    choice2: "201",
    choice3: "117",
    choice4: "99",
    answer: 1
  },

  {
    question: " What is 199 - 98 = ?",
    choice1: "109",
    choice2: "101",
    choice3: "199",
    choice4: "98",
    answer: 2
  },

  {
    question: " What is 99 + 87 = ?",
    choice1: "102",
    choice2: "122",
    choice3: "186",
    choice4: "101",
    answer: 3
  },

  {
    question: "What is 44 + 98 = ?",
    choice1: "142",
    choice2: "89",
    choice3: "5",
    choice4: "54",
    answer: 1
  },
  {
    question: "What is 17 - 3 = ?",
      choice1: "8",
      choice2: "14",
      choice3: "15",
      choice4: "20",
      answer: 2
  },
  {
    question: "What is 100 + 1 - 22 = ?",
      choice1: "93",
      choice2: "79",
      choice3: "7",
      choice4:"110",
      answer: 2
  },
  {
    question: "76 - 43 =",
      choice1: "42",
      choice2: "52",
      choice3: "33",
      choice4: "103",
      answer: 3
  },
  {
    question: "23 - 7 =",
      choice1: "16",
      choice2: "11",
      choice3: "22",
      choice4: "30",
      answer: 1
  },
  {
    question: "70 + 40 =",
      choice1: "110",
      choice2: "101",
      choice3: "191",
      choice4:"111",
      answer: 1
  }
  // {
  //   question: "4 + 0 =",
  //     choice1: "9",
  //     choice2: "4",
  //     choice3: "99",
  //     choice4: "0",
  //     answer: 2
  // },
  // {
  //   question: "44 - 22 =",
  //     choice1: "41",
  //     choice2: "56",
  //     choice3: "22",
  //     choice4: "66"
  //     answer: 3
  // },
  // {
  //   question: "5 + 5 =",
  //     choice1: "2",
  //     choice2: "10",
  //     choice3: "42",
  //     choice4: "25",
  //     answer: 2
  // },
  // {
  //   question: "99 - 41 =",
  //     choice1: "58",
  //     choice2: "92",
  //     choice3: "78",
  //     choice4: "55",
  //     answer: 1
  // }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("add & subtract/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};
// document.getElementById("end").onclick=endTest()
startGame();
