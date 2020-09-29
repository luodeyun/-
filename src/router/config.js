export default {
  routes: [
    {
      path: "/",
      redirect: "/home/rtstyle"
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/Home/Home"),
      children: [
        {
          path: "rtstyle",
          name: "style",
          component: () => import("@/views/right/menu/RightStyle")
        }
      ]
    }
  ],
  mode: "history"
};
