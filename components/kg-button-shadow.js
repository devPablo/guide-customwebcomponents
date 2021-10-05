const buttonShadowTemplate = document.createElement('template');
buttonShadowTemplate.innerHTML = `
  <style>
    .kg-button {
      background-color: #26BE96;
      border: none;
      border-radius: 3px;
      outline: 0;
      padding: 15px 24px;
      font-size: 1rem;
      text-align: center;
      color: #fff;
      cursor: pointer;
      margin: 0.5rem 0;
      transition: background-color 0.2s ease;
    }

    .kg-button:hover {
      background-color: #22aa86;
    }
  </style>
  <div>
    <slot name='button'></slot>
    <button id='test' type="button" slot="button" class='kg-button'>Button Shadow Component (SHADOW DOM)</button>
  </div>
`;

class KG_Button_Shadow extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'closed' });
    
    // Access shadowRoot if { mode: 'open' }, { mode: 'closed' } returns null;
    // this.shadowRoot.innerHTML = '<p>Hello</p>'
  }

  connectedCallback() {
    this.root.appendChild(buttonShadowTemplate.content.cloneNode(true));
  }
}

window.customElements.define('kg-button-shadow', KG_Button_Shadow);
