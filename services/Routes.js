const Routes = [
  {
    name: "login-page",
    path: "/login",
    template: "login-template"
  },
  {
    name: "signup-page",
    path: "/signup",
    template: "signup-template"
  },
  {
    name: "profile-page",
    path: "/profile",
    template: "profile-template"
  },
  {
    name: "events-page",
    path: "/",
    template: "event-list-template"
  },
  {
    name: "event-page",
    path: "/event/:id",
    template: "event-page-template"
  },
  {
    name: "event-builder",
    path: "/create",
    template: "event-builder-template"
  },
]

export default Routes;