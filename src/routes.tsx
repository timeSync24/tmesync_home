import Home from "./page/Home";
import Reference from "./page/Reference";
import ReferenceSuccess from "./page/ReferenceSuccess";

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
  {
    path: "/reference-success",
    component: ReferenceSuccess,
    requiresAuth: false,
  },

  //   {
  //     path: "*",
  //     component: NotFound,
  //     requiresAuth: false,
  //   },
];
