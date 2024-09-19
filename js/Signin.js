const questionSound = document.getElementById("question-sound"); // New audio element for question sound


document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const startBtn = document.getElementById('start-btn');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            splashScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
        });
    }
});



nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});