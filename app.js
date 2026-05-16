const input = document.getElementById("todoInput");
const btn = document.getElementById("addBtn");
const container = document.getElementById("todoContainer");

let editTarget = null;

// Todo yaratish
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

  // Edit
  newItem.querySelector(".edit-btn").onclick = () => {
    input.value = span.textContent;
    btn.textContent = "Qo'shish";
    editTarget = span;
    input.focus();
  };

  // Delete
  newItem.querySelector(".delete-btn").onclick = () => {
    if (editTarget === span) {
      resetForm();
    }

    newItem.remove();
  };

  container.appendChild(newItem);
}

// Formani tozalash
function resetForm() {
  input.value = "";
  btn.textContent = "Qo'shish";
  editTarget = null;
}

// Qo‘shish yoki o‘zgartirish
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

// Button bosilganda
btn.onclick = handleAdd;

// Enter bosilganda
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleAdd();
  }
});
