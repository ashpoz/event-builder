import { createTemplate } from "../utils/webComponents.js";

export class LoginPage extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    createTemplate("login-template", this);
  }
}