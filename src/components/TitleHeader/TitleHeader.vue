<template>
  <div class="title">
    <div class="content">
      <div class="name">{{ name }}</div>
      <div class="more" v-if="show">
        <a href="" @click.prevent="toggel"
          >{{ more }}
          <i class="el-icon-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
  <!-- <router-link :to="{ name : 'index' }">
        </router-link> -->
</template>

<script>
export default {
  name: "TitleHeader",
  props: {
    name: {
      type: String,
      default: "名字",
    },
    show: {
      type: Boolean,
      default: true,
    },
    path: {
      type: String,
      default: "/home/rtsongs",
    },
    methods: {
      toggel() {
        this.$router.push(this.path);
      },
    },
    more: {
      type: String,
      default: "更多",
    },
  },
};
</script>

<style scoped>
.title {
  width: 100%;
  display: flex;
  color: #333;
  margin-top: 10px;
}
.content {
  width: 100%;
  display: flex;
  padding-bottom: 5px;
  justify-content: space-between;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
}
.name {
  font-size: 19px;
}
.more {
  font-size: 12px;
}
</style>