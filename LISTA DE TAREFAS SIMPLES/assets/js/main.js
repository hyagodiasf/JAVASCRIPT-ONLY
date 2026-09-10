const taskInput = document.querySelector('.taskInput');
const addTaskBtn = document.querySelector('.addTaskBtn');
const taskList = document.querySelector('.taskList');
const removeTaskBtn = document.querySelector('.removeTaskBtn');
let numberCounter = 0;

function createTaskItem(task) {
    const taskItem = document.createElement('li');
    numberCounter++;
    taskItem.textContent = `${numberCounter} - ${task}`;
    return taskItem;
}

taskInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter' && taskInput.value) {
        taskList.appendChild(createTaskItem(taskInput.value));
        taskInput.value = '';
    }
});

addTaskBtn.addEventListener('click', (e) => {
    if(!taskInput.value) return;
    taskList.appendChild(createTaskItem(taskInput.value));
    taskInput.value = '';
});

removeTaskBtn.addEventListener('click', (e) => {
    const tasks = taskList.querySelectorAll('li');
    if(tasks.length > 0) {
        taskList.removeChild(tasks[tasks.length - 1]);
    }
});