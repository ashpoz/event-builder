import { createTemplate } from "../utils/webComponents.js";
import { loadCSS } from "../utils/loadFiles.js";

export class EventsPage extends HTMLElement {
  constructor() {
    super();
  };

  connectedCallback() {
    createTemplate("event-list-template", this);
    this.render();
  }

  render() {
    if (app.store.events) {
      this.querySelector("#event-list").innerHTML = "";
      Object.keys(app.store.events).forEach(key => {
        const event = app.store.events[key];
        const eventItem = document.createElement("li");
        eventItem.innerHTML = `
          <a data-event-id="${event.id}" onclick="app.router.go('/event/${event.id}'); event.preventDefault()">
            <h3>${event.name}</h3>
            <p>${event.date}</p>
            <p>${event.time}</p>
            <p>${event.location}</p>
          </a>
        `;
        this.querySelector("#event-list").appendChild(eventItem);
      });
    }
  }
}