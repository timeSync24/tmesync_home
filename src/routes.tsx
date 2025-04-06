import Home from "./page/Home";
import Reference from "./page/Reference";

export const appRoutes = [
  {
    path: "/",
    component: Home,
    requiresAuth: false,
  },
  {
    path: "/fill-reference",
    component: Reference,
    requiresAuth: false,
  },

  //   {
  //     path: "*",
  //     component: NotFound,
  //     requiresAuth: false,
  //   },
];
