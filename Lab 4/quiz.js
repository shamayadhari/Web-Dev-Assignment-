const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "What programming language runs in a web browser?", answer: "javascript" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "What does CSS stand for?", answer: "cascading style sheets" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" }
];

function runQuiz() {
  let score = 0;

  alert("Welcome to the JavaScript Quiz! Let's begin.");

  for (let i = 0; i < quizQuestions.length; i++) {
    const currentQuestion = quizQuestions[i];

    let userAnswer = prompt(currentQuestion.question);

    if (userAnswer === null) {
      userAnswer = "";
    }

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === currentQuestion.answer) {
      score++;
      alert("Correct! 🎉");
    } else {
      alert(`Incorrect ❌\nThe correct answer is: ${currentQuestion.answer}`);
    }
  }

  alert(`Quiz Complete! You scored ${score} out of ${quizQuestions.length}.`);
}

runQuiz();
