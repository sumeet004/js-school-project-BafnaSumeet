document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");

  // Create modal content container
  const modalContent = document.createElement("div");
  Object.assign(modalContent.style, {
    background: "#fff",
    padding: "20px",
    maxWidth: "400px",
    borderRadius: "8px"
  });
  modal.appendChild(modalContent);

  // Event details container
  const eventDetails = document.createElement("div");
  modalContent.appendChild(eventDetails);

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.style.marginTop = "10px";
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
  modalContent.appendChild(closeBtn);

  // Fetch and render events from JSON
  fetch("events.json")
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      return res.json();
    })
    .then(events => {
      events.forEach(event => {
        const marker = document.createElement("div");
        marker.className = "event-marker";
        marker.textContent = event.year;

        marker.addEventListener("click", () => {
          eventDetails.innerHTML = `
            <h2>${event.title}</h2>
            <p>${event.description}</p>
            <img src="${event.imageURL}" alt="${event.title}" 
              style="max-width: 100%; border-radius: 4px; margin-top: 10px;">
            <p><strong>Category:</strong> ${event.category}</p>
          `;
          modal.classList.add("active");
        });

        timeline.appendChild(marker);
      });
    })
    .catch(err => {
      console.error("Error loading events:", err);
    });
});
