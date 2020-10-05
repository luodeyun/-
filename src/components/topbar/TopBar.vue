<template>
  <div id="topbar">
    <div class="left">
      <a href="#">
        <img src="../../assets/img/common/logo.png" alt="404" />
      </a>
      <el-button type="text" class="bu" style="color: #fff">登录</el-button>
    </div>
    <div class="center">
      <slot name="center">
        <div>
          <a href="javascript:void(0)" @click.stop="togBack">
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
            @keyup.enter.native="togSearch"
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
    <div class="right">
      <slot name="right">
        <a href>回到旧版</a>
        <a href>
          <i class="el-icon-monitor"></i>
        </a>
        <a href>
          <i class="el-icon-mobile-phone"></i>
        </a>
        <a href>
          <i class="el-icon-menu"></i>
        </a>
        <a href>
          <i class="el-icon-s-opportunity"></i>
        </a>
        <a href>
          <i class="el-icon-setting"></i>
        </a>
        <a href>
          <i class="el-icon-bell"></i>
        </a>
        <a href>
          <i class="el-icon-close"></i>
        </a>
      </slot>
    </div>
  </div>
</template>
<script>
import { USER_SONGLIST } from "@/store/mutationType";
export default {
  name: "TopBar",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    togBack() {
      this.$router.back();
    },
    togSearch() {
      this.$router.push("/search" + this.input);
    },
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
  height: 40px;
  background-color: #5292fe;
  padding: 10px;
  position: relative;
  color: #fff;
  display: flex;
  justify-content: space-between;
}
.left {
  /* float: left; */
  margin-left: 10px;
  margin-top: -10px;
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
  vertical-align: bottom;
  margin-right: 5px;
}
.bu {
  margin-top: 10px;
}
.center {
  color: #fff;
  /* position: absolute;
  left: 330px;
  top: 15px; */
  margin-top: 4px;
  display: flex;
  justify-content: space-around;
}
.center a i {
  font-size: 20px;
  margin-left: 15px;
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.8);
}
.center a i:hover {
  color: rgba(255, 255, 255, 0.8);
}
.inputSq {
  width: 360px;
  margin-left: 15px;
  margin-top: 4px;
}
.right {
  /* float: right; */
  margin-top: 10px;
}
.right a {
  color: rgba(255, 255, 255, 0.8);
  margin-right: 15px;
  text-decoration: none;
  font-size: 13px;
}
.right a:last-child {
  margin-right: 200px;
  font-size: 19px;
}
.right a:hover {
  color: #fff;
}
</style>