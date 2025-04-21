const main = document.getElementById("main");

export function displayModal(closeModalBtn, modal) {
  const modalTitle = document.querySelector(".modal header h2");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "true");
  modalTitle.focus();
}

export function closeModal(contactBtn, modal) {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  main.setAttribute("aria-hidden", "false");
  contactBtn.focus();
}
