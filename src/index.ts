import { fetchEvents } from "./fetcher.js";
import { renderTimeline } from "./renderer.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const events = await fetchEvents();
    renderTimeline(events);
  } catch (err) {
    console.error("Error loading events:", err);
  }
});
