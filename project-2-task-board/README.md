# Project 2: Task Board (Weeks 5 to 8)

Build an interactive task manager. A user adds tasks, removes them, searches and sorts them, and marks them done, with the page updating live as they work. You build all of the behavior in `script.js`. The page structure and styling are already done.

## How to run

Open `index.html` in the browser preview in your cloud editor. As you add code to `script.js` and save, refresh the preview to see your changes. Use the browser developer tools (Console tab) to see messages and errors.

## Files in this folder

- `index.html` : the page structure. Do not rename it.
- `styles.css` : the finished styling. You do not need to edit this.
- `script.js` : where you write your code, one milestone per week.

## The element ids your code will use

These are already in the HTML and are selected for you at the top of `script.js`:

- `task-form` : the form for adding a task
- `task-input` : the text box for a new task
- `form-message` : where validation messages appear
- `search-input` : the search box (used in Week 7)
- `sort-select` : the sort menu (used in Week 7)
- `task-list` : the list where your tasks are shown

## Helpful classes in the styling

- Add the class `done` to a task's list item to show it as completed.
- Put the task text in a span with the class `task-text`.
- Put the created date in a span with the class `task-date`.
- Give delete buttons the class `delete-btn` and done toggles the class `toggle-btn`.

## Milestones

- **Week 5:** Render tasks from an array, add new ones, and remove them, all through the page.
- **Week 6:** Turn the add control into a form with validation and clear feedback.
- **Week 7:** Add live search, sorting, and a created date on each task.
- **Week 8:** Refactor each task into an object or class with properties and methods, add a done toggle, then finish.

## The big idea

Your tasks live in a data array, and the page is a view of that array. When the data changes, re-draw the list from the array. Writing one small render function in Week 5 makes Weeks 6 to 8 much easier.

## Submitting

Each week, commit and push your work, then submit the link to your repository in Canvas.

```
git add .
git commit -m "Week 5: render, add, and remove tasks"
git push
```
