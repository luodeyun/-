<template>
  <div id="topbar">
    <div class="left">
      <a href="#">
        <img src="../../assets/img/common/logo.png" alt="404" />
      </a>
      <el-button type="text" class="bu">登录</el-button>
    </div>
    <div class="center">
      <slot name="center">
        <div>
          <a href="#">
            <i class="el-icon-arrow-left"></i>
          </a>
        </div>
        <div>
          <a href>
            <i class="el-icon-refresh"></i>
          </a>
        </div>
        <div class="inputSq">
          <el-input
            size="mini"
            class="inputt"
            placeholder="请输入内容"
            v-model="input"
            clearable
            suffix-icon="el-icon-search"
          >
          </el-input>
        </div>
        <div>
          <a href>
            <i class="el-icon-microphone"></i>
          </a>
        </div>
      </slot>
    </div>
    <div class="right">aa</div>
  </div>
</template>
<script>
export default {
  name: "TopBar",
  data() {
    return {
      input: "",
    };
  },
};
</script>
<style >
input.el-input__inner {
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  color: #888;
}
</style>
<style scoped>
#topbar {
  height: 100px;
  background-color: aqua;
  padding: 10px;
  position: relative;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.left {
  margin-left: 20px;
  margin-top: 10px;
}
.left a > img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.left a {
  font-size: 14px;
  color: white;
  text-decoration: none;
  vertical-align: middle;
  margin-right: 5px;
}
.left .bu {
  margin-top: 10px;
}
.center {
  color: #fff;
  display: flex;
  justify-content: space-around;
}
.inputSq {
  width: 360px;
  margin-left: 15px;
}
</style>