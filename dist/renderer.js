import { showEvent } from "./modal.js";
const timeline = document.getElementById("timeline");
export function renderTimeline(events) {
    events.forEach(event => {
        const marker = document.createElement("div");
        marker.className = "event-marker";
        marker.textContent = event.year;
        marker.addEventListener("click", () => showEvent(event));
        timeline.appendChild(marker);
    });
}
