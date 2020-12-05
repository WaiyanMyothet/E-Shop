import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
        path:"/",
        component:()=>import('@/views/Home.vue')
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
    },
  ],
});
export default router;
