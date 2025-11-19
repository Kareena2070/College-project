📌 Interactive Quiz – JavaScript + API + ES6

A simple web-based quiz that fetches questions from a public API and displays them one by one. Users select answers, receive feedback, and the final score is shown at the end.



1️⃣ Project Overview

This project demonstrates:

 • Core JavaScript fundamentals

 • DOM manipulation

 • Fetch API

 • ES6 syntax

 • Event handling

 • Dynamic UI updates

The quiz fetches 5 questions from the Open Trivia API and displays them one by one. The user selects an answer, moves to the next question, and finally sees their score.

2️⃣ How the Application Works – Step by Step
Step 1: Load the Page

When the webpage loads, loadQuestions() runs automatically.

This function:

1. Fetches questions from API

2. Stores them in a variable

3. Calls showQuestion() to display the first question

3️⃣ Code Explanation
📌 index.html

HTML acts as the structure of the quiz. No logic is here—only containers where JavaScript will insert data.

<div id="quiz-container">
    <h2 id="question">Loading...</h2>
    <div id="answers"></div>
    <button id="next-btn" disabled>Next</button>
</div>

What Happens Here?

 • #question displays the current question

 • #answers will contain answer buttons created dynamically

 • Next button moves to the next question

JavaScript will update these elements at runtime.

📌 style.css

Styling improves readability but is simple and beginner-friendly.

Key points:

 • #quiz-container centers the quiz box

 • .answer-btn styles clickable answer buttons

 • Background color changes to green/red for correct/incorrect

📌 app.js

This is where all the logic happens.

4️⃣ Variables
let questions = [];
let currentIndex = 0;
let score = 0;


Explanation:

 • questions = stores all fetched questions

 • currentIndex = which question is currently shown

 • score = count of correct answers

5️⃣ Fetching Questions
async function loadQuestions() {
    const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
    const data = await res.json();
    questions = data.results;
    showQuestion();
}

How It Works

1. fetch() gets data from API

2. await waits until data is received

3. JSON is stored in questions

4. showQuestion() is called to display first question

This is modern ES6 async/await.

6️⃣ Displaying a Question
function showQuestion() {
    const current = questions[currentIndex];
    const incorrect = current.incorrect_answers;
    const correct = current.correct_answer;

    const options = [...incorrect, correct].sort(() => Math.random() - 0.5);

    questionElement.innerHTML = current.question;
    answersContainer.innerHTML = "";
    nextBtn.disabled = true;
}

Breakdown

 • current = current question object

 • We combine correct + incorrect answers

 • sort(() => Math.random() - 0.5) shuffles options

 • Clear old answers and disable the Next button

Then we create answer buttons:

options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.innerHTML = option;

    btn.onclick = () => selectAnswer(option, correct, btn);
    answersContainer.appendChild(btn);
});

What happens here?

 • For each option, a <button> is created

 • Clicking the button triggers selectAnswer()

 • Buttons are dynamically inserted into the page

7️⃣ Handling Answer Selection
function selectAnswer(chosen, correct, buttonEl) {
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(btn => btn.disabled = true);


 • When user clicks an answer, all buttons are disabled

 • This prevents changing answers

if (chosen === correct) {
    buttonEl.style.background = "#8fdf87";
    score++;
} else {
    buttonEl.style.background = "#ff9e9e";
}


 • If user is correct → green background and score increases

 • If wrong → red background

Finally:

nextBtn.disabled = false;


 • Now user can move to the next question

8️⃣ Moving to the Next Question
nextBtn.onclick = () => {
    currentIndex++;

    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

Explanation

 • currentIndex increases

 • If more questions remain → show next

 • If not → show final score

9️⃣ Displaying Final Score
function showScore() {
    questionElement.innerHTML = `Quiz Complete! <br> Your Score: ${score}/${questions.length}`;
    answersContainer.innerHTML = "";
    nextBtn.style.display = "none";
}

Final Screen

 • Shows total score

 • Clears old buttons

 • Hides the Next button

The quiz is now complete.

🔁 Logical Flow Chart
loadQuestions()
       ↓
API fetch success
       ↓
showQuestion()
       ↓
User selects answer
       ↓
selectAnswer()
       ↓
nextBtn → next question
       ↓
All questions finished?
       ↓ yes / no
showScore() or showQuestion()

