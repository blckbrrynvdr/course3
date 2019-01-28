import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

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

export default router;