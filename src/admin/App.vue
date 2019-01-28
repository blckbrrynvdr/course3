<template lang="pug">
  .wrapper
    app-header
    tabs
    .content
      router-view
      .user
        form
          input(
            type="text"
            placeholder="login"
            v-model="user.name"
            ) 
          input(
            type="password"
            placeholder="password"
            v-model="user.password"
            )
          button(
            type="button"
            @click="sendData"
            ) Отправить

</template>

<script>
import header from "./components/header";
import tabs from "./components/tabs";
import articles from "./components/articles";
import skills from "./components/skills";
import works from "./components/works";

import axios from "axios";
import appRequests from "./requests.js";


export default {
  components: {
    appHeader: header,
    tabs,
    articles,
    skills,
    works
  },
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    sendData() {
      // console.log(this.user);
      
      axios.post("https://webdev-api.loftschool.com/login", this.user).then(
        response => {
          if (response.status === 200) {
            const token = response.data.token;
            const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
            localStorage.setItem("token", token);
            localStorage.setItem("ttl", ttl);
            
            console.log('успешная авторизация');

            appRequests.defaults.headers['Authorization'] = `Bearer ${token}`;

            
            
            // window.location.href = "/admin"
          
          }
      })
    }
  }
};
</script>

<style lang="scss">
  body, html {
    margin: 0;
    height: 100%;
  }
  body {
    font-family: 'Roboto', Helvetica, sans-serif;
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
  .content {
    padding: 0 20px;
  }
  .content-title {
    width: 100%;
  }
</style>

