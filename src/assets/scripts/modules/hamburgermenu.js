import Vue from 'vue';

new Vue({
  el: "#fullscreen-menu",
  data: {
    changed: false
  },
  methods: {
      handleChange () {
          this.changed = !this.changed
      }
  }
});
