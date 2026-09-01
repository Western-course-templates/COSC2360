# Project 1: Tip and Split Calculator (Weeks 1 to 4)

Build a calculator where a user enters a bill amount, chooses a tip percentage, and enters a number of people. The page shows the tip, the total, and the amount each person owes. You build all of the behavior in `script.js`. The page structure and styling are already done.

## How to run

Open `index.html` in the browser preview in your cloud editor. As you add code to `script.js` and save, refresh the preview to see your changes. Use the browser developer tools (Console tab) to see messages and errors.

## Files in this folder

- `index.html` : the page structure. Do not rename it. You will not need to edit it, except optionally in later weeks.
- `styles.css` : the finished styling. You do not need to edit this.
- `script.js` : where you write your code, one milestone per week.

## The element ids your code will use

These are already in the HTML and are selected for you at the top of `script.js`:

- `bill` : the bill amount input
- `tip-percent` : the tip percentage input
- `tip-presets` : the container where your Week 3 preset buttons go
- `people` : the number of people input
- `calculate` : the Calculate button
- `message` : where validation and error messages appear
- `tip-amount` : where the tip amount is shown
- `total` : where the total is shown
- `per-person` : where the per-person amount is shown

Give any preset button you create the class `preset` so the styling applies.

## Milestones

- **Week 1:** Set up your tools, confirm this page runs, and add one line to `script.js` that logs a message.
- **Week 2:** Read the inputs and compute the tip and total with functions you write.
- **Week 3:** Build preset tip buttons from an array, handle a couple of edge cases, and show the per-person split.
- **Week 4:** Validate input, handle errors so bad input never crashes the page, then finish and polish.

## Submitting

Each week, commit and push your work, then submit the link to your repository in Canvas.

```
git add .
git commit -m "Week 2: compute tip and total"
git push
```
