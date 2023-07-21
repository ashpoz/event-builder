import createTemplate from "../utils/createTemplate.js";

export class LoginPage extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    createTemplate("login-template", this);
  }
}