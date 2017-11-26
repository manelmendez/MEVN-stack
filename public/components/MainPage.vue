<template>
  <div class="app-content">
    <div class="general">
      <div class="content h-100">
        <div class="row justify-content-center h-100">
          <div class="col-4">
            <h1>aaaa</h1>
          </div>
          <div class="col-4">
            <h1>bbbb</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      
    }
  },
  methods: {}
}
</script>

<style>
.app-content {
  background:url(../assets/images/wallpaper.jpg);
  background-size:cover;
  height: 100%;
  width: 100%;
  position:fixed;
}
.general {
  background-color: rgba(355, 355, 355, 0.6);
  height: 100%;
  width: 100%;
}
</style>
