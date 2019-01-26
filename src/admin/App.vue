<template lang="pug">
  .wrapper
    app-header
    tabs
    .content
      router-view
      //- blog
      //- skills
      //- works
</template>

<script>
import header from "./components/header";
import tabs from "./components/tabs";
import blog from "./components/blog";
import skills from "./components/skills";
import works from "./components/works";

export default {
  components: {
    appHeader: header,
    tabs,
    blog,
    skills,
    works
  }
};
</script>

<style lang="scss">
  body, html {
    margin: 0;
    height: 100%;
  }
  body {
    font-family: 'roboto', sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;

  }

  .wrapper {
    height: 100%;
  }

  ul {
  padding: 0;
  margin: 0;
    li {
      list-style: none;
    }
  }

  * {
    box-sizing: border-box;
  }
</style>

