const skills = {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    loadSkills: (state, skills) => (state.skills = skills),
    addSkillAction: (state, newSkill) => state.skills.push(newSkill),
    removeSkill: (state, skillId) =>
      (state.skills = state.skills.filter(skill => skill.id !== skillId)),
    editSkill:(state, editedSkill) => {
      state.skills = state.skills.map(skill => {
        return skill.id === editedSkill.id ? editedSkill : skill
      })
    }
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
    },
    edit({commit}, skill) {
      const formData = new FormData();

      Object.keys(skill).forEach(key => {
        const value = skill[key];
        formData.append(key, value);
      })
      
      this.$axios.post(`/skills/${skill.id}`, formData).then(response => {
        commit('editSkill', response.data.skill)
      });
    }
  }
};
export default skills;