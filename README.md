# js-school-project-BafnaSumeet
Timeline App Project for JS School

# Timeline App

This is a simple timeline app where you can see events in a clean layout.

## What’s inside

- A header with the app title and a theme toggle button
- A placeholder navigation for filters (can add later)
- Timeline section where event markers appear dynamically
- A modal that shows details when you click an event

## What I’ve done so far

**Task 1:** Created the basic HTML structure.  
**Task 2:** Added CSS for styling and made it responsive for mobile, tablet, and desktop. Event markers and modal have basic placeholder styles.  
**Task 3:** Added JavaScript to make it interactive:  
  - Fetches events from `events.json`  
  - Generates timeline markers automatically  
  - Click a marker to open a modal with event details and images  
  - Close the modal with a button  
**Task 4:** Converted the code to TypeScript with modular structure:  
  - Defined interfaces for event data to enforce type safety  
  - Split code into modules: `fetcher.ts`, `renderer.ts`, `modal.ts`, etc.  
  - Configured `tsconfig.json` with strict mode  
  - Compiled TypeScript to JavaScript in `dist/` and verified it works in the browser  
