<template>
  <div di="btmbar">
    <div class="scroll">
      <el-slider></el-slider>
    </div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  name: "BottomBar",
};
</script>
<style >
/* .el-dialog__wrapper{
  position: absolute !important;
  right: 0;
  bottom: 0;
  z-index: 99999;
  overflow: auto;
} */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 255, 0.1);
  border-radius: 3px;
}
#btmbar .el-dialog {
  position: absolute;
  right: 260px;
  bottom: 80px;
  max-height: 600px;
  overflow: auto;
}
.scroll .el-slider__bar {
  background-image: linear-gradient(to left, #a1c4fd 0%, #c2e9fb 100%);
}
.lound .el-slider__bar {
  background: linear-gradient(#a1c4fd 0%, #c2e9fb 100%);
}
.loundBox:hover .el-slider.is-vertical .el-slider__runway {
  display: block;
}
.lound .el-slider__button {
  width: 10px;
  height: 10px;
}
.lound .el-slider.is-vertical .el-slider__runway {
  width: 4px;
  display: none;
}
</style>
<style scoped>
.lound {
  position: absolute;
  top: -26px;
  left: 10px;
}
.scroll {
  width: 98%;
  position: absolute;
  top: -22px;
  /* left: 217px; */
}
.more {
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
}
.more-btn {
  padding: 0;
  width: 60px;
  height: 20px;
  background: none;
  color: #888;
  margin-right: 8px;
}
.more div i {
  margin-right: 10px;
  font-size: 16px;
  color: #888;
}
.more div:last-of-type {
  margin-right: 200px;
}
#btmbar {
  position: relative;
  height: 70px;
  background: rgba(0, 0, 255, 0.1);
}
.content {
  display: flex;
  justify-content: space-between;
}
.content .left {
  display: flex;
}
.content .left > div {
  margin-left: 10px;
  margin-top: 10px;
}
.singimg img {
  width: 45px;
  height: 45px;
}
.s-img {
  position: relative;
}
.s-img:hover .m-img {
  display: block;
}
.m-img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 62px;
  font-size: 20px;
  border-radius: 5px;
  display: none;
}
.sing {
  padding-top: 8px;
  font-size: 14px;
}
.sing-time {
  margin-top: 8px;
  color: rgb(187, 192, 195);
}
.icon {
  padding-top: 15px;
  padding-left: 8px;
  font-size: 20px;
}
.play {
  display: flex;
  justify-content: space-between;
}
.play > div {
  font-size: 40px;
  margin-top: 10px;
}
.play i {
  color: #5192fe;
}
</style>