<template lang="pug">
    tr(v-if="editmode === false") 
      td.skill-title {{skill.title}}
      td.skill-percent {{skill.percents}} %
      td.skill-change
        button(
          type="button"
          @click="editExistedSkill(skill)"
          ).edit-btn ✎
      td.skill-delete
        button(type="button" @click="removeSkill(skill.id)").delete-btn X
      
    tr(v-else)
      td.skill-add__title
        input(
          type="text"
          placeholder="Название"
          v-model="newSkill.title"
        )
      td.skill-add__percent
        input(
          type="text"
          placeholder="%"
          v-model="newSkill.percents"
        )
        span %
      td
      td.skill-add__button
        button(
          type="button"
          @click="addNewSkill(newSkill)"
        ).green-btn Добавить

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
      removeSkill: "skills/remove",
      editSkill: "skills/edit"
    }),
    addNewSkill(newSkill) {
      this.addSkillAction(newSkill).then(response => {
        this.newSkill.title = "";
        this.newSkill.percents = "";
        response;
      })
    },
    editExistedSkill(existedSkill) {
      this.editSkill(this.newSkill).then(response => {
      this.newSkill.title = existedSkill.title;
      this.newSkill.percents = existedSkill.percents;
      this.newSkill.category = existedSkill.category;
      response;
      })
      
    }
    
  }
};
</script>

<style lang="scss">
  .skill-add__title {
    width: 40%;
    padding: 10px 0;
    input {
      width: 90%;
    }
  }
  .skill-add__percent {
    text-align: right;
    input {
      width: 40px;
    }
  }
  .skill-percent {
    text-align: right;
  }
</style>
