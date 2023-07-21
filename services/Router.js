import Routes from "./Routes.js";

const Router = {
  init: () => {
    const routerLinks = document.querySelectorAll("[data-router-link]");
    routerLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const routeUrl = e.target.getAttribute("href");
        Router.go(routeUrl);
      });
    });
    // event handler for url changes
    window.addEventListener("popstate", (e) => {
      Router.go(e.state.route, false);
    });
    // check initial url
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log("go to", route);

    const routeData = Routes.find(r => r.path === route);
    let pageElement = null;

    console.log(routeData);


    if (!routeData) {
      console.log("route not found");
      console.log("route", route);
      // TODO: show 404 page
      return;
    } else {
      console.log("route found");
      history.pushState({ route }, "", route);
      pageElement = document.createElement(`${routeData.name}`);
    }

    const appMain = document.querySelector("main");
    appMain.innerHTML = "";
    appMain.appendChild(pageElement);
    window.scrollX = 0;
    window.scrollY = 0;
  },
}

export default Router;