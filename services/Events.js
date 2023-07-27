import API from "./API.js";

export async function getEvents() {
  app.store.events = await API.getEventData();
}


export async function getEventById(id) {
  if (app.store.events == null) {
    await loadData();
  }
  Object.keys(app.store.events).forEach(key => {
    if (app.store.events[key].id == id) {
      return app.store.events[key];
    }
  });
  return null;
}