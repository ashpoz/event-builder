import createTemplate from "../utils/createTemplate.js";

export class ProfilePage extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    createTemplate("profile-template", this);
  }
}