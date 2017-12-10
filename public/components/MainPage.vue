<template>
  <div class="app-content">
    <div class="container-fluid h-100">        
      <div class="row h-100">
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
                <li class="list-group-item" data-toggle="collapse"v-for="note in noteList" :data-target='"#"+ note.id'><b>{{ note.title }}</b>
                  <div class="collapse" :id="note.id">
                    <div class="card card-body">
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
export default {
  //props: ['user'],      if using props
  data(){
    return {
      toggle: false,
      user: JSON.parse(window.localStorage.getItem('authUser')).data,
      noteList:[],
      newTitle: "",
      newDescription: ""
    }
  },
  methods:{
    getNotes: function() {
      //  this.$http.get('http://localhost:3000/api/getNotes', body, headers)
      if (this.noteList.length>0) {
        this.toggle=true;
        console.log(this.noteList);
      }
    },
    addNote: function() {
      let title = this.newTitle.trim()
      let description = this.newDescription
      // comprueva si no estan los campos vacios
      if ((title)&&(description)) {
        // añade los campos a la lista de notas
        this.noteList.push({
          id: noteList.length + 1,
          title: title,
          description: description
        });
        //Reset newTask to an empty string so the input field is cleared
        this.newTitle = ""
        this.newDescription = ""
        if (this.noteList.length>0) {
          this.toggle = true;
        }
      }
      console.log(this.noteList);
    }
 },
 mounted(){
    this.getNotes()
 }
}
</script>

<style>
.app-content {
  background:url(../assets/images/gplaypattern.png);
  background-size: auto,cover;
  min-height: 100%;
  width: 100%;
  position: absolute;
}
.main {
  margin-top: 5%;
  width: 100%;
  justify-content: center;
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
}
</style>