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
    question:
      "What is 160 + 5 = ?",
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
  }




];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

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
    return window.location.assign("file:///C:/Users/User/Desktop/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript-master/Quiz%20App%20Master/end.html");
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

startGame();
