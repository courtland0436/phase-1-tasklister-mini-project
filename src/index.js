// Select the form immediately
const form = document.getElementById("create-task-form");

// Add submit event listener
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the input value by ID (Mocha expects this)
  const taskDescription = document.getElementById("new-task-description").value;

  // Add task to list
  buildToDo(taskDescription);

  // Clear input
  form.reset();
});

// Function to add task to list
function buildToDo(task) {
  const taskList = document.getElementById("tasks");

  const li = document.createElement("li");
  li.textContent = task;

  taskList.appendChild(li);
}
