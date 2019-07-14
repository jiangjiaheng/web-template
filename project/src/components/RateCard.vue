<template>
  <el-card class="card-box">
    <div slot="header" class="clearfix">
      <span>{{ cardName }}</span>
    </div>
    <el-rate v-model="countRate" disabled></el-rate>
    <div class="button-box">
      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="add"
        :disabled="addButtonDisabled"
        circle
      ></el-button>
      <el-button
        type="danger"
        icon="el-icon-minus"
        @click="sub"
        :disabled="subButtonDisabled"
        circle
      ></el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    cardName: {
      type: String,
      default: "卡片名称"
    },
    countRate: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {};
  },
  computed: {
    addButtonDisabled() {
      return this.countRate === 5;
    },
    subButtonDisabled() {
      return this.countRate === 0;
    }
  },
  methods: {
    add() {
      this.$emit("add");
    },
    sub() {
      this.$emit("sub");
    }
  }
};
</script>

<style scoped>
.card-box {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.button-box {
  width: 50%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}
</style>
