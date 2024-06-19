/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//DOM elements\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var todoForm = document.querySelector('#todoform');\n  var todoInput = document.querySelector('#todoInput');\n  var todoList = document.querySelector('#todoList');\n\n  // Add event listener to form\n  todoForm.addEventListener('submit', addTask);\n  todoList.addEventListener('click', function (e) {\n    if (e.target.classList.contains('btn-success')) {\n      var taskItem = e.target.parentElement;\n      taskItem.firstChild.style.textDecoration = 'line-through';\n    } else if (e.target.classList.contains('btn-danger')) {\n      var _taskItem = e.target.parentElement;\n      _taskItem.remove();\n      removeTaskFromLocalStorage(_taskItem.firstChild.textContent);\n    }\n  });\n});\n\n// Load tasks from localStorage\ndocument.addEventListener('DOMContentLoaded', loadTasks);\n\n//add task\nfunction addTask(e) {\n  e.preventDefault();\n  var taskText = todoInput.value.trim();\n  if (taskText === '') return;\n  var task = createTaskElement(taskText);\n  todoList.appendChild(task);\n  storeTaskInLocalStorage(taskText);\n  todoInput.value = '';\n}\n\n// create Task Element\nfunction createTaskElement(taskText) {\n  var li = document.createElement('li');\n  li.className = 'list-group-item d-flex justify-content-between align-items-center';\n  var span = document.createElement('span');\n  span.textContent = taskText;\n  var deleteBtn = document.createElement('button');\n  deleteBtn.className = 'btn btn-danger btn-sm';\n  deleteBtn.textContent = 'Delete';\n  var completeBtn = document.createElement('button');\n  completeBtn.className = 'btn btn-success btn-sm';\n  completeBtn.textContent = 'Complete';\n  li.appendChild(span);\n  li.appendChild(completeBtn);\n  li.appendChild(deleteBtn);\n  return li;\n}\n\n//deleting task\nfunction deleteTask(e) {\n  var taskItem = e.target.parentElement;\n  taskItem.remove();\n  removerTaskFromLocalStorage(taskItem.firstChild.textContent);\n}\n\n//complete task\nfunction completeTask(e) {\n  var taskItem = e.target.parentElement;\n  taskItem.firstChild.style.textDecoration = 'line-though';\n}\n\n//Store in local storage\nfunction storeTaskInLocalStorage(taskText) {\n  var tasks = getTaskInLocalStorage();\n  tasks.push(taskText);\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n//retrieve the tasks from localStorage\nfunction getTaskInLocalStorage() {\n  return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];\n}\n//Load tasks from localStorage\nfunction loadTasks() {\n  var tasks = getTaskInLocalStorage();\n  tasks.forEach(function (taskItem) {\n    var task = createTaskElement(taskItem);\n    todoList.appendChild(task);\n  });\n}\n\n//remove task from localStorage\nfunction removeTaskFromLocalStorage(taskText) {\n  var tasks = getTaskInLocalStorage();\n  tasks = tasks.filter(function (task) {\n    return task !== taskText;\n  });\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;