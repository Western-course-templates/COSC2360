# Project 3: Live Data Dashboard (Weeks 9 to 12)

Build a weather dashboard that fetches live data from a free public service and shows it for a place the user chooses, remembering the last location between visits. You build all of the behavior in `script.js`. The page structure and styling are already done.

This is the capstone project. It brings together everything from the first two projects and adds the skills the modern web runs on: saved state, real network requests, and a helper library.

## How to run

Open `index.html` in the browser preview in your cloud editor. As you add code to `script.js` and save, refresh the preview to see your changes. Use the browser developer tools (Console and Network tabs) to see messages, errors, and requests.

## Files in this folder

- `index.html` : the page structure. Do not rename it.
- `styles.css` : the finished styling. You do not need to edit this.
- `script.js` : where you write your code, one milestone per week.

## The element ids your code will use

These are already in the HTML and are selected for you at the top of `script.js`:

- `search-form` : the form for searching a place
- `location-input` : the text box for a place name
- `loading` : the loading indicator (starts hidden)
- `error` : the error message area (starts hidden)
- `location-name` : where the place name is shown
- `temperature` : where the temperature is shown
- `conditions` : where the conditions are shown

To show a hidden area, set its `hidden` property to false (for example `loading.hidden = false`). To hide it again, set it back to true.

## The weather service: Open-Meteo (free, no key)

Open-Meteo needs no account and no API key. It works in two steps.

**Step 1: Geocoding, turn a place name into coordinates.**

```
https://geocoding-api.open-meteo.com/v1/search?name=CITY&count=1
```

Worked example for Rock Springs:

```
https://geocoding-api.open-meteo.com/v1/search?name=Rock%20Springs&count=1
```

The response has a `results` array. Use the first result's `latitude` and `longitude` (and `name` for display).

**Step 2: Forecast, get the current weather for those coordinates.**

```
https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current=temperature_2m,weather_code
```

Worked example (Rock Springs coordinates):

```
https://api.open-meteo.com/v1/forecast?latitude=41.5875&longitude=-109.2029&current=temperature_2m,weather_code
```

The response has a `current` object with `temperature_2m` (the temperature) and `weather_code` (a number describing the conditions). You can map the weather code to a description, or just show the temperature to start.

The full documentation is at https://open-meteo.com/en/docs and is listed in the weekly resources.

## A note on client-side storage and security

This app saves the last location in the browser using `localStorage`. That is fine for a preference like a city name, but browser storage is not private: anyone using the computer can read it, so you never store passwords, keys, or secrets there. You also validate what the user types before you use it, so a blank or strange entry does not break the app. Add your own version of this note here as part of the Week 9 milestone.

## Milestones

- **Week 9:** Build the shell, remember the last location with web storage as JSON, and write the security note above. Use the sample data object to build the display first.
- **Week 10:** Wire up the search with the event object and make your first live call to Open-Meteo.
- **Week 11:** Refactor requests to async fetch, and add loading and error states.
- **Week 12:** Enhance the dashboard with jQuery, then finish.

## Submitting

Each week, commit and push your work, then submit the link to your repository in Canvas.

```
git add .
git commit -m "Week 10: first live API call"
git push
```
