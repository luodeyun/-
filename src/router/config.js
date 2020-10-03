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
        },
        {
          path: "rtsongs",
          name: "songs",
          component: () => import("@/views/right/menu/RightSongs"),
          meta: { index: 8 }
        },
        {
          path: "rtanchor",
          name: "anchor",
          component: () => import("@/views/right/menu/RightAnchor"),
          meta: { index: 9 }
        },
        {
          path: "rtlist",
          name: "list",
          component: () => import("@/views/right/menu/RightList"),
          meta: { index: 10 }
        },
        {
          path: "rtnewsing",
          name: "newsing",
          component: () => import("@/views/right/menu/RightNewsing"),
          meta: { index: 11 }
        },
        {
          path: "rtsinger",
          name: "singer",
          component: () => import("@/views/right/menu/RightSinger"),
          meta: { index: 12 }
        }
      ]
    }
  ],
  mode: "history"
};
