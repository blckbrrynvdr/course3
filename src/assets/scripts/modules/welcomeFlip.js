import Vue from "vue";
import axios from "axios";

const authBtn = {
  props: {
    activeSide: String
  },
  template: "#auth-btn"
};

const sideA = {
  template: "#side-a"
};

const sideB = {
  template: "#side-b",
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
      errorLogin: "",
      errorPass: "",
      loginVerify: "true",
      passVerify: "true",
      human: "",
      picked: "human-no",
      activateModal: "true",
      humanText: ""
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
      .catch( error => {
        if(error.response.status === 401) {
          this.activateModal = false;
          this.humanText = 'Неверный логин или пароль!';
          this.clearSubmit();
        }
      })
    },
    submit() {
      if (!this.user.name || this.user.name === "") {
       this.loginVerify = false;
       this.errorLogin = "Вы не ввели логин!";
      } else {
        this.loginVerify = true;
      }
      if (this.loginVerify) {
        if (!this.user.password || this.user.password === "") {
          this.passVerify = false;
          this.errorPass = "Вы не ввели пароль!";
         } else {
           this.passVerify = true;
         }
      }

      if (this.passVerify && this.loginVerify) {
        if (!this.human) {
          this.activateModal = false
          this.humanText = "роботам тут не место!"
        }
        if (this.picked === 'human-no') {
             this.activateModal = false
             this.humanText = "роботам тут не место!"
           }
      }
      
      if(
        this.loginVerify &&
        this.passVerify &&
        this.picked === 'human-yes'
      ) {
        this.login();
        // this.activateModal = false
        // this.humanText = "Вы авторизованы!"
        // this.clearSubmit();

      }
    },
    clearInput() {
      this.loginVerify = true;
      this.passVerify = true;
    },
    clearSubmit() {
      this.user.name = '';
      this.user.password = ''
    },
    closeModal() {
        this.activateModal = true;
    }
  }
};

new Vue({
  el: "#welcome-page-component",
  components: {
    sideA,
    sideB,
    authBtn
  },
  data: {
    activeSide: "sideA"
  },
  methods: {
    handleSideChange() {
      this.activeSide = this.activeSide === "sideA" ? "sideB" : "sideA";
    },
    outOfForm(e) {
      if (
        e.target.classList.contains("welcome") &&
        this.activeSide === "sideB"
      ) {
        this.handleSideChange();
      }
    }
  },
  template: "#welcome-page"
});


// const buttonAuth = document.querySelector('.auth__btn');
// const buttonBack = document.querySelector('.auth__back');
// const authPanel = document.querySelector('.welcome__panel');

// buttonAuth.addEventListener('click',function () {
//   authPanel.style.transform = 'rotateY(180deg)';
//   buttonAuth.style.opacity = '0';
//   setTimeout(() => {
//     authPanel.classList.add('welcome__panel--sideB');
//     authPanel.style.transform = 'rotateY(0deg)';
//     buttonAuth.style.display = 'none';
//   }, 350);
// })

// buttonBack.addEventListener('click',function (e) {
//   e.preventDefault();
//   authPanel.style.transform = 'rotateY(180deg)';
//   buttonAuth.style.display = 'inline-block';
//   setTimeout(() => {
//     authPanel.classList.remove('welcome__panel--sideB');
//     authPanel.classList.add('welcome__panel--sideA');
//     authPanel.style.transform = 'rotateY(0deg)';
//     buttonAuth.style.opacity = '1';
//   }, 350);
// })

