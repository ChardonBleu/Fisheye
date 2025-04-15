import { displayModal, closeModal } from "../utils/contactForm.js";

const contactBtn = document.querySelector(".contact_button");
const closeModalBtn = document.querySelector(".modal > header > img");

contactBtn.addEventListener("click", displayModal);
closeModalBtn.addEventListener("click", closeModal);
