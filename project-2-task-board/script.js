/* =============================================================
   Task Board : COSC 2360 Project 2
   =============================================================
   You write your JavaScript in this file, one milestone per week.
   The HTML (index.html) and CSS (styles.css) are already built.

   The idea to hold onto: your tasks live in a data array, and the
   page is a view of that array. When the data changes, re-draw the
   list from the array. Keeping one small render function makes the
   later weeks much easier.
   ============================================================= */

// Element references (already selected for you)
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const formMessage = document.getElementById("form-message");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const taskList = document.getElementById("task-list");

// A starting set of tasks. In Week 5 you render these to the page.
// In Week 8 you will turn each task into an object or a class instance.
let tasks = [
  "Welcome to your Task Board",
  "Add a task using the box above",
  "Delete these and add your own"
];


/* -------------------------------------------------------------
   WEEK 5 : Render, add, and remove tasks
   -------------------------------------------------------------
   Goal: show the tasks on the page, add a new one when the user
   submits, and remove one when its delete control is clicked.

   Steps to try:
   - Write a render function that clears taskList and then creates
     one <li> for each task in the tasks array. Put the task text in
     a span with the class "task-text", and add a delete button with
     the class "delete-btn".
   - Call render once so the starting tasks appear.
   - When a task is added, push it to the tasks array and render again.
   - When a delete button is clicked, remove that task from the array
     and render again.
   - Remember: change the array first, then re-draw from the array.
   ------------------------------------------------------------- */

// TODO (Week 5): write render(), and add and remove tasks



/* -------------------------------------------------------------
   WEEK 6 : A validated add form
   -------------------------------------------------------------
   Goal: handle the form's submit and validate the input.

   Steps to try:
   - Listen for the "submit" event on taskForm and call
     event.preventDefault() so the page does not reload.
   - Read taskInput.value and trim the whitespace.
   - Validate with at least two rules, for example: reject an empty
     task, and reject a duplicate that is already in the list.
   - Show a clear message in formMessage when input is rejected, and
     clear the message and the input box on success.
   ------------------------------------------------------------- */

// TODO (Week 6): handle submit, prevent reload, validate input



/* -------------------------------------------------------------
   WEEK 7 : Search, sort, and dates
   -------------------------------------------------------------
   Goal: filter as the user types, sort the list, and show a date.

   Steps to try:
   - Listen for input on searchInput and show only the tasks whose
     text includes what was typed (look up string includes and
     toLowerCase).
   - Listen for change on sortSelect and sort the tasks based on the
     chosen option (newest, oldest, A to Z).
   - Give each task a created date using new Date(), and show it in a
     span with the class "task-date". Format it in a readable way
     (look up toLocaleDateString).
   - Tip: this is much easier if your render function reads from the
     array and rebuilds the list, rather than hiding items by hand.
   ------------------------------------------------------------- */

// TODO (Week 7): search, sort, and show a created date



/* -------------------------------------------------------------
   WEEK 8 : Model tasks as objects
   -------------------------------------------------------------
   Goal: turn each task into an object or a class, and add a done
   toggle.

   Steps to try:
   - Change each task from a plain string into an object with
     properties such as text, done, and createdAt. You can use a
     class Task with a constructor and a method, or plain objects.
   - Add a "done" toggle button with the class "toggle-btn" to each
     task. When clicked, flip the task's done value and re-render.
   - When a task is done, add the class "done" to its <li> so the
     styling shows it as completed.
   - Finish and polish so add, remove, validate, search, sort, and
     mark done all work together.
   ------------------------------------------------------------- */

// TODO (Week 8): model tasks as objects and add a done toggle
