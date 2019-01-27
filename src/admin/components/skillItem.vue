<template lang="pug">
  .skill(v-if="editmode === false") 
    .skill-title {{skill.title}}
    .skill-percent {{skill.percents}} %
    .skill-delete
      button(type="button" @click="removeSkill(skill.id)") X
    
  .skill-add(v-else)
    .skill-add__title
      input(
        type="text"
        placeholder="new skill"
        v-model="newSkill.title"
      )
    .skill-add__percent
      input(
        type="text"
        placeholder="percent"
        v-model="newSkill.percents"
      )
      span %
    .skill-add__button
      button(
        type="button"
        @click="addNewSkill(newSkill)"
      ) Добавить
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: {
      type: Object,
      default: () => {}
    },
    editmode: {
      type: Boolean,
      default: false
    },
    typeId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: 0,
        category: this.typeId
      }
    };
  },
  methods: {
    ...mapActions({
      addSkillAction: "skills/add",
      removeSkill: "skills/remove"
    }),
    addNewSkill(newSkill) {
      this.addSkillAction(newSkill).then(response => {
        this.newSkill.title = "";
        this.newSkill.percents = "";
        console.log(response);
      })
    }
    
  }
};
</script>

<style lang="scss">
  .skill {
    display: flex;
  }
</style>
