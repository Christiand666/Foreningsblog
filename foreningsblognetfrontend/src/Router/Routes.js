const {createRouter, createWebHistory } = require("vue-router");
import Login from "../components/Login.vue"
import Events from "../components/Events.vue"
import CreateEvent from "../components/CreateEvent.vue"
import Register from "../components/Register.vue"
import Home from "../components/Home.vue";

const Notfound = () => import("../components/ErrorPages/404.vue")


const routes = [
    {
      path: "/",
      alias: ['/home'],
      name:"Home",
      component: Home,
    },
    {
      path: "/login",
      name:"Login",
      component: Login,
    },
    {
      path: "/register",
      name:"Register",
      component: Register,
    },
    {
      path: "/events",
      name:"Events",
      component: Events,
    },
    {
      path: "/events/create",
      name:"CreateEvent",
      component: CreateEvent,
    },
    {
      path: "/404",
      name: "404",
      component: Notfound,
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
 /* router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');

    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
    if (authRequired) {
      next('/login');
    } else {
      next();
    }
  }); */
  export default router;