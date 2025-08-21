import { EventData } from "./types.js";

export async function fetchEvents(): Promise<EventData[]> {
  const res = await fetch("./events.json");
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  return res.json();
}
