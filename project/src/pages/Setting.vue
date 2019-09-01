<template>
   <div class="setting">
      <h1>This is a echart demo</h1>
      <div class="container">
    <div id="main" class="box"></div>
  </div>
   </div>
</template>

<script>
export default {
   name: '',
   components: {},
  mounted() {
    this.initChart();
  },
  data() {
    return {};
  },
  methods: {
    initChart() {
      let myChart = this.$echarts.init(document.getElementById('main'));
      // 绘制图表
      myChart.setOption(this.setOption('全局全部引入'));
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
}
</script>

<style scoped>
.container {
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.box {
  width: 100%;
  height: 600px;
  border: 0 solid #000;
}
</style>
