const API = {
  url: "data/event-data.json",
  getEventData: async () => {
    const response = await fetch(API.url);
    const events = await response.json();
    return events;
  }
}

export default API;