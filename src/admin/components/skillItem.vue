<template lang="pug">
  tr(v-if="editmode === false") 
    td.skill-title {{skill.title}}
    td.skill-percent {{skill.percents}} %
    td.skill-change
      button(
        type="button"
        @click="editExistedSkill(skill)"
        ) ✎
    td.skill-delete
      button(type="button" @click="removeSkill(skill.id)") X
    
  tr(v-else)
    td.skill-add__title
      input(
        type="text"
        placeholder="new skill"
        v-model="newSkill.title"
      )
    td.skill-add__percent
      input(
        type="text"
        placeholder="percent"
        v-model="newSkill.percents"
      )
      span %
    td.skill-add__button
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
      this.newSkill.title = existedSkill.title;
      this.newSkill.percents = existedSkill.percents;
      this.newSkill.category = existedSkill.category;
    }
    
  }
};
</script>

<style lang="scss">
  .skill-add__percent {
    input {
      width: 22px;
    }
  }
  .skill-percent {
    text-align: right;
  }
  .skill-change {
    text-align: right;
    button {
      transform: rotateY(180deg);
      border: none;
      background: none;
      cursor: pointer;
    }
  }
  .skill-delete {
    button {
      background: none;
      border: none;
      font-weight: bold;
      color: red;
      cursor: pointer;
    }
  }
</style>
