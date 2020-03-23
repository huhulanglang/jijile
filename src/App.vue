<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <TabBar v-if="tabbarShow"></TabBar>
  </div>
</template>
<script>
import TabBar from "./views/common/TabBar.vue";
export default {
  name: "app",
  components: {
    TabBar
  },
  created() {
    console.log(this.$store);
  },
  watch: {
    $route(to, from) {
      console.log(from)
      //判断是否显示tabbar
      if (to.path == "/" || to.path == "/auto" || to.path == "/card" || to.path == "/mine") {
        this.$store.commit("updateTabbarShow", true);
      } else {
        this.$store.commit("updateTabbarShow", false);
      }
    }
  },
  computed: {
    tabbarShow() {
      return this.$store.getters.getTabbarShow;
    }
  }
};
</script>
<style lang="scss">
@import "../public/css/common.scss";
html,
body {
  height: 100%;
  background: #f7f7f7;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
