// --------------------loading-h1------------------start-------
const loadingH1 = document.querySelector(".loading-h1");
const sectionLoading = document.querySelector(".section");
const loading = document.querySelector(".loading");

loadingH1.addEventListener("click", function () {
  loading.remove();
  loading.classList.add("loading-off");
  sectionLoading.classList.add("section-on");
});

// --------------------loading-h1------------------end-------

// ------------------hours------------------
const history = document.querySelector(".history");
const mounts = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
intervalId = setInterval(() => {
  const date = new Date();

  let year = date.getFullYear(),
    mounth = date.getMonth(),
    date1 = date.getDate(),
    day = date.getDay(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    nowT = `${mounts[mounth]} ${date1} ${year} ${days[day]} ${hours} : ${minutes} : ${seconds}`;
  history.innerHTML = nowT;
}, 1000);

const formInput = document.querySelector(".formInput");
const formBtn = document.querySelector(".formBtn");
const taskContainer = document.querySelector(".task-container");

const tasks = (todoText) => {
  const todoItemElement = document.createElement("div");
  todoItemElement.classList.add("task-item");

  const back = document.createElement("div");
  back.classList.add("back");
  todoItemElement.appendChild(back);

  const panda = document.createElement("div");
  panda.classList.add("panda");
  todoItemElement.appendChild(panda);

  const stickers1 = document.createElement("div");
  stickers1.classList.add("stickers1");
  todoItemElement.appendChild(stickers1);

  const taskParagraf = document.createElement("p");
  taskParagraf.classList.add("taskP");
  taskParagraf.textContent = todoText;
  todoItemElement.appendChild(taskParagraf);

  const taskBtns = document.createElement("div");
  taskBtns.classList.add("taskBtns");
  todoItemElement.appendChild(taskBtns);

  const taskBtnsComplete = document.createElement("button");
  taskBtnsComplete.classList.add("taskBtns-complete");
  taskBtns.appendChild(taskBtnsComplete);

  const complete = document.createElement("i");
  complete.innerHTML = '<i class="fa-solid fa-check complete"></i>';
  complete.addEventListener("click", function () {
    taskParagraf.classList.toggle("completealt");
    todoItemElement.classList.toggle("task-item-complete");
  });
  taskBtnsComplete.appendChild(complete);

  const taskBtnsEdit = document.createElement("button");
  taskBtnsEdit.classList.add("taskBtns-edit");
  taskBtns.appendChild(taskBtnsEdit);

  const edit = document.createElement("i");
  edit.innerHTML = '<i class="fa-solid fa-pen-to-square edit"></i>';
  edit.addEventListener("click", function (e) {
    let editValue = prompt("edit the selected item");
    taskParagraf.textContent = editValue;
  });
  taskBtnsEdit.appendChild(edit);

  const taskBtnsDelete = document.createElement("button");
  taskBtnsDelete.classList.add("taskBtns-delete");
  taskBtns.appendChild(taskBtnsDelete);

  const Delete = document.createElement("i");
  Delete.innerHTML = '<i class="fa-solid fa-trash-can delete"></i>';
  Delete.addEventListener("click", function (e) {
    todoItemElement.remove(e.currentTarget);
  });
  taskBtnsDelete.appendChild(Delete);

  taskContainer.appendChild(todoItemElement);
  formInput.value = "";
  formInput.focus();
};

formBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (formInput.value === "") {
    alert("cannot be empty");
  } else {
    tasks(formInput.value);
  }
});
