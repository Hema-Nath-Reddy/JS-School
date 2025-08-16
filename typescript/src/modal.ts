import type { EventData } from "./types";

export async function openModal(event: EventData): Promise<void> {
  const modal = document.getElementById("modal") as HTMLElement;
  if (!modal) return;
  modal.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.textContent = event.title;
  const p = document.createElement("p");
  p.textContent = event.description;
  const button = document.createElement("button");

  button.id = "close-modal";
  button.textContent = "Close";
  const img = document.createElement("img");
  img.src = event.imageURL;
  img.alt = event.title;
  modal.append(h2, p, img, button);
  modal.style.display = "flex";
  const blurElement = document.querySelector(".blur") as HTMLElement;
  if (!blurElement) return;
  blurElement.style.display = "block";

  const closeModalElement = document.getElementById(
    "close-modal"
  ) as HTMLElement;
  if (!closeModalElement) return;

  closeModalElement.addEventListener("click", () => {
    modal.style.display = "none";
    blurElement.style.display = "none";
  });
}
