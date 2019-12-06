<template>
  <div class="home">
    <h1>This is A Vuex Demo</h1>
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <rate-card card-name="Demo of Module A" :count-rate="countA" @add="addA" @sub="subA"></rate-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <rate-card card-name="Demo of Module B" :count-rate="countB" @add="addB" @sub="subB"></rate-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import RateCard from "@/components/RateCard.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    RateCard
  },
  created() {
    this.getDataFromApi();
  },
  computed: {
    ...mapGetters("moduleA", {
      countA: "getCount"
    }),
    ...mapGetters("moduleB", {
      countB: "getCount"
    })
  },
  methods: {
    ...mapMutations("moduleA", {
      addA: "add"
    }),
    ...mapActions("moduleA", {
      subA: "subAsyn"
    }),
    ...mapMutations("moduleB", {
      addB: "add"
    }),
    ...mapActions("moduleB", {
      subB: "subAsyn"
    }),
    getDataFromApi() {
      this.$api.get("/data/testData", null, Response => {
        console.log(Response);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$color: red;

h1 {
  color: $color;
}
</style>

