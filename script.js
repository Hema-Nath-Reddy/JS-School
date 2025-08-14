function fetchEvents() {
  fetch("events.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderMarkers(data.events);
    });
}

function renderMarkers(events) {
  const timeline = document.getElementById("timeline");
  events.forEach((event) => {
    const marker = document.createElement("article");
    marker.classList.add("marker");
    marker.textContent = event.year;
    timeline.append(marker);
    const openModalBtn = document.createElement("button");
    openModalBtn.innerHTML = "More details";
    marker.append(openModalBtn);
    openModalBtn.addEventListener("click", () => openModal(event));
  });
}

function openModal(event) {
  const modal = document.getElementById("modal");
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
  modal.append(h2, p, button, img);
  modal.style.display = "block";

  document.getElementById("close-modal").addEventListener("click", () => {
    modal.style.display = "none";
  });
}
fetchEvents();
