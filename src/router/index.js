import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/common/layout.vue";
import PageLayout from "@/views/common/page-layout.vue";
import Login from "@/views/login/index.vue";
import NotFound from "@/views/error/not-found.vue";

import { permissions } from "@/config/permissions.config.js";
import NotAllowed from "@/views/error/not-allowed.vue";

Vue.use(VueRouter);

const menuRoutes = [
  {
    path: "dashboard",
    name: "dashboard",
    meta: {
      title: "控制台",
      icon: "dashboard",
      permission: permissions.DASHBOARD,
    },
    component: () => import("@/views/dashboard/index.vue"),
  },
  {
    path: "users",
    name: "user",
    meta: { title: "用户", icon: "user", permission: permissions.USER },
    component: PageLayout,
    children: [
      {
        name: "user-list",
        path: "list",
        meta: {
          title: "用户管理",
          icon: "usergroup",
          permission: permissions.USER_LIST,
        },
        component: () => import("@/views/user/index.vue"),
      },
      {
        name: "userRoles",
        path: "roles",
        meta: {
          title: "角色管理",
          icon: "secured",
          permission: permissions.USER_ROLES,
        },
        component: () => import("@/views/user/roles.vue"),
      },
    ],
  },
];

export const menuRootName = "menuRoot";
export const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "dashboard",
    name: menuRootName,
    children: [...menuRoutes],
  },
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/404",
    component: NotFound,
    name: "notFound",
  },
  {
    path: "/403",
    component: NotAllowed,
    name: "notAllowed",
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const createRouter = () => {
  return new VueRouter({
    routes,
  });
};

export const resetRouter = () => {
  const newRouter = createRouter();
  router.macher = newRouter.mather;
};

const router = createRouter();

export default router;
