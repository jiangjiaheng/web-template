<template>
  <div class>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <router-link to="/">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/information">详情</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/about">关于</router-link>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">更多</template>
        <el-menu-item index="4-1">
          <router-link to="/setting">设置</router-link>
        </el-menu-item>
        <el-menu-item index="4-2">
          <router-link to="/other">其他</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
</style>
