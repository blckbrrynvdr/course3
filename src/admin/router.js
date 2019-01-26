import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import skills from './components/skills.vue';
import works from './components/works.vue';
import blog from './components/blog.vue';

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
    path: '/blog',
    component: blog
  }
];

export default new VueRouter({routes});