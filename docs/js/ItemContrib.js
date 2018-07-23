const currentDocument = document.currentScript.ownerDocument;
class ItemContrib extends HTMLElement {
  constructor() {
    super();
  }

  // Called when element is inserted in DOM
  connectedCallback() {
    console.log('connectedCallback');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = currentDocument.querySelector('#item-contrib-template');
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);
    this.shadowRoot.querySelector('#userid').innerHTML = this.getAttribute(
      'userid'
    );
    this.shadowRoot.querySelector('#githubid').innerText = this.getAttribute(
      'githuburl'
    );
    this.shadowRoot
      .querySelector('#githubid')
      .setAttribute('href', this.getAttribute('githuburl'));
    this.shadowRoot
      .querySelector('#avatar')
      .setAttribute('src', this.getAttribute('avatar'));
  }
}

customElements.define('item-contrib', ItemContrib);
