<template>
  <div id="userList-content">
    <div class="container-fluid list-container">
      <b-col class="input-group">
        <b-form-input v-model="filter" placeholder="Type to Search" />
        <b-input-group-button>
          <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
        </b-input-group-button>
      </b-col>
      <!-- User Interface controls -->
      <b-table outlined striped hover small :filter="filter" :fields="fields" :items="items" :current-page="currentPage"
             :per-page="perPage" @filtered="onFiltered"></b-table>
      <div class="dropdown-divider"></div>
      <b-pagination class="pagination" align="right" size="sm" v-model="currentPage" :total-rows="totalRows" :per-page="perPage">
      </b-pagination>
    </div>
  </div>
</template>
<script>
const items= []
export default {
  name: "",
  data: () => ({
    currentPage: 1,
    perPage: 5,
    filter: null,
    totalRows: items.length,
    items: items,
    fields: [
        { key: 'name', sortable: true },
        { key: 'email', sortable: true },
        { key: 'signup_date', sortable: true },
        { key: 'notes', sortable: false }
      ],
  }),
  methods: {
    getAllUsers: function() {
      this.$axios.get('getAllUsers')
      .then((response) => {
        this.items = []
        console.log(response.data.users);
        for (let i = 0; i < response.data.users.length; i++) {
          let item = {
            name: response.data.users[i].name,
            email: response.data.users[i].email,
            signup_date: response.data.users[i].signupDate,
            notes: response.data.users[i].notes.length
          }
          this.items.push(item);
        }
      })
      .catch(error => {
      
      })
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
  created() {
    //do something after creating vue instance
    this.getAllUsers()
  }
}
</script>
<style>
#userList-content {
  background:url(../assets/images/dimension.png);
  background-size: auto,cover;
  min-height: 100%;
  width: 100%;
  position: fixed;
}
.list-container {
  background: white;
  justify-content: center;
  width: 90%;
  margin-top: 5%;
  border-radius: 5px;
  border-style: solid;
  border-color: #dedddd;
  border-width: thin;
}
.input-group {
  padding: 10px;
}
.pagination {
  padding: 10px;
}
</style>