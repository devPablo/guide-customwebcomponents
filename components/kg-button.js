class KG_Button extends HTMLElement {
  constructor() {
    super();

    this.appendChild(this.createButton());
  }

  createButton = () => {
    const button = document.createElement('button');
    button.innerText = this.getAttribute('text');
    button.classList.add('kg-button');
    return button;
  };
}

window.customElements.define('kg-button', KG_Button);
