const todoList = [];

renderList();

function renderList() {

  let todoListHTML = ``;
  for (let i = 0; i < todoList.length; i++) {
    let html = `<p>${todoList[i]}</p>`;
    todoListHTML += html;
  }
  let container = document.querySelector('.js-todo-list');
  container.innerHTML = todoListHTML;

}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);
  inputElement.value = '';

  renderList();

}