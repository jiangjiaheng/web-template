<template>
  <div class>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :router="routerOpen"
    >
    <template>
      <el-menu-item>
        <div class="el-menu-title">
          Web Name
        </div>
      </el-menu-item>
    </template>
    <template v-for="page in pages">
      <el-submenu :index="page.name" :key="page.id" v-if="page.subpages">
        <template slot="title">{{page.title}}</template>
        <el-menu-item v-for="subpage in page.subpages" :key="subpage.id" :index="subpage.name">
          {{subpage.title}}
        </el-menu-item>
      </el-submenu>
      <el-menu-item :index="page.name" :key="page.id" v-else>
        {{page.title}}
      </el-menu-item>
    </template>
    </el-menu>
  </div>
</template>

<script>
import pageList from '@/route/pageList'

export default {
  name: "",
  components: {},
  data() {
    return {
      pages:pageList,
      routerOpen:true
    };
  },
  computed: {
    activeIndex(){
      return this.$router.app._route.name;
    }
  },
  methods: {
    handleSelect() {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-menu-title{
  font-size: 18px;
  font-weight: bold;
  color:#000000;
}
</style>
