/* const toDoInput = document.getElementById("input-box");
const addTaskBtn = document.getElementById("input-button");
const allTaskList = document.getElementById("list-container");

let Task = JSON.parse(localStorage.getItem("tasks")) || [];
Task.forEach((element) => renderTask(element));

addTaskBtn.addEventListener("click", () => {
  const taskInput = toDoInput.value.trim();
  if (taskInput === "") return;

  const newtask = {
    id: Date.now(),
    Text: taskInput,
    completed: false,
  };

  Task.push(newtask);
  saveTask();
  renderTask(newtask);
  toDoInput.value = "";
  console.log(Task);
});

function renderTask(element) {
  const li = document.createElement("li");
  li.setAttribute("data-id", element.id);
  li.setAttribute("Completed", element.completed);
  li.innerHTML = `<span><input type="checkbox"/></span><span>${element.Text}</span>
    <button class="delete-btn">Delete</button>`;
  allTaskList.appendChild(li);

  li.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      Task = Task.filter((t) => t.id !== element.id);
      li.remove();
      saveTask(); // console.log(delTask);
    });
  });

  /*   li.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      Task = Task.filter((t) => t.id !== element.id);
      li.remove();
      saveTask(); // console.log(delTask);
    });
  }); 
}

function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(Task));
}
 */

function a() {
  return console.log("a");
}
function b() {
  return console.log("b");
}
function c() {
  return console.log("c");
}

b();
a();
c();
