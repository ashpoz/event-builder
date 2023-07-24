import { createTemplate } from "../utils/webComponents.js";

export class SignupPage extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    createTemplate("signup-template", this);
  }
}
