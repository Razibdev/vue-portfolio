import { createWebHistory, createRouter } from "vue-router";
const Test = () => import('@/components/Test/Test.vue');
// const LoginPage = () => import('@/components/main/LoginPage.vue');
// import User from '@/middleware/User';   
// import auth from '@/middleware/auth.js';
// import admin from '@/middleware/admin';

// const requireNoAuth = (to, from, next) => {
//   let user = User.logedIn();
//   if (user) {
//     next({ name: "Home-page" });
//   }
//   next();
// };

const routes = [
 
  // {
  //   path: "/login",
  //   name: "Login-page",
  //   component: LoginPage,
  //   // beforeEnter: requireNoAuth,
  // },


  {
    path: "/test",
    name: "test",
    component: Test,
    // meta:{
    //   middleware:[auth],
    // }
  }
];



// const needsAuth = false;
const router = createRouter({
  history: createWebHistory(),
  routes,
});


function nextFactory(context, middleware, index){
  const subsquentMiddleware = middleware[index];
  if(!subsquentMiddleware){
    return context.next;
  }

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index+1);
    subsquentMiddleware({...context, next:nextMiddleware});
  };
}



router.beforeEach((to, from, next) => {

  var nowTime = new Date().getTime();
  if( localStorage.getItem('expaire') != ''){
    if( nowTime >= localStorage.getItem('expaire') * 1000){
      // User.logOut();
      // next({ name: "Login-page" });
    }
  }
 

  if(to.meta.middleware){
    const middleware = Array.isArray(to.meta.middleware)? to.meta.middleware : [to.meta.middleware];
    const context = {from , next, router, to};
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({...context, next:nextMiddleware});
  }
  return next();
});

// router.beforeEach((to, from, next) => {
//   if(to.meta.requiresAuth && !needsAuth){
//     next({ name: 'Test' })
//     // return {
//     //   path: '/',
//     // }
//   }
//   next();
// });

// console.log(router);

export default router;   