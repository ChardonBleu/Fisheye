export default function formTemplate(artist) {
    const article = document.createElement("article");
  
    const artistInfo = `
    <div class="contact_modal" aria-hidden="true">
      <div class="modal" role="dialog" aria-labelledby="title-modal">
        <header>
          <h2 id="title-modal">Contactez-moi<br>${artist.name}</h2>
          <img tabindex="0" class="close-modal" src="assets/icons/close.svg" alt="close modal" />
        </header>
        <form>
          <label for="first-name">Prénom</label>
          <input id="first-name" type="text" name="first-name">
          <label for="last-name">Nom</label>
          <input id="last-name" type="text" name="last-name">
          <label for="mail">Email</label>
          <input id="mail" type="email" name="mail">
          <label for="message">Votre message</label>
          <textarea id="message" type="text" name="message"></textarea>
          <button class="contact_button">Envoyer</button>
        </form>
      </div>
    </div>
    `;
  
    article.innerHTML = artistInfo;
  
    return article;
  }