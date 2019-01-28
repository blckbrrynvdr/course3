<template lang="pug">
  #works
    h2.content-title Страница "Мои работы"
      .works
        .works__fields
          input(type="text" placeholder="Название проекта" v-model="work.title")
          br
          input(type="text" placeholder="Технологии" v-model="work.techs")
          br
          input(type="text" placeholder="Ссылка" v-model="work.link")
          br
          input(type="file" @change="renderPicAndAddFile")
          hr
          .preview(:style="{backgroundImage: previewPic}")
          hr
          button(type="button" @click="editmode ? editWork(work) : addNewWork(work)" v-text="editmode ? 'изменить' : 'добавить новую'") 
        .works__table
          table.table
            tr
              td Название
              td Технологии
              td Ссылка
              td Превью
              td
            tr(v-for="work in works")
              td {{work.title}}
              td {{work.techs}}
              td {{work.link}}
              td
                img(:src='`https://webdev-api.loftschool.com/${work.photo}`', width="100", height="100" alt="")
              td 
                button(type="button" @click="removeWork(work.id)") Удалить
                button(type="button" @click="editExistedWork(work)") Изменить
        
</template>

<script>
import { mapActions, mapState} from "vuex";

export default {
  data() {
    return {
      previewPic: '',
      editmode: false,
      work: {
        id: 0,
        title: '',
        techs: '',
        link: '',
        photo: ''
      }
    }
  },
  computed: {
    ...mapState('works',  {
      works: state => state.works
    })
  },
  created() {
    this.fetchWorks();
  },
  methods: {
    ...mapActions({
      addNewWorkAction: 'works/add',
      fetchWorks: 'works/fetch',
      editWorkAction:'works/edit',
      removeWork: "works/remove"
    }),
    addNewWork(work) {
      this.addNewWorkAction(work).then(response => {
        this.work.title = '';
        this.work.techs = '';
        this.work.link = '';
        this.work.photo = [];
        this.previewPic = '';
        response;
      })
    },
    editWork(work) {
      this.editWorkAction(work).then(response => {
        this.work.title = '';
        this.work.techs = '';
        this.work.link = '';
        this.work.photo = [];
        this.previewPic = '';
        response;
      })
    },
    editExistedWork(existedWork) {
      this.editmode = true;
      this.work.id = existedWork.id;
      this.work.title = existedWork.title;
      this.work.techs = existedWork.techs;
      this.work.link = existedWork.link;
      this.previewPic = `url(https://webdev-api.loftschool.com/${existedWork.photo})`;
      
    },
    renderPicAndAddFile(e) {
      const file = e.target.files[0];
      const renderer = new FileReader();

      renderer.readAsDataURL(file);

      renderer.onloadend = () => {
        this.previewPic = `url(${renderer.result})`
      };

      this.work.photo = file;
    }
  }
}


// import { mapActions, mapState } from "vuex";
// export default {
//   data() {
//     return {
//       previewPic: "",
//       editmode: false,
//       work: {
//         id: 0,
//         title: "",
//         techs: "",
//         link: "",
//         photo: {}
//       }
//     };
//   },
//   computed: {
//     ...mapState("works", {
//       works: state => state.data
//     })
//   },
//   created() {
//     this.fetchWorks();
//   },
//   methods: {
//     ...mapActions({
//       fetchWorks: "works/fetch",
//       removeWork: "works/remove",
//       editWork: "works/edit",
//       addWork: "works/add"
//     }),
//     renderPicAndAddFile(e) {
//       const renderer = new FileReader();
//       const file = e.target.files[0];
//       renderer.readAsDataURL(file);
//       renderer.onloadend = () => {
//         this.previewPic = `url(${renderer.result})`;
//       };
//       this.work.photo = file;
//     },
//     createNewWork() {
//       this.addWork(this.work);
//     },
//     edit(work) {
//       this.work.id = work.id;
//       this.work.title = work.title;
//       this.work.link = work.link;
//       this.work.techs = work.techs;
//       this.previewPic = `url(https://webdev-api.loftschool.com/${work.photo})`;
//       this.editmode = true;
//     },
//     editExistedWork(work) {
//       this.editWork(work)
//         .then(response => {
//           Object.keys(this.work).forEach(key => (this.work[key] = ""));
//           response;
//         })
//         .catch(error => {
//           alert(error);
//         });
//     }
//   }
// };
</script>

<style scoped lang="scss">
.preview {
  width: 200px;
  height: 200px;
  background: center center / contain no-repeat;
}
.works {
  display: flex;
}
.works__table {
  width: 100%;
}
.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  td {
    border: 1px solid black;
  }
}
</style>