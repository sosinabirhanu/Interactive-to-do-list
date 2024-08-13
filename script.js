// script.js

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-btn");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // Function to add a new task
  function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
      const listItem = document.createElement("li");

      // Create the task text element
      const task = document.createElement("span");
      task.textContent = taskText;
      task.addEventListener("click", toggleComplete);

      // Create the delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", deleteTask);

      // Add the text and button to the list item
      listItem.appendChild(task);
      listItem.appendChild(deleteBtn);

      // Add the list item to the to-do list
      todoList.appendChild(listItem);

      // Clear the input field
      todoInput.value = "";
    }
  }

  // Function to toggle task completion
  function toggleComplete(event) {
    const task = event.target;
    task.parentElement.classList.toggle("completed");
  }

  // Function to delete a task
  function deleteTask(event) {
    const listItem = event.target.parentElement;
    todoList.removeChild(listItem);
  }

  // Event listener for the add button
  addBtn.addEventListener("click", addTask);

  // Allow adding tasks by pressing Enter
  todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
