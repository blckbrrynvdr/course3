import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import store from "./store";

Vue.use(VueRouter);

import skills from './components/skills.vue';
import works from './components/works.vue';
import articles from './components/articles.vue';


const routes = [ 
  {
    path: '/',
    component: skills
  },
  {
    path: '/works',
    component: works
  },
  {
    path: '/articles',
    component: articles
  }
];
const router = new VueRouter({ routes });


const guard = axios.create({
  baseURL: "https://webdev-api.loftschool.com/"
});

router.beforeEach((to,from,next) => {

  // const isUserAuthorized = store.state.user.isAuth;

  
// if (isUserAuthorized === false) {
  guard.get('/user', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(response => {
    next();
  }).catch(error => {
    alert('Вы не авторизованны!')
    // window.location.href = '/course3/dist';
    localStorage.removeItem('token');

  })
// } else {
//   next();
// }
  
})

export default router;