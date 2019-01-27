const skills = {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    loadSkills: (state, skills) => (state.skills = skills),
    addSkillAction: (state, newSkill) => state.skills.push(newSkill),
    removeSkill: (state, skillId) =>
      (state.skills = state.skills.filter(skill => skill.id !== skillId))
  },
  actions: {
    fetch({ commit }) {
      this.$axios.get("/skills/69").then(
        response => {
          commit("loadSkills", response.data);
        },
        error => {
          console.error(error);
        }
      );
    },
    add({ commit }, skill) {
      return this.$axios.post("/skills", skill).then(
        response => {
          commit("addSkillAction", response.data);
          return response;
        }
      ).catch(error => {
        throw error
      });
    },
    remove({ commit }, skillId) {
      this.$axios.delete(`/skills/${skillId}`).then(
        response => {
          commit("removeSkill", skillId);
        },
        error => {
          console.error(error);
        }
      );
    }
  }
};
export default skills;