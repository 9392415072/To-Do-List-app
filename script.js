// Select elements
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // Do nothing if input is empty

    // Create a new list item for the task
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${taskText} <span class="delete-btn" onclick="deleteTask(this)">x</span>
    `;
    
    // Add the new list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
}

// Delete a task
function deleteTask(task) {
    const taskItem = task.parentNode;
    taskList.removeChild(taskItem);
}
