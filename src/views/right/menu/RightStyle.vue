<template>
  <div class="rt-style">
    <Swiper />
    <MusicList />
    <OnlyOne></OnlyOne>
    <div class="sss">s</div>
  </div>
</template>
<script>
import Swiper from "@/components/swiper/Swiper";
import MusicList from "@/components/musiclist/MusicList.vue";
import OnlyOne from "@/components/onlyone/OnlyOne.vue";
export default {
  name: "RightStyle",
  components: {
    Swiper,
    MusicList,
    OnlyOne,
  },
};
</script>
<style scoped>
.rt-style {
  width: 100%;
  max-height: 600px;
  overflow: auto;
}
.sss {
  height: 50px;
  width: 100%;
}
</style>