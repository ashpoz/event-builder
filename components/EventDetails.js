import { createTemplate } from "../utils/webComponents.js";
import { getEventById } from "../services/Events.js";


export class EventDetails extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    createTemplate("event-details-template", this);
    this.render();
  }

  async render() {
    // get event id from url
    const eventId = window.location.pathname.match(/\/event\/(\d+)/)[1];

    if (eventId) {
      this.event = await getEventById(Number(eventId));
      // update event details
      this.querySelector(".event-name").innerHTML = this.event.name;
      this.querySelector(".event-date").innerHTML = this.event.date;
      this.querySelector(".event-time").innerHTML = this.event.time;
      this.querySelector(".event-location").innerHTML = this.event.location;
      this.querySelector(".event-description").innerHTML = this.event.description;
    }
  }
}