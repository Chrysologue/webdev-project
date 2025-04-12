// Get elements
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Load tasks from localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Function to render tasks
function renderTasks() {
  todoList.innerHTML = ''; // Clear the list before re-rendering
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.classList.toggle('completed', todo.completed);

    li.innerHTML = `
      <span class="todo-text">${todo.text}</span>
      <button class="delete" data-index="${index}">Delete</button>
    `;

    // Event listener to mark task as completed
    li.addEventListener('click', () => {
      todo.completed = !todo.completed;
      updateLocalStorage();
      renderTasks();
    });

    // Event listener to delete task
    li.querySelector('.delete').addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent triggering the click event on the li
      todos.splice(index, 1);
      updateLocalStorage();
      renderTasks();
    });

    todoList.appendChild(li);
  });
}

// Function to update localStorage
function updateLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Add task functionality
addTodoBtn.addEventListener('click', () => {
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    todos.push({ text: todoText, completed: false });
    todoInput.value = ''; // Clear input field
    updateLocalStorage();
    renderTasks();
  }
});

// Initial render
renderTasks();
