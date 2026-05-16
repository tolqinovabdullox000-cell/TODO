const input = document.getElementById("todoInput");
const btn = document.getElementById("addBtn");
const container = document.getElementById("todoContainer");

function toggleComplete(spanElement) {
  spanElement.classList.toggle("completed");
}

function createTodoItem(text) {
  const newItem = document.createElement("div");
  newItem.className = "todo-item";

  // Murakkab createElement'lar o'rniga bitta oson HTML matn
  newItem.innerHTML = `
    <span class="todo-text">${text}</span>
    <div class="item-btns">
      <button class="check-btn">✓</button>
      <button class="delete-btn">✕</button>
    </div>
  `;

  const span = newItem.querySelector(".todo-text");
  const checkBtn = newItem.querySelector(".check-btn");
  const deleteBtn = newItem.querySelector(".delete-btn");

  span.onclick = function () {
    toggleComplete(span);
  };
  checkBtn.onclick = function () {
    toggleComplete(span);
  };
  deleteBtn.onclick = function () {
    newItem.remove();
  };

  container.appendChild(newItem);
}

function handleAdd() {
  createTodoItem(input.value);
  input.value = "";
}

btn.onclick = handleAdd;

input.onkeypress = function (event) {
  let isEnter = event.key == "Enter";
  isEnter && handleAdd();
};
