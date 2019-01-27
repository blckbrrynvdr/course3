import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

import skills from './components/skills.vue';
import works from './components/works.vue';
import blog from './components/blog.vue';


const routes = [ 
  {
    path: '/skills',
    component: skills
  },
  {
    path: '/works',
    component: works
  },
  {
    path: '/blog',
    component: blog
  }
];
const router = new VueRouter({ routes });

export default router;