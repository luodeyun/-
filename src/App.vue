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
      <CenterAll class="center-m"></CenterAll>
    </div>
  </div>
</template>
<script>
import TopBar from "./components/topbar/TopBar.vue";
import CenterAll from "./views/center/centerAll";
export default {
  name: "APP",
  components: {
    TopBar,
    CenterAll,
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

#app {
  width: 1400px;
  margin: 0 auto;

  overflow: hidden;
}
</style>
