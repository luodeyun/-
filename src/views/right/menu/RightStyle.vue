<template>
  <div class="rt-style">
    <Swiper />
    <MusicList />
    <OnlyOne></OnlyOne>
    <NewMusic></NewMusic>
    <div class="sss"></div>
  </div>
</template>
<script>
import Swiper from "@/components/swiper/Swiper";
import MusicList from "@/components/musiclist/MusicList.vue";
import OnlyOne from "@/components/onlyone/OnlyOne.vue";
import NewMusic from "@/components/newmusic/NewMusic";
export default {
  name: "RightStyle",
  components: {
    Swiper,
    MusicList,
    OnlyOne,
    NewMusic,
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
  height: 100px;
  width: 100%;
}
</style>