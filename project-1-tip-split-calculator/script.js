/* =============================================================
   Tip and Split Calculator : COSC 2360 Project 1
   =============================================================
   You write your JavaScript in this file, one milestone per week.
   The HTML (index.html) and CSS (styles.css) are already built.

   The elements you will work with are selected for you below, so
   you can use them by name. Open index.html in the browser preview
   to see the page as you work.
   ============================================================= */

// Element references (already selected for you)
const billInput = document.getElementById("bill");
const tipPercentInput = document.getElementById("tip-percent");
const peopleInput = document.getElementById("people");
const calculateButton = document.getElementById("calculate");
const presetsContainer = document.getElementById("tip-presets");
const message = document.getElementById("message");
const tipAmountOutput = document.getElementById("tip-amount");
const totalOutput = document.getElementById("total");
const perPersonOutput = document.getElementById("per-person");

// A set of preset tip percentages you will use in Week 3
const PRESET_TIPS = [10, 15, 18, 20];


/* -------------------------------------------------------------
   WEEK 1 : Confirm your setup
   -------------------------------------------------------------
   Add one line below that logs a short message to the console,
   for example the word "Calculator loaded". Open the browser
   developer tools (Console tab) to see it. This proves your
   script is connected and running.
   ------------------------------------------------------------- */

// TODO (Week 1): log a message here to confirm the script runs



/* -------------------------------------------------------------
   WEEK 2 : Compute the tip and total
   -------------------------------------------------------------
   Goal: when the Calculate button is clicked, read the bill and
   tip percentage, compute the tip and the total, and show them.

   Steps to try:
   - Write a function calculateTip(bill, tipPercent) that returns
     the tip amount.
   - Write a function calculateTotal(bill, tip) that returns the
     total.
   - Read the input values as numbers (look up Number() or
     parseFloat).
   - Show the results in tipAmountOutput and totalOutput. You can
     format a number as money with: "$" + value.toFixed(2)
   - Run your functions when calculateButton is clicked
     (look up addEventListener).
   ------------------------------------------------------------- */

// TODO (Week 2): your functions and the Calculate button logic



/* -------------------------------------------------------------
   WEEK 3 : Preset buttons, branching, and the split
   -------------------------------------------------------------
   Goal: build preset tip buttons from the PRESET_TIPS array,
   handle a couple of edge cases, and show the per-person share.

   Steps to try:
   - Loop over PRESET_TIPS and create a button for each value.
     Give each button the class "preset" so it is styled, and
     set tipPercentInput.value when it is clicked.
   - Add the buttons to presetsContainer.
   - Use an if statement to handle at least two cases, such as a
     people count of zero, or rounding the per-person amount up so
     the group is not short.
   - Compute and show the per-person amount in perPersonOutput.
   ------------------------------------------------------------- */

// TODO (Week 3): build the presets, add branching, show the split



/* -------------------------------------------------------------
   WEEK 4 : Validation, error handling, and finish
   -------------------------------------------------------------
   Goal: make the calculator handle bad input without breaking.

   Steps to try:
   - Before calculating, check that the inputs are valid numbers
     and are not empty or negative. If they are not, show a helpful
     message in the "message" element and stop.
   - Wrap the parsing and calculation in a try and catch block so a
     bad value shows a friendly message instead of crashing.
   - Use the browser developer tools to find and fix at least one
     bug, and describe it in your reflection.
   - Polish the calculator so it works from start to finish.
   ------------------------------------------------------------- */

// TODO (Week 4): validate input and handle errors
