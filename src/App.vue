<template>
  <div id="app">
    <el-container>
      <el-header>
        <my-nav></my-nav>
      </el-header>
      <el-main>
        <router-view class="view"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MyNav from './layout/MyNav'

export default {
  name: 'app',
  components: {
    MyNav
  }
}
</script>

<style>
body{
  margin: 0 !important;
  padding: 0 !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header{
  padding: 0 !important;
}
</style>
