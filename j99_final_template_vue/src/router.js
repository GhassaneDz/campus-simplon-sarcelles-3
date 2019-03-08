import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from "./store/store";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      children: [
        {
          path: 'admin',
          name: 'admin-panel',
          component: () => import(/* webpackChunkName: "admin-panel" */ './views/AdminPanel.vue'),
          children: [
            {
              path: 'users',
              name: 'manage-users',
              component: () => import(/* webpackChunkName: "admin-panel" */ './components/TablerUsers.vue')
            },
            {
              path: "*",
              name: "404",
              component: () => import(/* webpackChunkName: "404" */ './views/NotFound.vue')
            }
          ] 
        },
        {
          path: 'infos',
          name: 'profile-infos',
          component: () => import(/* webpackChunkName: "profile-edit" */ './components/UserInfos.vue')
        },
        {
          path: 'edit',
          name: 'profile-edit',
          component: () => import(/* webpackChunkName: "profile-edit" */ './views/ProfileEdit.vue')
        },
      ],
      component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue')
    },
    {
      path: "*",
      name: "404-admin",
      component: () => import(/* webpackChunkName: "404" */ './views/NotFound.vue')
    }
  ]
});

router.afterEach(() => {

  store.commit("appEvents/resetMessage");
  
  if (store.getters["appEvents/navMobileStatus"] === true) {
    store.commit("appEvents/toggleNavMobile");
  }
});

export default router;
