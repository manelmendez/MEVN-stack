<template>
  <div class="main-content">
    <div class="container-fluid">        
      <div class="row">
        <div class="card-group main">
          <div class="card profile col-md-3">
            <img class="card-img-top" :src=user.avatar alt="Card image cap">
            <div class="card-body">
              <h4 class="card-title"> {{ user.name }} </h4>
              <p class="card-text">Email: {{ user.email }} </p>
              <router-link :to="{path: '/editUser'}"><button class="btn btn-primary">Editar usuario</button></router-link>
            </div>
          </div>
          <div class="card col-md-6">
            <div class="card-body">
              <h4 class="card-title"> Notas </h4>
              <div class="emptyNotes" v-show="!toggle">
                <p>No hay notas</p>
              </div>
              <ul id="noteList" class="list-group" v-show="toggle">
                <li id="tittle" class="list-group-item" data-toggle="collapse"v-for="note in noteList" :data-target='"#"+ note._id'><b>{{ note.title }}</b>
                  <div class="collapse" :id="note._id">
                    <div id="description" class="card card-body animated rollIn">
                      {{ note.description }}                  
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <button class="btn btn-primary addButton" data-toggle="modal" data-target="#addNoteModal">Añadir nota</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- MODAL -->
      <div class="modal fade" id="addNoteModal" tabindex="-1" role="dialog" aria-labelledby="addNoteModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addNoteModalLabel">Crear nueva nota:</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Título:</label>
                <input type="text" class="form-control" id="recipient-name" v-model="newTitle">
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Descripción:</label>
                <textarea class="form-control" id="message-text" v-model="newDescription"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" v-on:click="addNote()" data-dismiss="modal">Crear nota</button>
            </div>
          </div>
        </div>
      </div>
      <!-- MODAL END -->
      
    </div>
  </div>  
</template>

<script>
const user=""
export default {
  //props: ['user'],      if using props
  data(){
    return {
      toggle: false,
      authUser: JSON.parse(window.localStorage.getItem('authUser')),
      noteList:[],
      newTitle: "",
      newDescription: "",
      user:user
    }
  },
  methods:{
    getUser: function() {
      this.$axios.get('getUser/'+this.authUser.id)
      .then((response) => {
        console.log(response.data);
        this.user = response.data.user
      })
    },
    getNotes: function() {
      this.$axios.get('getNotes/'+this.authUser.id)
      .then(response => {
        this.noteList=response.body.notes
        if ((this.noteList!=null)&&(this.noteList.length>0)) {
          this.toggle=true;
        }
      })
      .catch((err) => {
        
      })
    },
    addNote: function() {
      let title = this.newTitle.trim()
      let description = this.newDescription
      // comprueva si no estan los campos vacios
      if ((title)&&(description)) {
        let body = {
          title: title,
          description: description,
          userId: this.user._id
        }
        let headers = {
          'Content-Type': 'application/json'
        }
        this.$axios.post('saveNote', body, headers)
        .then(response => {
          // añade los campos a la lista de notas
          this.noteList.push({
            _id: response.body.note._id,
            title: title,
            description: description
          });
          // reset note to an empty string so the input field is cleared
          this.newTitle = ""
          this.newDescription = ""
          if (this.noteList.length>0) {
            this.toggle = true;
          }
        })
      }
    }
  },
  created() {
    //do something after creating vue instance
    this.getUser()

  },
  mounted() {
    //do something after mounting vue instance
    this.getNotes()

  }
}
</script>

<style>
.main-content {
  background:url(../assets/images/dimension.png);
  background-size: auto,cover;
  min-height: 100%;
  width: 100%;
  position: relative;
}
.main {
  margin-top: 5%;
  width: 100%;
  justify-content: center;
  margin-bottom: 5%;
}
.addButton {
  position: relative;
  float: right;
  margin-bottom: 2.5%;
}
#addNoteModal {
  margin-top: 8%;
}
.list-group-item {
  cursor: pointer;
  background-color: #f2f2f2;
}
#description {
  margin: 2%;
  border: 0;
  background-color: rgba(255, 255, 255, 0.45);
}
</style>