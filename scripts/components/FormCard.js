export function formTemplate(artist) {
  const artistInfo = `
    <div class="contact_modal" aria-labelledby="title-modal">
      <header>
        <h2 tabindex="0" id="title-modal" >Contactez-moi<br>${artist.name}</h2>
        <img tabindex="0" class="close-modal" src="assets/icons/close.svg" alt="close modal: echap key" />
      </header>
      <form action="photographer.html?${artist.id}" method="get">
        <label for="first-name">Prénom</label>
        <input aria-label="Prénom: requis - au moins 2 caractères"
                class="field" id="first-name"
                type="text"
                name="first-name"
                minlength="2"
                required>
        <label for="last-name">Nom</label>
      <input aria-label="Nom: requis - au moins 2 caractères"
              class="field" id="last-name"
              type="text"
              name="last-name"
              minlength="2"
              required>
        <label for="mail">Email</label>
        <input class="field" id="mail" type="email" name="mail">
        <label for="message">Votre message</label>
        <textarea class="field" id="message" type="text" name="message"></textarea> 
        <button class="form-button">Envoyer</button>
      </form>
    </div>
    `;

  return artistInfo;
}
