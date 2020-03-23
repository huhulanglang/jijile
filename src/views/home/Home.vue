<template>
  <div class="my-container">
    <headBar v-show="navShow" :title="title" :isleftarrow="isleftarrow"></headBar>
    <van-swipe :autoplay="3000" class="my-swipe margin-t">
      <van-swipe-item v-for="(image, index) in images" :key="index" class="my-swipe-item">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-row class="address padding-def my-flex">
      <van-col span="2">
        <van-icon name="location-o" size="25" />
      </van-col>
      <van-col span="18" class="in-tit1 tit">长沙市开福区富湾国际2栋3909室富湾国际2栋3909室</van-col>
      <van-col span="2" @click="goMap">
        <van-icon name="logistics" size="25" />
      </van-col>
    </van-row>
    <van-notice-bar text="卡卷分享之后,对方使用,即可获得50元现在奖励" left-icon="volume-o" />
    <van-grid>
      <van-grid-item icon="fire-o" text="推荐项目" @click="goPojectList"/>
      <van-grid-item icon="photo-o" text="门店活动" />
      <van-grid-item icon="other-pay" text="票卷活动" />
      <van-grid-item icon="phone-o" text="联系我们" />
    </van-grid>
    <van-divider>技师列表</van-divider>
    <div class="tec wx-padding-t-15 wx-padding-b-15 bg-f">
      <div class="text-center" v-for="(item,index) in tech" :key="index" @click="goTech(item.id)">
        <img :src="item.head" />
        <span class="content-item-title">{{item.name}}</span>
        <span class="text-left left">{{item.num}}单</span>
        <span class="text-right right">已为您服务{{item.youNum}}次</span>
      </div>
    </div>
    <footInfo></footInfo>
  </div>
</template>

<script>
import footInfo from "../common/FootInfo.vue";
import headBar from "../common/HeadBar.vue";
export default {
  name: "home",
  components: {
    footInfo,
    headBar
  },
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      tech: [
        {
          head: "https://img.yzcdn.cn/vant/apple-1.jpg",
          name: "貂蝉",
          num: "20",
          youNum: "1",
          content: "卓拉公主-弥法老婆",
          id: 1
        },
        {
          head: "https://img.yzcdn.cn/vant/apple-2.jpg",
          name: "西施",
          num: "2",
          youNum: "1",
          content: "塞尔达公主",
          id: 2
        },
        {
          head: "https://img.yzcdn.cn/vant/apple-1.jpg",
          name: "吕布",
          num: "22",
          youNum: "10",
          content: "塞尔达公主",
          id: 3
        },
        {
          head: "https://img.yzcdn.cn/vant/apple-2.jpg",
          name: "杨玉环",
          num: "4",
          youNum: "0",
          content: "塞尔达公主",
          id: 4
        }
      ],
      title: "",
      isleftarrow: "",
      transitionName: "fade",
      navShow: true
    };
  },
  computed: {},
  created() {

  },
  mounted() {
    this.title = this.$route.meta.title;
    this.isleftarrow = this.$route.meta.isleftarrow;
  },
  watch: {
    $route(to, from) {
      console.log(from)
      this.title = to.meta.title;
      this.isleftarrow = to.meta.isleftarrow;
    }
  },
  methods: {
    goTech(id){
      console.log(id)
      this.$router.push({ name: 'tech', params: { id: id }})
    },
    goMap(){
      this.$router.push({ name: 'myMap'})
    },
    goPojectList(){
      this.$router.push({ name: 'project'})
    }
  }
};
</script>
<style scoped >
.my-container {
  background-color: #fff;
}
.my-swipe .my-swipe-item img {
  height: 12rem;
  width: 100%;
}
.in-tit1.tit {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.padding-def {
  padding: 0.75rem;
}
.tec {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0.25rem;
}
.tec div {
  width: 46%;
  height: 16.5rem;
  margin: 0 2%;
  position: relative;
}
.tec div img {
  width: 100%;
  height: 14rem;
}
.tec div .left {
  position: absolute; /*绝对定位,文字覆盖图片上*/
  top: 14.5rem;
  font-size: 12px;
  left: 5px;
  color: #555;
}
.tec div .right {
  position: absolute; /*绝对定位,文字覆盖图片上*/
  top: 14.5rem;
  font-size: 12px;
  right: 5px;
  color: #aaa;
}
.content-item-title {
  position: absolute; /*绝对定位,文字覆盖图片上*/
  color: white;
  top: 12rem; /* 位置在父级元素底部 */
  font-size: 17px;
  width: 98%;
  height: 2rem; /* 设置容器高度,显示渐变的高度 */
  line-height: 2rem;
  text-align: center;
  /* 背景渐变:bottom:从下到上,右0.8向0透明渐变 */
  background: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
  display: flex; /* flex布局,控制容器内文字元素在底部 */
  flex-direction: column;
  justify-content: flex-end;
  padding: 1% 1% 1% 1%;
}
</style>