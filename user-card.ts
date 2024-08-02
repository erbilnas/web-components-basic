class UserCard extends HTMLElement {
  constructor() {
    super();
    this.title = "Click Me";
  }

  // component attributes
  static get observedAttributes() {
    return ["title"];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" }); // must create a shadow tree

    if (!shadow) return;

    shadow.innerHTML = `
      <button>${this.title}</button>
    `;

    const button = shadow.querySelector("button");

    button?.addEventListener("click", () => {
      console.log("clicked");

      this.dispatchEvent(new CustomEvent("user-clicked", { detail: "deneme" }));
    });
  }
}

customElements.define("user-card", UserCard);

// Lifecycle Methods

// constructor()
// static observedAttributes()
// attributeChangedCallback(propertyName, oldValue, newValue)
// connectedCallback()
// disconnectedCallback()
// adoptedCallback()

//----------------------------

// The Shadow DOM

// “open” — JavaScript in the outer page can access the Shadow DOM (using Element.shadowRoot), or
// “closed” — the Shadow DOM can only be accessed within the Web Component.
