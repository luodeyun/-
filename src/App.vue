<template>
  <div class="main">
    <div class="back-img">
      <!-- <img
        src="./assets/img/bg/bg.jpg"
        alt="404"
        style="width: 100%; filter: blur(80px)"
      /> -->
    </div>

    <div id="app">
      <TopBar></TopBar>
    </div>
  </div>
</template>
<script>
import TopBar from "./components/topbar/TopBar.vue";
export default {
  name: "APP",
  components: {
    TopBar,
  },
};
</script>
<style lang="less" scope>
.back-img {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.main {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.back-img img {
  width: 100%;
}
</style>
