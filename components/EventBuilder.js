import createTemplate from "../utils/createTemplate.js";

export class EventBuilder extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    createTemplate("event-builder-template", this);
  }
}