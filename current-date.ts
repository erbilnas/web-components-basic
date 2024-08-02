class CurrentDate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = new Date().toDateString();
  }
}

customElements.define("current-date", CurrentDate);
