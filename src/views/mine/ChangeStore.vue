<template>
    <div class="store">
      <headBar></headBar>
      <ul class="list margin-t text-left">
        <li>
          <van-row>
            <van-col span="4" class="text-center">
              <van-icon name="shop-o" size="40"/>
            </van-col>
            <van-col span="16">
              <div class="name">长沙五矿机机乐测试店</div>
              <div class="in-tit1 tit address">长沙市开福区五矿情缘金城8栋2单元103室</div>
            </van-col>
            <van-col span="4" class="choose">
              <van-icon name="passed" size="30"/>
            </van-col>
          </van-row>
        </li>
        <li>
          <van-row>
            <van-col span="4" class="text-center">
              <van-icon name="shop-o" size="40"/>
            </van-col>
            <van-col span="16">
              <div class="name">长沙五矿机机乐测试2店</div>
              <div class="in-tit1 tit address">长沙市开福区五矿情缘金城8栋2单元103室</div>
            </van-col>
            <van-col span="4" class="choose">
              <van-icon name="passed" size="30"/>
            </van-col>
          </van-row>
        </li>
      </ul>
    </div>
</template>

<script>
import headBar from "../common/HeadBar.vue";
export default {
  name: "changeStore",
  components: {
    headBar
  },
  data() {
    return {
      title: "",
      isleftarrow: "",
      transitionName: "fade",
      navShow: true
    };
  },
  watch: {
    $route(to, from) {
      console.log(to)
      console.log(from)
    }
  },
  computed: {

  },
  created() {
    
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style scoped >
.margin-t {
  margin-top: 46px;
}
.list>li{
  margin-top: 0.5rem;
  background-color: cadetblue;
  padding: 0.5rem;
}
.name{
  font-size: 18px;
  height: 22px;
  line-height: 22px;
}
.address{
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  color:#bbb;
}
.choose{
  height: 40px;
  line-height: 40px;
  padding-top: 5px;
}
</style>