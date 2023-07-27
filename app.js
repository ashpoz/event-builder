import Router from "./services/Router.js";
import Store from "./services/Store.js";
import { getEvents } from "./services/Events.js";
import { defineCustomElements } from "./utils/webComponents.js";
import { LoginPage } from "./components/LoginPage.js";
import { SignupPage } from "./components/SignupPage.js";
import { ProfilePage } from "./components/ProfilePage.js";
import { EventsPage } from "./components/EventsPage.js";
import { EventDetails } from "./components/EventDetails.js";
import { EventBuilder } from "./components/EventBuilder.js";

const components = {
  "login-page": LoginPage,
  "signup-page": SignupPage,
  "profile-page": ProfilePage,
  "events-page": EventsPage,
  "event-builder": EventBuilder,
  "event-page": EventDetails
}

// define custom elements
defineCustomElements(components);

window.app = {};
app.router = Router;
app.store = Store;

window.addEventListener("DOMContentLoaded", () => {
  getEvents();
  app.router.init();
});