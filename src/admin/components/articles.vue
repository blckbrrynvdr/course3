<template lang="pug">
  #blog
    h2.content-title Страница "Блог"
      .blog
        .blog__fields
          h5 Добавить запись
          input(type="text" placeholder="Название" v-model="article.title")
          input(type="date" placeholder="Дата" v-model="article.date")
          textarea(v-model="article.content")
          button(
            type="button"
            @click="editmode ? editArticle(article) : addNewArticle(article)"
            ) {{editmode ? 'Изменить' : 'Добавить'}}
        .blog__articles
          h5 Последние записи
          table.table
            tr
              td Название
              td Дата
              td Содержание
              td
            tr(v-for="article in articles")
              td  {{article.title}}
              td  {{article.date}}
              td  {{article.content}}
              td
                button(type="button" @click="editExistedArticle(article)") ✎
                button(type="button" @click="removeArticle(article.id)") X


</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      editmode: false,
      article: {
        id: 0,
        title: "",
        date: "",
        content: ""
      }
    }
  },
  computed: {
    ...mapState('articles', {
      articles: state => state.articles
    })
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    ...mapActions({
      addNewArticle: 'articles/add',
      fetchArticles: 'articles/fetch',
      removeArticle: "articles/remove",
      editArticle: 'articles/edit'
    }),
    editExistedArticle(existedArticle) {
      this.editmode = true;
      this.article.id = existedArticle.id;
      this.article.title = existedArticle.title;
      this.article.date = existedArticle.date;
      this.article.content = existedArticle.content;
    }
  }
  
}
</script>

<style lang="scss">
  .blog {
    display: flex;
    justify-content: space-between;
  }
  .blog__fields {
    display: flex;
    flex-direction: column;
  }
  .blog__articles {
    width: 50%;
  }
  .table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  td {
    border: 1px solid black;
  }
}
</style>
