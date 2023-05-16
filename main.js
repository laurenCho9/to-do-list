let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];
addButton.addEventListener("click", addTask);

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `<div class="task">
    <div>${taskList[i].taskContent}</div>
      <div>
        <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
        <button>Delete</button>
      </div>
    </div>`;
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = true;
      break;
    }
  }
  console.log(taskList);
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 16);
}
