import Router from "./services/Router.js";
import defineCustomElements from "./utils/defineCustomElements.js";
import { LoginPage } from "./components/LoginPage.js";
import { SignupPage } from "./components/SignupPage.js";
import { ProfilePage } from "./components/ProfilePage.js";
import { EventsPage } from "./components/EventsPage.js";
import { EventBuilder } from "./components/EventBuilder.js";

const components = {
  "login-page": LoginPage,
  "signup-page": SignupPage,
  "profile-page": ProfilePage,
  "events-page": EventsPage,
  "event-builder": EventBuilder
}

// define custom elements
defineCustomElements(components);

window.app = {};
app.router = Router

window.addEventListener("DOMContentLoaded", () => {
  app.router.init();
});