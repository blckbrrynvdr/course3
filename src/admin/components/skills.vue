<template lang="pug">
  #about
    h2.content-title Страница "обо мне"
    skills-row(
      v-for="type in types"
      :key="type.id"
      :type="type"
      :skills="skills"
    )

</template>

<script>
import skillsRow from "./skillsRow";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    skillsRow
  },
  data() {
    return {
      types: [
        { id: 0, name: "Frontend" },
        { id: 1, name: "Backend" },
        { id: 2, name: "Workflow" }
      ]
    };
  },
  computed: {
    ...mapState("skills", {
      skills: state => state.skills
    })
  },
  created() {
    this.fetchSkills();
  },
  methods: {
    ...mapActions({
      fetchSkills: "skills/fetch"
    })
  }
};
</script>

<style lang="scss">
  #about {
    display: flex;
    flex-wrap: wrap;

  }
</style>
