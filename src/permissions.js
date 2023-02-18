import router from "@/router/index.js";
import store from "@/store/index.js";

const whiteList = ["/login", "/403", "/404"];

router.beforeEach((to, from, next) => {
  const hasToken = store.state.token;

  if (!hasToken) {
    whiteList.indexOf(to.path) !== -1
      ? next()
      : next(`login?redirect=${to.path}`);
  }

  if (hasToken && to.path === "/login") {
    next({ path: "/" });
  }

  // 1. 判断当前要访问的路由是否合法，如果合法执行下去， 如果不合法，我就拦截到403。
  // to: 访问的路由。 user permissionRoutes
  // permissionRouteNamesList.includes(to.name)

  const hasPermissions = store.getters.permissionRoutesNameList.includes(
    to.name
  );
  if (!hasPermissions && whiteList.indexOf(to.path) === -1) {
    next({ path: "/403" });
  }
  next();
});
