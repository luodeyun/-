<template>
  <div id="home">
    <RightTop></RightTop>
    <router-view></router-view>
  </div>
</template>
<script>
import RightTop from "../right/RightTop";
export default {
  name: "home",
  components: {
    RightTop,
  },
};
</script>
<style scoped>
</style>