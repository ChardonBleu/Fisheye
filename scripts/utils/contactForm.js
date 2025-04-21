const modal = document.querySelector(".contact_modal");
const main = document.getElementById("main")

export function displayModal(closeModalBtn) {
  console.log("dans display modal");
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "true")
  closeModalBtn.focus()

}

export function closeModal(contactBtn) {
  console.log("dans close modal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true")
  main.setAttribute("aria-hidden", "false");
  contactBtn.focus()
}
