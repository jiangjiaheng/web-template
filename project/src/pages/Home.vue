<template>
  <div class="home">
    <h1>This is home page.</h1>
    <p>{{$store.state.moduleA.testA}}</p>
    <p>{{$store.state.moduleB.testB}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  created () {
    this.$api.get('topics', null, r => {
      console.log(r)
    })
  }
};
</script>
