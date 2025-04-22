const main = document.getElementById("main");

export function displayModal(closeModalBtn, modal) {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "true");
  closeModalBtn.focus();
}

export function closeModal(openModalBtn, modal) {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  main.setAttribute("aria-hidden", "false");
  openModalBtn.focus();
}
