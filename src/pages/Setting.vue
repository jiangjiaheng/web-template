<template>
  <div class="setting">
    <h1>There are echarts demos</h1>
    <div class="container">
      <div id="main1" class="box"></div>
      <div id="main2" class="box"></div>
      <div id="main3" class="box"></div>
      <div id="main4" class="box"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";

// echarts 按需引入
let echarts2 = require("echarts/lib/echarts");

// 引入折线图等组件
require("echarts/lib/chart/line");
require("echarts/lib/chart/bar");
require("echarts/lib/chart/radar");

// 引入提示框和title组件，图例
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");

export default {
  name: "",
  components: {},
  mounted() {
    this.initChart();
  },
  data() {
    return {};
  },
  methods: {
    initChart() {
      let myChart1 = this.$echarts.init(document.getElementById('main1'));
      let myChart2 = this.$echarts2.init(document.getElementById('main2'));
      let myChart3 = echarts.init(document.getElementById('main3'));
      let myChart4 = echarts2.init(document.getElementById('main4'));
      // 绘制图表
      myChart1.setOption(this.setOption('全局全部引入'));
      myChart2.setOption(this.setOption('全局按需引入'));
      myChart3.setOption(this.setOption('局部全部引入'));
      myChart4.setOption(this.setOption('局部按需引入'));
    },
    setOption(title) {
      let option = {
        title: { text: title },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      return option;
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  margin: 50px auto;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.box {
  width: 400px;
  height: 400px;
  border: 2px solid #000;
}
</style>
