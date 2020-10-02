<template>
  <div class="swiper">
    <el-carousel :interval="3000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in swipers" :key="index">
        <el-image :src="item.imageUrl" style="height: 100%"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { getSwiper } from "@/network/home.js";
import axios from "axios";
export default {
  name: "Swiper",
  data() {
    return {
      swipers: [],
    };
  },
  methods: {
    getSwiper() {
      getSwiper().then((res) => {
        this.swipers = res.banners;
        console.log(res);
      });
    },
  },
  created() {
    this.getSwiper();
  },
};
</script>
<style scoped>
.swiper {
  width: 1000px;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>