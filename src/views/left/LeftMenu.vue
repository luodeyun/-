<template>
  <div class="leftmenu">
    <el-menu :default-openeds="['1']" default-active="1-1">
      <el-submenu index="1">
        <template slot="title">
          <span>推荐</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="findMusic">
            <i class="el-icon-magic-stick"></i>发现音乐</el-menu-item
          >
          <el-menu-item index="1-2">
            <i class="el-icon-news"></i>私人FM</el-menu-item
          >
          <el-menu-item index="1-3">
            <i class="el-icon-video-camera-solid"></i>LOOK直播</el-menu-item
          >
          <el-menu-item index="1-4" @click="togMusicvideo">
            <i class="el-icon-video-camera"></i>视频</el-menu-item
          >
          <el-menu-item index="1-5">
            <i class="el-icon-s-custom"></i>朋友</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>我的音乐</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <i class="el-icon-bangzhu"></i>本地音乐</el-menu-item
          >
          <el-menu-item index="2-2">
            <i class="el-icon-download"></i>下载管理</el-menu-item
          >
          <el-menu-item index="2-3">
            <i class="el-icon-cloudy"></i>我的音乐云盘</el-menu-item
          >
          <el-menu-item index="2-4"
            ><i class="el-icon-star-off"></i>我的收藏</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <span>创建的歌单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">
            <i class="el-icon-magic-stick"></i>我喜欢的音乐</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "LeftMenu",
  methods: {
    togMusicvideo() {
      this.$router.push("/musicvideo");
    },
    findMusic() {
      this.$router.push("/home/rtstyle");
    },
  },
};
</script>
<style scoped>
</style>