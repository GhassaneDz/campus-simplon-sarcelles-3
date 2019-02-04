import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/simplantes",
      name: "simplantes",
      component: () => import("./views/Simplantes.vue")
    },
    {
      path: "/first-crud",
      name: "firstCRUD",
      component: () => import("./views/CRUD.vue"),
      children: [
        {
          path: "view-users",
          name: "viewUsers",
          component: () => import("./components/users/TablerUsers.vue")
        },
        {
          path: "create-user",
          name: "createUser",
          props: { title: "Let's create a new user" },
          component: () => import("./components/users/FormUser.vue")
        },
        {
          path: "update-user/:id",
          name: "updateUser",
          props: { title: "Lets update update this user" },
          component: () => import("./components/users/FormUser.vue")
        }
      ]
    },
    {
      path: "/10-percent-game",
      name: "10PercentGame",
      component: () => import("./views/10PercentGame.vue")
    },
    {
      path: "*",
      name: "404",
      component: () => import("./views/404.vue")
    }
  ]
});
