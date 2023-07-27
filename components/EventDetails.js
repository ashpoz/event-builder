import { createTemplate } from "../utils/webComponents.js";
import { getEventById } from "../services/Events.js";


export class EventDetails extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    createTemplate("event-page-template", this);
    this.render();
  }

  async render() {
    if (this.dataset.eventId) {
      let event = await getEventById(this.dataset.productId);
      this.querySelector("h3").innerHTML = event.name;
    }
  }
}