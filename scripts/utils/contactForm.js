const modal = document.querySelector(".contact_modal");

export function displayModal() {
  modal.classList.add("show");
}

export function closeModal() {
  modal.classList.remove("show");
}
