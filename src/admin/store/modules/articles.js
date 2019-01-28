const articles = {
  namespaced: true,
  state: {
    articles: []
  },
  mutations: {
    addNewArticle: (state, article) => state.articles.push(article),
    fillUpArticles: (state, articles) => state.articles = articles,
    removeArticle: (state, id) =>
      (state.articles = state.articles.filter(article => article.id !== id)),
    editArticle: (state, editedArticle) => {
      state.articles = state.articles.map(article => {
        return article.id === editedArticle.id ? editedArticle : article
      })
    }
  },
  actions: {
    add({commit}, article) {
      const formData = new FormData();


      Object.keys(article).forEach(key => {
        const value = article[key];
        formData.append(key, value);
      })
      
      this.$axios.post('/posts', formData).then(response => {
        commit('addNewArticle', response.data)
      })
    },
    fetch({commit}, article) {
      this.$axios.get('/posts/69').then(response => {
        commit('fillUpArticles', response.data);
      })
    },
    remove({ commit }, id) {
      this.$axios.delete(`/posts/${id}`).then(response => {
        commit("removeArticle", id);
      });
    },
    edit({commit}, article) {
      const formData = new FormData();


      Object.keys(article).forEach(key => {
        const value = article[key];
        formData.append(key, value);
      })

      
      this.$axios.post(`/posts/${article.id}`, formData).then(response => {
        commit('editArticle', response.data.article)
      });
    }
  }
};

export default articles;