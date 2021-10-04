// Get Card Template
const cardTemplate = document.querySelector('#js-kg_card');

class KG_Card extends HTMLElement {
  constructor() {
    super();
    this.name = this.getAttribute('name');
    this.country = this.getAttribute('country');
  }

  connectedCallback() {
    const cardClone = cardTemplate.content.cloneNode(true);
    cardClone.querySelector('#name').innerText = this.name;
    cardClone.querySelector('#country').innerText = this.country;
    cardClone.querySelector('#view_button').addEventListener('click', () => {
      console.log(`${this.name} — ${this.country}`);
    });

    this.appendChild(cardClone);
  }
}

window.customElements.define('kg-card', KG_Card);
