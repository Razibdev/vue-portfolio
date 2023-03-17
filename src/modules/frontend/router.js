const FrontModule = () => import("./FrontModule.vue");
const HomePage = () => import("./views/page/HomePage.vue");

const moduleRoute = {
  path: "/",
  component: FrontModule,
  children: [
    {
      path: "/",
      component: HomePage,
    }
  ],
};

export default (router) => {
  router.addRoute(moduleRoute);
};
