<template lang="pug">
  #blog
    h2.content-title Страница "Блог"
    .blog
      .blog__fields
        h5 Добавить запись
        input(type="text" placeholder="Название" v-model="article.title")
        input(type="date" placeholder="Дата" v-model="article.date")
        textarea(v-model="article.content").textarea
        button(
          type="button"
          @click="editmode ? editArticle(article) : addNewArticle(article)"
          ).green-btn {{editmode ? 'Изменить' : 'Добавить'}}
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
              button(type="button" @click="editExistedArticle(article)").edit-btn ✎
              button(type="button" @click="removeArticle(article.id)").delete-btn X


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
  .textarea {
    resize: none;
  }
  .table {
    font-size: 14px;
    border-radius: 10px;
    border-spacing: 0;
    text-align: center;
    th {
    background: #FFF;
    color: black;
    padding: 10px 20px;
    }
    tr:nth-child(even) {
      background: #E8E6D1;
    }
    tr:nth-child(odd) {
      background: white;
    }
    th:first-child, td:first-child {
    text-align: left;
    }
    th:first-child {
    border-top-left-radius: 10px;
    }
    th:last-child {
    border-top-right-radius: 10px;
    border-right: none;
    }
    td {
    padding: 10px 20px;
    background: #FFF;
    }
    tr:last-child td:first-child {
    border-radius: 0 0 0 10px;
    }
    tr:last-child td:last-child {
    border-radius: 0 0 10px 0;
    }
    tr td:last-child {
    border-right: none;
    }
  }
</style>
