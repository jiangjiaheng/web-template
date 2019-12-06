<template>
   <div class="other">
      <h1>I'm sass red</h1>
   </div>
</template>

<script>
export default {
   name: '',
   components: {},
   data() {
       return {}
   },
}
</script>

<style lang="scss" scoped>
$color: red;

h1 {
  color: $color;
}
</style>
