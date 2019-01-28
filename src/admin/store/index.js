import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import articles from './modules/articles';
import works from './modules/works';
import skills from './modules/skills';

export default new Vuex.Store({
  modules: {
    articles,
    works,
    skills
  }
});