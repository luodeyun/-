<template>
  <div class="musiclist">
    <TitleHeader name="最新音乐"> </TitleHeader>
    <NewList></NewList>
  </div>
</template>
<script>
import TitleHeader from "@/components/TitleHeader/TitleHeader";
import NewList from "./NewList";
export default {
  name: "",
  components: {
    TitleHeader,
    NewList,
  },
};
</script>
<style scoped>
.musiclist {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>