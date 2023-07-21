const API = {
  url: "data/event-data.json",
  getEvents: async () => {
    const response = await fetch(API.url);
    const events = await response.json();
    return events;
  }
}