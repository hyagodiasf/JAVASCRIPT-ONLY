const taskInput = document.querySelector('.taskInput');
const addTaskBtn = document.querySelector('.addTaskBtn');
const removeTaskBtn = document.querySelector('.removeTaskBtn');
const taskList = document.querySelector('.taskList');

function createTaskItem(task) {
    const taskItem = document.createElement('li');
    taskItem.textContent = task;
    return taskItem;
}

function updateTaskNumbers() {
    const tasks = taskList.querySelectorAll('li');
    tasks.forEach((task, index) => {
        task.textContent = `${index + 1} - ${task.textContent.replace(/^\d+ - /, '')}`;
    });
}

function addTask() {
    if (!taskInput.value) return;
    taskList.appendChild(createTaskItem(taskInput.value.trim()));
    updateTaskNumbers();
    taskInput.value = '';
    saveTasks();
}

function saveTasks() {
    const tasks = taskList.querySelectorAll('li');
    const taskArray = Array.from(tasks).map(task => task.textContent.replace(/^\d+ - /, ''));
    localStorage.setItem('tasks', JSON.stringify(taskArray));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        taskList.appendChild(createTaskItem(task));
    }   );
    updateTaskNumbers();
}  
loadTasks();

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

addTaskBtn.addEventListener('click', (e) => {
    addTask();
});

removeTaskBtn.addEventListener('click', (e) => {
    const tasks = taskList.querySelectorAll('li');
    if (tasks.length > 0) {
        taskList.removeChild(tasks[tasks.length - 1]);
        updateTaskNumbers();
        saveTasks();
    }
});