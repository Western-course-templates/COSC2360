/* =============================================================
   Live Data Dashboard : COSC 2360 Project 3
   =============================================================
   You write your JavaScript in this file, one milestone per week.
   The HTML (index.html) and CSS (styles.css) are already built.

   This project uses Open-Meteo, a free weather service that needs
   no account and no API key. It works in two steps:
     1. Turn a place name into coordinates (geocoding).
     2. Ask for the weather at those coordinates (forecast).
   The two request URLs, with examples, are in the README and in
   the comments below.
   ============================================================= */

// Element references (already selected for you)
const searchForm = document.getElementById("search-form");
const locationInput = document.getElementById("location-input");
const loading = document.getElementById("loading");
const errorBox = document.getElementById("error");
const locationName = document.getElementById("location-name");
const temperature = document.getElementById("temperature");
const conditions = document.getElementById("conditions");

// The Open-Meteo request URLs you will use:
//   Geocoding (place name to coordinates):
//     https://geocoding-api.open-meteo.com/v1/search?name=CITY&count=1
//   Forecast (coordinates to current weather):
//     https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current=temperature_2m,weather_code


/* -------------------------------------------------------------
   WEEK 9 : State and storage
   -------------------------------------------------------------
   Goal: build the app shell and remember the user's last location.
   Do not call the live API yet. Use the sample object below so you
   can build the display first.

   Steps to try:
   - Write a render function that takes a data object and shows the
     location name, temperature, and conditions on the page.
   - Read the location from locationInput and save it to
     localStorage as JSON (look up JSON.stringify and localStorage).
   - When the page loads, read the saved location back from
     localStorage (look up JSON.parse) and restore it.
   - Add a short note in this project's README about why secrets do
     not belong in browser storage and why you validate input.
   ------------------------------------------------------------- */

// Sample data to build your display with in Week 9
const sampleWeather = {
  place: "Rock Springs",
  temperatureC: 12.4,
  description: "Partly cloudy"
};

// TODO (Week 9): render from sampleWeather, and save/restore the last location



/* -------------------------------------------------------------
   WEEK 10 : First live API call
   -------------------------------------------------------------
   Goal: handle the search with the event object and get real data.

   Steps to try:
   - Listen for the "submit" event on searchForm. Use the event
     object: call event.preventDefault() and read the typed value.
   - Request the geocoding URL for the typed place to get its
     latitude and longitude (use the first result).
   - Request the forecast URL for those coordinates to get the
     current temperature and weather.
   - Show the result on the page, and save the searched place to
     your stored state from Week 9.
   - You may use a basic request here. The clean async version is
     Week 11.
   ------------------------------------------------------------- */

// TODO (Week 10): handle the search and make your first API call



/* -------------------------------------------------------------
   WEEK 11 : Async fetch with loading and errors
   -------------------------------------------------------------
   Goal: use modern fetch and handle the slow and broken cases.

   Steps to try:
   - Rewrite your requests using the Fetch API with async and await.
   - Show the loading element while a request is in flight
     (loading.hidden = false), and hide it when done.
   - Handle errors: if the city is not found or a request fails,
     show a friendly message in the error element. Test this on
     purpose by searching a nonsense city and by using the offline
     toggle in the developer tools.
   - Make sure a normal search still shows the weather correctly.
   ------------------------------------------------------------- */

// TODO (Week 11): refactor to async fetch, add loading and error states



/* -------------------------------------------------------------
   WEEK 12 : Enhance with jQuery, then finish
   -------------------------------------------------------------
   Goal: add jQuery and use it to improve the dashboard.

   Steps to try:
   - Add the jQuery script line in index.html (see the comment near
     the bottom of that file), above this script.
   - Use a jQuery selector and event handler for the search, or use
     a jQuery animation such as fading the results in.
   - You may also try a jQuery Ajax call in place of one fetch.
   - Finish the dashboard and update this project's README so it
     explains how to run the app.
   ------------------------------------------------------------- */

// TODO (Week 12): enhance with jQuery and finish
