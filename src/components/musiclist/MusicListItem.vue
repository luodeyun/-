<template>
  <div
    class="musiclistitem"
    :style="{ width: wth + '%' }"
    @click="toListPage(item.id)"
  >
    <el-card :body-style="{ padding: '0px', width: '100%' }" shadow="hover">
      <!-- item是父亲请求过来的图片 -->
      <img
        :src="item.coverImgUrl || item.sPicUrl || item.cover"
        class="image"
      />
      <!-- 下面的具名插槽会替换掉父亲引用的，不过我们父亲没有 -->
      <slot name="music-t">
        <div class="right-t">
          <!-- 下面的i是图片的头部区域，我们会定位到图片里面 -->
          <i
            class="el-icon-headset"
            style="paddingtop: 4px; paddingleft: 15px"
          ></i>
          <!-- item.playCount是火热程度 -->
          <span
            >{{
              item.playCount >= 1000
                ? (item.playCount / 10000).toFixed(0) + "万"
                : item.playCount
            }}
          </span>
        </div>
        <div class="top-t" v-if="topShow">
          <span>{{ item.name }}</span>
        </div>
      </slot>
      <div class="btm">
        <i class="el-icon-video-play"></i>
      </div>
      <div class="user" v-if="userShow">
        <span
          ><i class="el-icon-user"></i
          >{{ item.artistName || item.creator.nickname }}</span
        >
      </div>
    </el-card>
    <div class="namet">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "MusicListItem",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
    wth: {
      type: Number,
      default: 18,
    },
    topShow: {
      type: Boolean,
      default: true,
    },
    userShow: {
      type: Boolean,
      default: false,
    },
    mvType: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 因为视频也用了该组件 所以需要判断
    toListPage(id) {
      if (this.mvType) {
        this.$router.push("/mvvideo" + id);
        return;
      }
      this.$router.push("/songs" + id);
      console.log("/songs" + id);
    },
  },
};
</script>
<style scoped>
.user {
  width: 100%;
  position: absolute;
  bottom: 50px;
  left: 0;
  font-size: 13px;
  color: aliceblue;
  background-image: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.4));
}
.namet {
  padding-top: 10px;
  font-size: 13px;
}
.btm {
  position: absolute;
  bottom: 24%;
  right: 6px;
  font-size: 28px;
  color: red;
  cursor: pointer;
  transform: translatex(115%);
  transition: transform 0.3s;
}
.btm:hover {
  color: rgba(255, 255, 255, 0.95);
}
.musiclistitem:hover .btm {
  transform: translateX(0);
}
.top-t {
  position: absolute;
  top: 0px;
  color: rgb(255, 255, 255, 0.95);
  font-size: 12px;
  background: rgb(0, 0, 0, 0.5);
  padding: 6px 0px;
  transform: translateY(-100%);
  transition: transform 0.5s;
  width: 100%;
  height: 20px;
  overflow: hidden;
  line-height: 1.9;
}
.musiclistitem:hover .top-t {
  transform: translateY(0);
}

.image {
  width: 100%;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.right-t {
  width: 80px;
  height: 14px;
  position: absolute;
  padding-top: 1px;
  top: 0px;
  right: 0;
  font-size: 12px;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0)
  );
  color: #fff;
  display: flex;
  justify-content: space-evenly;
}
.musiclistitem {
  margin-top: 25px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 10px;
  line-height: 1.5;
  /* min-height: 250px; */
}
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}
</style>