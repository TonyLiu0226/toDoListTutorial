// --- DOM Elements ---
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const taskList = document.getElementById("taskList");

// --- State ---
let tasks = loadTasks();

// --- Initial Render ---
renderTasks();

// --- Events ---
addBtn.addEventListener("click", handleAddTask);

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleAddTask();
});

clearBtn.addEventListener("click", () => {
  tasks = [];
  saveTasks();
  renderTasks();
});

// --- Functions ---
function handleAddTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const newTask = {
    id: crypto.randomUUID(), // simple unique id
    text,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  taskInput.value = "";
  taskInput.focus();
}

function renderTasks() {
  taskList.innerHTML = "";

  for (const task of tasks) {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed"); //optional functionality, crosses out task item on completion

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;

    // Toggle complete on click
    span.addEventListener("click", () => {
      task.completed = !task.completed; //if implement completion functionality
      saveTasks();
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
}

function saveTasks() { //optional functionality to persist tasks
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() { //optional functionality to load tasks from localStorage
  const raw = localStorage.getItem("tasks");
  return raw ? JSON.parse(raw) : [];
}
