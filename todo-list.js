const todoList = [];

renderList();

function renderList() {

  let todoListHTML = ``;
  for (let i = 0; i < todoList.length; i++) {

    const { name, date } = todoList[i];

    let html = `
    <p>
    ${name} ${date}
    <button onClick="
    todoList.splice(${i},1);
    renderList();
    ">Delete</button>
    </p>`;
    todoListHTML += html;
  }
  let container = document.querySelector('.js-todo-list');
  container.innerHTML = todoListHTML;

}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateElement = document.querySelector('.js-date-input');
  const date = dateElement.value;

  todoList.push({
    name,
    date
  });

  inputElement.value = '';

  renderList();

}