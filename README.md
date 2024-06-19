This project is a simple To-Do list application that demonstrates key concepts in modern JavaScript development, including DOM manipulation, event handling, and data persistence using localStorage. The application is styled using Bootstrap 5 for a clean, responsive user interface.

Key Features:

Add New Tasks: Users can add new tasks using an input field and a button.
Mark Tasks as Completed: Users can mark tasks as completed, which visually strikes through the task.
Delete Tasks: Users can delete tasks from the list.
Persist Tasks: Tasks are saved in the browser's localStorage, so they persist even after the browser is closed and reopened.
Technologies Used:

JavaScript (ES6+): For logic and functionality.
Babel: To transpile modern JavaScript code to ensure compatibility with older browsers.
Webpack: To bundle the JavaScript files and dependencies.
Bootstrap 5: For styling the user interface.
localStorage: To store tasks persistently in the browser.
Project Structure
index.html:

Contains the HTML structure of the application, including a form for adding tasks and a list for displaying tasks.
Includes Bootstrap 5 for styling.
src/index.js:

Contains the main JavaScript logic for the application.
Handles adding, completing, and deleting tasks.
Manages data persistence using localStorage.
webpack.config.js:

Configures Webpack to bundle the JavaScript files.
Specifies Babel loader to transpile JavaScript code.
.babelrc:

Configures Babel to use the @babel/preset-env preset.
package.json:

Manages project dependencies and scripts.
Includes scripts to build the project using Webpack and Babel.
How It Works
Adding a Task:

Users enter a task in the input field and click the "Add Task" button.
The task is added to the list and saved in localStorage.
Marking a Task as Completed:

Users can click the "Complete" button next to a task.
The task text is visually marked as completed (strikethrough).
Deleting a Task:

Users can click the "Delete" button next to a task.
The task is removed from the list and from localStorage.
Persisting Tasks:

Tasks are saved in localStorage, allowing them to persist across browser sessions.
On page load, tasks are loaded from localStorage and displayed in the list.
