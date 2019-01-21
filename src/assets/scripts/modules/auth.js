import Vue from "vue";
import axios from "axios";

new Vue({
  el: '#form-form',
  data() {
    return {
      user: {
        name:'',
        password:''
      }
    }
  },
  methods: {
    login() {
      axios.post("https://webdev-api.loftschool.com/login", this.user).then(response => {
        if (response.status === 200) {
          const ttl = Math.floor(Date.now() / 1000 + response.data.ttl);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("ttl", ttl);
          
          console.log(response.data.token);
          
          // window.location.href = "/admin";
        }
      })
    }
  }
})