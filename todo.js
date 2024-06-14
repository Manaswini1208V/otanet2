document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const input = document.querySelector('form input[type="text"]');
  const prioritySelect = document.querySelector('#priority');
  const categorySelect = document.querySelector('#category');
  const dueDateInput = document.querySelector('#due-date');
  const tasksContainer = document.querySelector('.tasks');

  let todos = [];

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = {
      text: input.value,
      priority: prioritySelect.value,
      category: categorySelect.value,
      dueDate: dueDateInput.value,
      id: new Date().getTime(),
      completed: false
    };

    todos.push(todo);
    e.target.reset();
    displayTodos();
  });

  const displayTodos = () => {
    tasksContainer.innerHTML = '';

    todos.forEach((todo) => {
      const taskEl = document.createElement('div');
      const textEl = document.createElement('p');
      const priorityEl = document.createElement('span');
      const categoryEl = document.createElement('span');
      const dueDateEl = document.createElement('span');
      const completeButton = document.createElement('button');

      taskEl.classList.add('task');
      if (todo.completed) {
        taskEl.classList.add('complete');
      }

      completeButton.classList.add('complete');

      textEl.textContent = todo.text;
      priorityEl.textContent = todo.priority;
      categoryEl.textContent = todo.category;
      dueDateEl.textContent = todo.dueDate;
      completeButton.textContent = 'Complete';

      completeButton.addEventListener('click', () => {
        todo.completed = !todo.completed;
        displayTodos();
      });

      taskEl.appendChild(textEl);
      taskEl.appendChild(priorityEl);
      taskEl.appendChild(categoryEl);
      taskEl.appendChild(dueDateEl);
      taskEl.appendChild(completeButton);
      tasksContainer.appendChild(taskEl);
    });
  };
});
