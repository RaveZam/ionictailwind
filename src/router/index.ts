import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/Homepage",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/Home",
      },
      {
        path: "Home",
        component: () => import("@/views/TabsPages/Homepage.vue"),
      },
      {
        path: "Videos",
        component: () => import("@/views/TabsPages/Videos.vue"),
      },
      {
        path: "Friends",
        component: () => import("@/views/TabsPages/Friends.vue"),
      },
      {
        path: "Marketplace",
        component: () => import("@/views/TabsPages/Marketplace.vue"),
      },
      {
        path: "Notifications",
        component: () => import("@/views/TabsPages/Notifications.vue"),
      },
      {
        path: "Menu",
        component: () => import("@/views/TabsPages/Menu.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
