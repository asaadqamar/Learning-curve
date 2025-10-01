document.addEventListener("DOMContentLoaded", () => {
  const startQuizBtn = document.getElementById("start-btn");
  const questionContainer = document.getElementById("question-container");
  const diaplayQuestion = document.getElementById("question");
  const choiceContainer = document.getElementById("answer-buttons");
  const nextQuestionBtn = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const resultScore = document.getElementById("score");
  const restratQuiz = document.getElementById("restart-btn");

  const Questions = [
    {
      question: "What does AI stand for?",
      choice: [
        "Artificial Intelligence",
        "Automated Interface",
        "Advanced Input",
      ],
      answer: "Artificial Intelligence",
    },
    {
      question: "Which of the following is a common AI programming language?",
      choice: ["Python", "HTML", "CSS"],
      answer: "Python",
    },
    {
      question: "What type of learning is used in training neural networks?",
      choice: ["Supervised Learning", "Copy-Paste Learning", "Manual Testing"],
      answer: "Supervised Learning",
    },
  ];

  let currentIndex = 0;
  let score = 0;

  startQuizBtn.addEventListener("click", showQuiz);
  nextQuestionBtn.addEventListener("click", nextQuestion);
  restratQuiz.addEventListener("click", restartQuiz);

  function showQuiz() {
    startQuizBtn.classList.add("hide");
    questionContainer.classList.remove("hide");
    showQuestion();
  }

  function showQuestion() {
    nextQuestionBtn.classList.add("hide");
    diaplayQuestion.textContent = Questions[currentIndex].question;
    choiceContainer.innerHTML = "";
    Questions[currentIndex].choice.forEach((c) => {
      const showChoice = document.createElement("button");
      showChoice.classList.add("btn");
      showChoice.textContent = c;
      choiceContainer.appendChild(showChoice);
      showChoice.addEventListener("click", () => selectAnswer(c, showChoice));
    });
  }

  function selectAnswer(c, showChoice) {
    const allchoices = document.querySelectorAll("button.btn");
    allchoices.forEach((choice) => {
      choice.classList.remove("active");
    });
    showChoice.classList.add("active");
    const correctAnswer = Questions[currentIndex].answer;
    if (c === correctAnswer) {
      score++;
    }
    nextQuestionBtn.classList.remove("hide");
  }

  function nextQuestion() {
    currentIndex++;
    if (currentIndex == Questions.length) {
      showResult();
    } else {
      showQuestion();
    }
  }

  function showResult() {
    questionContainer.classList.add("hide");
    resultContainer.classList.remove("hide");
    resultScore.textContent = `You scored ${score} out of ${Questions.length}`;
  }

  function restartQuiz() {
    resultContainer.classList.add("hide");
    currentIndex = 0;
    score = 0;
    showQuiz();
  }
});
