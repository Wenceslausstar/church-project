const modal = document.getElementById("prayerModal");
const form = document.getElementById("prayerForm");

function openModal() {
  if (!modal) return;
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
  const firstField = document.getElementById("name");
  if (firstField) {
    setTimeout(() => firstField.focus(), 50);
  }
}

function closeModal() {
  if (!modal) return;
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

if (modal) {
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
}

function handlePrayerSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  if (!nameInput || !form) return;

  const name = nameInput.value.trim();
  const submitButton = form.querySelector("button[type='submit']");

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Request Sent";
  }

  const statusMessage = document.createElement("p");
  statusMessage.className = "form-success";
  statusMessage.textContent = `Thank you, ${name || "friend"}. Your prayer request has been received by our ministry team.`;

  const existingMessage = form.querySelector(".form-success");
  if (existingMessage) {
    existingMessage.remove();
  }

  form.appendChild(statusMessage);
  form.reset();

  setTimeout(() => {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Submit Request";
    }
    closeModal();
    if (statusMessage.parentNode) {
      statusMessage.remove();
    }
  }, 1800);
}

function toggleFaq(button) {
  if (!button) return;

  const item = button.parentElement;
  if (!item) return;

  const isActive = item.classList.contains("active");

  document
    .querySelectorAll(".faq-item")
    .forEach((faqItem) => faqItem.classList.remove("active"));

  if (!isActive) {
    item.classList.add("active");
  }
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});
