// STEP 1: Select elements from the page
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// STEP 2: Listen for button click
addBtn.addEventListener("click", addTask);

// STEP 3: Create the addTask function
function addTask() {
  // Get the input value
  const taskText = taskInput.value;

  // TODO: Prevent empty tasks

  // TODO: Create a new <li> element

  // TODO: Set the text of the <li>

  // TODO: Add click behavior to remove the task

  // TODO: Add the <li> to the task list

  // Clear the input
  taskInput.value = "";
}
