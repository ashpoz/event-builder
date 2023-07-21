import createTemplate from "../utils/createTemplate.js";

export class EventsPage extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    createTemplate("event-list-template", this);
  }
}