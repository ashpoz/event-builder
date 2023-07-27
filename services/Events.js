import API from "./API.js";

export async function getEvents() {
  app.store.events = await API.getEventData();
}

export async function getEventById(id) {
  let event = null;
  if (app.store.events == null) {
    await getEvents();
  }
  Object.keys(app.store.events).forEach(key => {
    if (app.store.events[key].id == id) {
      event = app.store.events[key];
    }
  });
  return event;
}