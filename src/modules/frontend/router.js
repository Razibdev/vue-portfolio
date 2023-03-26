const FrontModule = () => import("./FrontModule.vue");
const HomePage = () => import("./views/page/HomePage.vue");
const DemoPage = () => import("./views/page/DemoPage.vue");
const SinglePage = () => import("./views/page/SinglePage.vue");

const moduleRoute = {
  path: "/",
  component: FrontModule,
  children: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/demo",
      component: DemoPage,
    },
     {
      path: "/details-page/:id",
      component: SinglePage,
    }
  ],
};

export default (router) => {
  router.addRoute(moduleRoute);
};
