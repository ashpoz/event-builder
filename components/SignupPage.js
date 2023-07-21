import createTemplate from "../utils/createTemplate.js";

export class SignupPage extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    createTemplate("signup-template", this);
  }
}
