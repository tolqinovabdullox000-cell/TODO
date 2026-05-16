const input = document.getElementById("todoInput");
const btn = document.getElementById("addBtn");
const container = document.getElementById("todoContainer");

let editTarget = null;

function createTodoItem(text) {
  const newItem = document.createElement("div");
  newItem.className = "todo-item";

  newItem.innerHTML = `
    <span class="todo-text">${text}</span>

    <div class="item-btns">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">✕</button>
    </div>
  `;

  const span = newItem.querySelector(".todo-text");

  span.onclick = () => {
    span.classList.toggle("completed");
  };

  newItem.querySelector(".edit-btn").onclick = () => {
    input.value = span.textContent;
    btn.textContent = "O'zgartirish";
    editTarget = span;
    input.focus();
  };

  newItem.querySelector(".delete-btn").onclick = () => {
    if (editTarget === span) {
      resetForm();
    }

    newItem.remove();
  };

  container.appendChild(newItem);
}

function resetForm() {
  input.value = "";
  btn.textContent = "Qo'shish";
  editTarget = null;
}

function handleAdd() {
  const text = input.value.trim();

  if (!text) return;

  if (editTarget) {
    editTarget.textContent = text;
  } else {
    createTodoItem(text);
  }

  resetForm();
}

btn.onclick = handleAdd;

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleAdd();
  }
});
