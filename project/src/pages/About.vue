<template>
  <div class="about">
    <h1>This is an mixin.js and common.js example</h1>
    <p>{{comTitle}}</p>
    <p>{{mixTitle}}</p>
  </div>
</template>

<script>
import { mixObj } from "@/mixin/mixin";
import comObj from "@/common/common";
export default {
  name: "",
  mixins: [mixObj],
  components: {},
  data() {
    return {
      comTitle: comObj.sayHello(),
      mixTitle: this.sayHello()
    };
  }
};
</script>

<style scoped>
p {
  font-size: 40px;
  color: chocolate;
}
</style>

