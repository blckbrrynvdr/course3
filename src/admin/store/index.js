import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import articles from './modules/articles';
import works from './modules/works';
import skills from './modules/skills';
import user from './modules/user';

export default new Vuex.Store({
  modules: {
    articles,
    works,
    skills,
    user
  }
});