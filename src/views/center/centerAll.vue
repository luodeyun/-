<template>
  <div class="center">
    <el-container class="ct-container">
      <el-aside width="220px" style="background-color:rgb(238, 241, 246">
        <LeftMenu></LeftMenu>
      </el-aside>

      <div class="con-all">
        <router-view></router-view>
      </div>
    </el-container>
  </div>
</template>
<script>
import LeftMenu from "../left/LeftMenu";

export default {
  name: "CenterAll",
  components: {
    LeftMenu,
  },
  methods: {},
};
</script>
<style scoped>
.el-aside {
  color: #333;
}
.ct-container {
  position: relative;
  width: 100%;
  height: 600px;
  border: 1px solid #eee;
}
.con-all {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 600px;
}
</style>