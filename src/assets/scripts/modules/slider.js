import Vue from "vue";
import axios from 'axios';

const info = {
  template: "#slider-info",
  props: {
    work: Object
  }
};

const display = {
  template: "#slider-display",
  props: {
    work: Object
  }
};

const btns = {
  template: "#slider-btns",
  props: {
    works: Array,
    currentIndex: Number
  },
  methods: {
    slide(direction) {
      this.$emit('slide', direction);
    },
    transformWorksArrForBtn(direction) {
      const worksArray = [...this.works];
      const lastItem = worksArray[worksArray.length - 1];

      switch (direction) {
        case "next":
          worksArray.push(worksArray[0]);
          worksArray.shift();
        break;

        case "prev":
          worksArray.unshift(lastItem);
          worksArray.pop();
        break;
      }

      return worksArray[this.currentIndex];
    }
  }
};

new Vue ({
  el: "#slider-component",
  components: {
    info,
    display,
    btns
  },
  data: {
      works: [],
      currentWork: {},
      currentIndex: 0
  },
  watch: {
    currentIndex(value) {
      const worksAmount = this.works.length - 1;
      if (value > worksAmount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmount;

      this.currentWork = this.works[value];
    }
  },
  created() {
    axios.get("https://webdev-api.loftschool.com/works/69").then(response => {
      
        
      for (let work of response.data) {
        let obj = new Object();
        obj.id = work.id;
        obj.title = work.title;
        obj.techs = work.techs;
        obj.photo = `https://webdev-api.loftschool.com/${work.photo}`;
        obj.link = work.link;
        this.works.push(obj);
      }
      this.currentWork = this.works[0];
  });
    // this.works = require('../../../data/works.json'); 
      this.currentWork = this.works[0];
    
  },
  methods: {
    handleSlide(direction) {
      switch(direction) {
        case "next":
          this.currentIndex = this.currentIndex + 1
        break
        case "prev":
          this.currentIndex = this.currentIndex - 1
        break
      }
    }
  },
  template: "#slider-root",
});