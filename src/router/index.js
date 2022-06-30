import Vue from "vue";
import VueRouter from "vue-router";
import Store from "@/store";
let token = Store.state.user.token;
let whiteList = ["Login", "404"];
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if(whiteList.includes(to.name)){
    next()
    return
  } 
  if(token){
    next()
  } else {
    next({
      path:'/login'
    })
  }
});
export default router;
