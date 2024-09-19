// Get references to the audio elements
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const scoreSound = document.getElementById("score-sound");
const questionSound = document.getElementById("question-sound"); // New audio element for question sound

const questions = [


  {
    question: "Are you ready to take the quiz? if you are click IM READY to start the quiz ?",
    answers: [
      { text: "IN READY", correct: true }
    ]
  },


  {
    question: "Who is the recent president of the Republic of the Philippines?",
    answers: [
      { text: "Rodrigo Duterte", correct: false },
      { text: "Ferdinand Marcos Sr", correct: false },
      { text: "Alice Guo", correct: false },
      { text: "Ferdinand Marcos Jr", correct: true },
    ]
  },
  // Add more questions here if needed

  {
    question: "Who the developer of this app?",
    answers: [
      { text: "James Yan ", correct: false },
      { text: "Ferdinand Gou", correct: false },
      { text: "Christian Vinas", correct: true },
      { text: "Chan", correct: false },
    ]
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  nextButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  questionSound.play().catch(function(error) {
    console.error('Error playing question sound:', error);
  });

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
    correctSound.play(); // Play correct sound
  } else {
    selectBtn.classList.add("incorrect");
    wrongSound.play(); // Play wrong sound
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true; // Disable all buttons after selection
  });

  nextButton.style.display = "block"; // Show the "Next" button after answer selection
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";

  scoreSound.play(); // Play score reveal sound
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});


startQuiz();
