import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import blog from './modules/blog';
import works from './modules/works';
import skills from './modules/skills';

export default new Vuex.Store({
  modules: {
    blog,
    works,
    skills
  }
});