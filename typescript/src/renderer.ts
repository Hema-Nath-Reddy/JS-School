import type { EventData } from "./types";
import { openModal } from "./modal";
export async function renderEvents(events: EventData[]): Promise<void> {
  const timeLine = document.getElementById("timeline");
  if (!timeLine) return;
  timeLine.innerHTML = "";
  events.forEach((event) => {
    const marker = document.createElement("article");
    timeLine.append(marker);
    const openModalBtn = document.createElement("button");
    openModalBtn.innerHTML = event.year;
    marker.append(openModalBtn);
    openModalBtn.addEventListener("click", () => openModal(event));
  });
}
