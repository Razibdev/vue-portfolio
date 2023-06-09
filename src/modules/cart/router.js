const CartModule = () => import('./CartModule.vue');
const CartPage = () => import('./views/CartPage.vue');

const moduleRoute ={
    path:'/cart',
    component: CartModule,
    children:[
        {
            path:"/cart",
            component: CartPage
        },
        // {
        //     path:"/user/service/shop/checkout",
        //     component: CheckoutPage
        // }
    ]
}

export default router => {
    router.addRoute(moduleRoute);
  };
  