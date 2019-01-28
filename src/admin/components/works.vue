<template lang="pug">
  #works
    .works
      h2 Страница "Мои работы"
      .works__fields
        h4 Добавить работу
        input(type="text" placeholder="Название проекта" v-model="work.title")
        input(type="text" placeholder="Технологии" v-model="work.techs")
        input(type="text" placeholder="Ссылка" v-model="work.link")
        label.add-picture Загрузить картинку
          img(src="../images/admin-add-picture.png").add-picture__btn
          input(type="file" @change="renderPicAndAddFile").input-file
        .preview(:style="{backgroundImage: previewPic}")
        .work__fields-button
          button(
            type="button"
            @click="editmode ? editWork(work) : addNewWork(work)"
            v-text="editmode ? 'Изменить' : 'Добавить'"
            ).green-btn 
    .works__table
      h4 Последние работы
      table.table
        tr
          th Название
          th Технологии
          th Ссылка
          th Превью
          th
        tr(v-for="work in works")
          td {{work.title}}
          td {{work.techs}}
          td {{work.link}}
          td
            img(:src='`https://webdev-api.loftschool.com/${work.photo}`', width="100", height="100" alt="")
          td 
            button(type="button" @click="removeWork(work.id)").delete-btn X
            button(type="button" @click="editExistedWork(work)").edit-btn ✎
        
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
  #works {
    display: flex;
  }
  .preview {
    width: 200px;
    height: 200px;
    background: center center / contain no-repeat;
  }
  .add-picture {
    position: relative;
    padding-left: 40px;
    color: $coral;
  }
  .add-picture__btn {
    position: absolute;
    left: 0;
  }
  .works {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-right: 150px;
    h2 {
      margin-bottom: 40px;
    }
  }
  .works__fields {
    display: flex;
    flex-direction: column;
    h4 {
      margin-bottom: 20px;
    }
    input {
      width: 70%;
      margin-bottom: 20px;
    }
  }
  .preview {
    background-size: 50%;
  }
  .input-file {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .works__table {
    width: 50%;
  }
  .table {
    font-size: 14px;
    border-radius: 10px;
    border-spacing: 0;
    text-align: center;
    th {
    background: #FFF;
    color: black;
    padding: 10px 20px;
    }
    tr:nth-child(even) {
      background: #E8E6D1;
    }
    tr:nth-child(odd) {
      background: white;
    }
    th:first-child, td:first-child {
    text-align: left;
    }
    th:first-child {
    border-top-left-radius: 10px;
    }
    th:last-child {
    border-top-right-radius: 10px;
    border-right: none;
    }
    td {
    padding: 10px 20px;
    background: #FFF;
    }
    tr:last-child td:first-child {
    border-radius: 0 0 0 10px;
    }
    tr:last-child td:last-child {
    border-radius: 0 0 10px 0;
    }
    tr td:last-child {
    border-right: none;
    }
    // width: 100%;
    // border-collapse: collapse;
    // border-spacing: 0;
    // td {
    //   border: 1px solid black;
    // }
  }
</style>