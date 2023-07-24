import { createTemplate } from "../utils/webComponents.js";

export class EventBuilder extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    createTemplate("event-builder-template", this);
  }
}