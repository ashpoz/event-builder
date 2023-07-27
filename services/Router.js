import Routes from "./Routes.js";

// helper function to match route including dynamic routes
// TODO: handle params and test nested routes
const handleRoute = (route) => {
  let routeMatch = null;
  Object.keys(Routes).forEach(key => {
    // replace dynamic routes with regex
    const regexRoute = new RegExp('^' + Routes[key].path.replace(/:\w+/g, '(\\w+)') + '$');
    // check if route matches
    if (route.match(regexRoute)) {
      routeMatch = Routes[key];
    }
  });
  // return route object or null
  return routeMatch;
}

const updateHistory = (route) => {
  if (history.pushState) {
    history.pushState({ route }, null, route);
  }
}

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

    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let pageElement = null;
    const currentRoute = handleRoute(route);

    if (currentRoute) {
      console.log("route found", currentRoute);
      pageElement = document.createElement(`${currentRoute.name}`);
    } else {
      console.log("route not found");
      // TODO: handle 404
    }

    const appMain = document.querySelector("main");
    appMain.innerHTML = "";
    appMain.appendChild(pageElement);
    window.scrollX = 0;
    window.scrollY = 0;
  },
}

export default Router;