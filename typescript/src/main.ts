import { fetchEvents } from "./fetcher";
import { renderEvents } from "./renderer";

window.addEventListener("DOMContentLoaded", async () => {
  const events = await fetchEvents();
  renderEvents(events);
});
