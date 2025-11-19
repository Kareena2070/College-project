📌 To-Do List Application (DOM Manipulation – JavaScript)

A simple browser-based task manager application that allows users to add, complete, and delete tasks. This project demonstrates practical use of:

• HTML structure

• CSS for UI styling

• JavaScript for DOM operations

• Event handling with ES6+ features

🧾 Project Overview

This project is part of BCA201 – Web Development Frontend 2 (JS + React) Lab Work.

It teaches:

• How browsers represent pages using the Document Object Model (DOM)

• How JavaScript can dynamically modify elements

• How UI responds to user interactions in real time

No frameworks are used. Everything is done using pure JavaScript.



🔧 How the Application Works (Summary)

1. User types a task in the text box

2. Clicking Add Task inserts the task into the list

3. Clicking a task marks it as completed

4. Cicking the delete (X) button removes the task

5. All updates happen instantly without page reload

The program uses event handlers to detect user actions, updates the DOM elements, and re-renders the interface in real time.

📄 Code Explanation
1️⃣ HTML (index.html)

HTML is the structure of the application.
It provides elements that JavaScript modifies dynamically.

<div id="todo-container">
    <h2>To-Do List</h2>

    <input type="text" id="task-input" placeholder="Enter a new task">
    <button id="add-btn">Add Task</button>

    <ul id="task-list"></ul>
</div>

Key Elements
Element---------------------	Purpose
task-input ------------------	Accepts the user’s task text
add-btn ----------------------	Button to add task
task-list	<ul> where tasks (<li>) are inserted dynamically

JavaScript will create, update, and remove list items inside task-list.

2️⃣ CSS (style.css)

CSS provides simple styling that:

• Aligns the UI nicely

• Highlights tasks

• Makes completed tasks different

• Styles delete buttons

Key parts:

li.completed {
    text-decoration: line-through;
    opacity: 0.6;
}


When a task is completed, JavaScript adds the .completed class, changing its visual appearance.

3️⃣ JavaScript (app.js)

This file handles all the logic: adding tasks, marking them complete, and deleting them.

Step 1: Selecting Elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");


We store references to HTML elements so we can modify them later.

Step 2: Adding a Task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;


Explanation:

1. Read the input text

2. Stop if the field is empty

3. Create a new <li> containing the task

Step 3: Mark Task as Complete
li.addEventListener("click", () => {
    li.classList.toggle("completed");
});


Clicking a task triggers:

• Add/remove .completed class
• Causes strikethrough and faded look

Step 4: Adding Delete Button
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "X";
deleteBtn.className = "delete-btn";


When clicked:

deleteBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
};

Why stopPropagation()?

Because clicking the delete button would also trigger the click event on the <li> (marking the task completed).
This prevents that.

Step 5: Displaying the Task
li.appendChild(deleteBtn);
taskList.appendChild(li);
taskInput.value = "";


This:

• Inserts the delete button inside the <li>

• Adds the <li> to the task list

• Clears the input box for the next task

🔁 Full Logical Flow
User types a task
        ↓
Clicks "Add Task"
        ↓
New <li> is created
        ↓
<li> inserted into <ul>
        ↓
Click on <li> toggles complete state
        ↓
Click delete removes the <li>

🧠 DOM Concepts Used
Concept	Description
document.getElementById()---------	Selects elements
addEventListener()----------------	Detects user actions
.createElement()------------------	Builds new dynamic elements
.appendChild()--------------------	Inserts items into the DOM
.classList.toggle()---------------	Adds/removes classes
.remove()-------------------------	Deletes elements

These are core building blocks of interactive web pages.

🎯 Learning Outcomes

Students understand:

• How to read and modify the DOM

• How UI updates without reloading the page

• How event-driven programming works in the browser

• Creating small applications with pure JavaScript

• Real-life usage of list management logic


🚀 Possible Enhancements

The application can be extended with:

• LocalStorage to save tasks even after reload

• Edit task option

• Priority tags (High/Medium/Low)

• Sorting (Pending first, Completed last)

• Animations for add/remove

📌 Conclusion

This project demonstrates real-world usage of JavaScript for interacting with the DOM, handling events, dynamically modifying webpage content, and building user-friendly interfaces without frameworks.

The To-Do List is simple but highlights all core concepts needed for modern front-end development.