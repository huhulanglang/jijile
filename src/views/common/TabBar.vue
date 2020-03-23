<template>
  <van-tabbar v-model="active" class="active_tab">
    <van-tabbar-item v-for="(item,index) in tabbars" :key="index" @click="tab(index,item.name)">
      <span :class="currIndex == index ? active:''">{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "TabBar",

  components: {},
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "./",
          title: "首页",
          normal: require("../../assets/logo.png"),
          active: require("../../assets/logo.png")
        },
        {
          name: "./auto",
          title: "自助",
          normal: require("../../assets/logo.png"),
          active: require("../../assets/logo.png")
        },
        {
          name: "./card",
          title: "会员",
          normal: require("../../assets/logo.png"),
          active: require("../../assets/logo.png")
        },
        {
          name: "./mine",
          title: "我的",
          normal: require("../../assets/logo.png"),
          active: require("../../assets/logo.png")
        }
      ]
    };
  },
  computed: {

  },
  created() {
    
  },
  watch: {

  },
  methods: {
    tab(index, val) {
      if(index === this.currIndex){
        return;
      }
      this.currIndex = index;
      this.$router.push(val);
    }
  }
};
</script>
<style scoped >
.active_tab img {
  width: 26px;
  height: 26px;
}

.van-tabbar-item--active {
  color: #e10f02;
}



</style>