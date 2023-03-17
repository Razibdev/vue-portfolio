const AdminModule = () => import("./AdminModule.vue");
const AdminDashboard = () => import("./page/AdminDashboard.vue");

//admin login section
const AdminLogin = () => import('./auth/AdminLogin.vue');

//admin project section
const AdminAddProject = () => import('./project/AddProject.vue');
const AdminViewProject = () => import('./project/ViewProject.vue');

//menu section

const AdminAddMenu = () => import('./project/menu/AddMenu.vue');
const AdminViewMenu = () => import('./project/menu/viewMenu.vue');

//admin section contact
const AdminContactList = () => import('./contact/ContactList.vue');
//admin team section
const AdminTeamMemeberAdd = () => import('./team/AddTeamMemeber.vue');
const AdminTeamMemberView = () => import('./team/ViewTeamMember.vue');


//  import admin from "@/middleware/admin";


// const requireNoAuth = (to, from, next) => {
//   let user = User.logedIn();
//   if (user) {
//     next({ name: "Home-page" });
//   }
//   next();
// };


const moduleRoute = {
  path: "/admin/dashboard",
  component: AdminModule,
  children: [
    {
      path: "/admin/dashboard",
      component: AdminDashboard,
    },
    {
      path: "/admin/login",
      component: AdminLogin,
    },

    {
      path: "/admin/add_project",
      component: AdminAddProject,
    },

    {
      path: "/admin/view_project",
      component: AdminViewProject,
    },
    {
      path: "/admin/project/:pid/add_menu",
      component: AdminAddMenu,
    },
    {
      path: "/admin/project/:pid/view_menu",
      component: AdminViewMenu,
    },

    // admin contact list route
    {
      path: "/admin/contact-list",
      component: AdminContactList,
    },

    //admin team section
    {
      path: "/admin/add_team_member",
      component: AdminTeamMemeberAdd,
    },

    //admin team section add
    {
      path: "/admin/view_team_member",
      component: AdminTeamMemberView,
    },
  ],
};

export default (router) => {
  router.addRoute(moduleRoute);
};
