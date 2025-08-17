import { EventData } from "./types.js";
import { showEvent } from "./modal.js";

const timeline = document.getElementById("timeline") as HTMLDivElement;

export function renderTimeline(events: EventData[]) {
  events.forEach(event => {
    const marker = document.createElement("div");
    marker.className = "event-marker";
    marker.textContent = event.year;

    marker.addEventListener("click", () => showEvent(event));

    timeline.appendChild(marker);
  });
}
