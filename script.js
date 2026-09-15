const modal = document.getElementById("prayerModal");

function openModal() {
  if (!modal) return;
  modal.style.display = "flex";
}

function closeModal() {
  if (!modal) return;
  modal.style.display = "none";
}

if (modal) {
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };
}

function handlePrayerSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const form = document.getElementById("prayerForm");
  if (!nameInput || !form) return;

  const name = nameInput.value;
  alert(
    `Thank you, ${name}. Your prayer request has been received by our ministry team.`,
  );
  form.reset();
  closeModal();
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
