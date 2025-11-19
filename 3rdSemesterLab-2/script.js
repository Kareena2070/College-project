const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark as completed when clicked
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        li.remove();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});
