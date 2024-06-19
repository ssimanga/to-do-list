//DOM elements

document.addEventListener('DOMContentLoaded', ()=>{
    const todoForm = document.querySelector('#todoform');
    const todoInput = document.querySelector('#todoInput');
    const todoList = document.querySelector('#todoList');

    // Add event listener to form
    todoForm.addEventListener('submit', addTask);
    todoList.addEventListener('click',(e)=>{
        if(e.target.classList.contains('btn-success')){
            const taskItem = e.target.parentElement;
            taskItem.firstChild.style.textDecoration = 'line-through';
        }else if(e.target.classList.contains('btn-danger')){
            const taskItem = e.target.parentElement;
            taskItem.remove();
            removeTaskFromLocalStorage(taskItem.firstChild.textContent);
        }
    });
})


// Load tasks from localStorage
document.addEventListener('DOMContentLoaded', loadTasks);

//add task
function addTask(e){
    e.preventDefault();
    const taskText = todoInput.value.trim();
    if(taskText === '') return;
    const task = createTaskElement(taskText);
    todoList.appendChild(task);
    storeTaskInLocalStorage(taskText);
    todoInput.value = '';
}

// create Task Element
function createTaskElement(taskText){
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    const span = document.createElement('span');
    span.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.textContent = 'Delete';
  

    const completeBtn = document.createElement('button');
    completeBtn.className = 'btn btn-success btn-sm';
    completeBtn.textContent = 'Complete';
   
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    return li;
}

//deleting task
function deleteTask(e){
    const taskItem = e.target.parentElement;
    taskItem.remove();
    removerTaskFromLocalStorage(taskItem.firstChild.textContent);
}

//complete task
function completeTask(e){
    const taskItem = e.target.parentElement;
    taskItem.firstChild.style.textDecoration = 'line-though';
}

//Store in local storage
function storeTaskInLocalStorage(taskText){
    let tasks = getTaskInLocalStorage();
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
//retrieve the tasks from localStorage
function getTaskInLocalStorage() {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
}
//Load tasks from localStorage
function loadTasks(){
    let tasks = getTaskInLocalStorage();
    tasks.forEach(taskItem => {
        const task = createTaskElement(taskItem);
        todoList.appendChild(task);
    });
}

//remove task from localStorage
function removeTaskFromLocalStorage(taskText){
    let tasks = getTaskInLocalStorage();
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}