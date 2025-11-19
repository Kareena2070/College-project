let questions = [];
let currentIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

// Fetch questions from API
async function loadQuestions() {
    const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
    const data = await res.json();
    questions = data.results;
    showQuestion();
}

// Display a question
function showQuestion() {
    const current = questions[currentIndex];
    const incorrect = current.incorrect_answers;
    const correct = current.correct_answer;

    // Combine & shuffle answers
    const options = [...incorrect, correct].sort(() => Math.random() - 0.5);

    // Fill UI
    questionElement.innerHTML = current.question;
    answersContainer.innerHTML = "";
    nextBtn.disabled = true;

    options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.innerHTML = option;

        btn.onclick = () => selectAnswer(option, correct, btn);
        answersContainer.appendChild(btn);
    });
}

// Handle answer selection
function selectAnswer(chosen, correct, buttonEl) {
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(btn => btn.disabled = true);

    if (chosen === correct) {
        buttonEl.style.background = "#8fdf87";
        score++;
    } else {
        buttonEl.style.background = "#ff9e9e";
    }

    nextBtn.disabled = false;
}

// Show next question or final score
nextBtn.onclick = () => {
    currentIndex++;

    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

// Show final score
function showScore() {
    questionElement.innerHTML = `Quiz Complete! <br> Your Score: ${score}/${questions.length}`;
    answersContainer.innerHTML = "";
    nextBtn.style.display = "none";
}

loadQuestions();
