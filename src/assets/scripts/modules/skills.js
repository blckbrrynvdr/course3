import Vue from 'vue';
import axios from 'axios';

const skill = {
  template: "#skill",
  props: {
    skill: {}
  },
  methods: {
    drawCircleDependsOnPercentage() {
      const circle = this.$refs["circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
  
      const percent = (dashOffset / 100) * (100 - this.skill.percents);
  
      circle.style.strokeDashoffset = percent;
    }
  },
  mounted() {
    this.drawCircleDependsOnPercentage();
  }
}

const skillsRow = {
  template: "#skills-item",
  components: {
    skill
  },
  props: {
    skills: Array,
    type: Object
  }
}

new Vue ({
  el: "#skills-component",
  components: {
    skillsRow
  },
  data: {
      skills: [],
      types: [
        { id: 0, name: "Frontend" },
        { id: 1, name: "Backend" },
        { id: 2, name: "Workflow" }
      ]
  },
  created() {
    axios.get("https://webdev-api.loftschool.com/skills/69").then(response => {
          
      this.skills = response.data;
    });
    // this.skills = require('../../../data/skillls.json');
    // console.log(this.skills);
    
  },
  template: "#skills-list",
});