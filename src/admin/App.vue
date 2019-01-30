<template lang="pug">
  .container
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
import { mapMutations } from 'vuex';


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
    ...mapMutations({
      authorize: 'user/authorize'
    }),
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
            this.authorize();

            
            
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
  h1,h2,h3,h4 {
    margin: 0;
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

  input {
    border: 0;
    border-radius: 6px;
    line-height: 40px;
    padding: 0 10px;
  }

  table {
    border-spacing: 0 10px;
    
  }

  .wrapper {
    height: 100%;
    overflow: hidden;
  }
  .container {
    height: 100%;
    background: url(./images/admin-bg.png) center center/cover no-repeat;
  }
  .content {
    padding: 0 20px;
  }
  .content-title {
    width: 100%;
  }
  .green-btn {
    line-height: 40px;
    padding: 0 20px;
    background-color: $coral;
    border-radius: 6px;
    border: 0;
    color: #fff;
  }
  .edit-btn {
    border: none;
    background: none;
    cursor: pointer;
    transform: rotateY(180deg);
  }
  .delete-btn {
    border: none;
    background: none;
    cursor: pointer;
    font-weight: 700;
    color: red;
  }
</style>

