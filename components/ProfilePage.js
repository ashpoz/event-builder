import { createTemplate } from "../utils/webComponents.js";

export class ProfilePage extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    createTemplate("profile-template", this);
  }
}