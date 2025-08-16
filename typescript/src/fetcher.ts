import type { EventData } from "./types";

export async function fetchEvents(): Promise<EventData[]> {
  const response = await fetch("../events.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: EventData[] = await response.json();
  return data.events || [];
}
