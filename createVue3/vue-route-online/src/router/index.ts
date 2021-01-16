import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";
const menu1 = () =>
  import(/* webpackChunkName: "about" */ "../views/menu1.vue");
const menu2 = () =>
  import(/* webpackChunkName: "about" */ "../views/menu2.vue");
const menu3 = () =>
  import(/* webpackChunkName: "about" */ "../views/menu3.vue");
const menu4 = () =>
  import(/* webpackChunkName: "about" */ "../views/menu4.vue");
  
const routes: Array<RouteRecordRaw> = [
  
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      //   {
      //     path: "/menu1",
      //     component: () => import("../views/menu1.vue"),
      //     name: "pagePermissions",
      //     meta: {
      //       title: "pagePermission",
      //       roles: ["admin"], // or you can only set roles in sub nav
      //     },
      //   },
      //   {
      //     path: "/menu2",
      //     component: () => import("../views/menu2.vue"),
      //     name: "pagePermission",
      //     meta: {
      //       title: "pagePermission",
      //       roles: ["admin"], // or you can only set roles in sub nav
      //     },
      //     children: [
      //       {
      //         path: "menu3",
      //         component: () => import("../views/menu3.vue"),
      //         name: "pagePermissionww",
      //         meta: {
      //           title: "pagePermission",
      //           roles: ["admin"], // or you can only set roles in sub nav
      //         },
      //       },
      //     ],
      //   },
    ],
  },
  // 暂时问题待处理
 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to.path);
  
  console.log("router-afteyunxing");
  // if (!store.getters.newRoutes) {
  const newRoutes = [
    {
      path: "/menu1",
      name: "menu1",
      component: menu1,
    },
    {
      path: "/menu2",
      name: "menu2",
      component: menu2,
    },
    {
      path: "/menu3",
      name: "menu3",
      component: menu3,
    },
    {
      path: "/menu4",
      name: "menu4",
      component: menu4,
    },
  ];
  store.commit("addRoutes", newRoutes);
  // store.commit("addRoutess", routes)
  // console.log(newRoutes);

  // router.addRoutes(newRoutes);
  next();
});
console.log(router);

export default router;
