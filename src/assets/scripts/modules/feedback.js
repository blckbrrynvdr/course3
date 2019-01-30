import Vue from 'vue';

new Vue({
  el:"#feedback-form",
  data() {
    return {
      name: "",
      mail: "",
      message: "",
      errorName: "",
      errorMail: "",
      nameVerify: "true",
      mailVerify: "true",
      activateModal: "true",
      modalText: ""
    }
  },
  methods: {
    submit() {
      const regexp = /@/

      if (!this.name || this.name === "") {
       this.nameVerify = false;
       this.errorName = "Вы не указали имя!";
      } else {
        this.nameVerify = true;
      }
      if (this.nameVerify) {
        if (!this.mail || this.mail === "") {
          this.mailVerify = false;
          this.errorMail = "Вы не ввели e-mail!";
         } else if (!regexp.test(this.mail)) {
          this.errorMail = 'Некорректный email!'
          this.mailVerify = false
         }else{
           this.mailVerify = true;
         }
      }
      
      if( this.nameVerify && this.mailVerify) {
        this.activateModal = false
        this.modalText = "сообщение отправлено(нет)"
        this.clearSubmit();
      }
    },
    clearInput() {
      this.nameVerify = true;
      this.mailVerify = true;
    },
    clearSubmit() {
      this.name = '';
      this.mail = '';
      this.message = '';
    },
    closeModal() {
        this.activateModal = true;
    }
  }

})