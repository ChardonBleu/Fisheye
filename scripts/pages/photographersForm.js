import { createModalElement } from "./photographers.js";
import { displayModal, closeModal } from "../utils/modals.js";
import { formTemplate } from "../components/FormCard.js";

export function displayModalForm(artist) {
  const main = document.querySelector("main");
  const formCard = formTemplate(artist);
  const formModal = createModalElement(formCard);
  formModal.classList.add("contact");
  main.appendChild(formModal);
}

function sendFormDatas(form) {
  const allFields = document.querySelectorAll(".field");
  let formValid = false;

  allFields.forEach((input) => {
    if (input.value && input.checkValidity()) {
      formValid = true;
    }
  });
  if (formValid) {
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(formData);
    console.log(searchParams.toString());
    form.reset();
    return true;
  } else {
    throw new Error("Formulaire non valide");
  }
}

export function manageModalForm() {
  const modal = document.querySelector(".contact");
  const contactBtn = document.querySelector(".contact_button");
  const closeModalBtn = document.querySelector(".contact_modal > header > img");
  const form = document.querySelector("form");

  contactBtn.addEventListener("click", () => {
    displayModal(closeModalBtn, modal);
  });

  closeModalBtn.addEventListener("click", () => {
    closeModal(contactBtn, modal);
  });

  modal.addEventListener("keydown", (event) => {
    if (
      modal.getAttribute("aria-hidden") == "false" &&
      event.key === "Escape"
    ) {
      closeModal(contactBtn, modal);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const sent = sendFormDatas(form);
    if (sent) {
      closeModal(contactBtn, modal);
    }
  });
}
