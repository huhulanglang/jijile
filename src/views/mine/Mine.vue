<template>
  <div>
    <headBar v-show="navShow" :title="title" :isleftarrow="isleftarrow"></headBar>
    <div class="margin-t">
      <div class="head"></div>
      <div class="myInfo">
        <div class="headImg">
          <div class="circle">
            <img :src="icon" alt />
          </div>
          <div class="name my-margin-t-5">大哥</div>
        </div>
        <div class="infoB my-margin-t-10">
          <van-grid :column-num="3">
            <van-grid-item>
              <div>会员卡</div>
              <div>0张</div>
            </van-grid-item>
            <van-grid-item>
              <div>积分</div>
              <div>100</div>
            </van-grid-item>
            <van-grid-item @click="goDiscount">
              <div>优惠券</div>
              <div>0张</div>
            </van-grid-item>
          </van-grid>
        </div>
        <div class="account" @click="changeStore">
          <van-icon name="setting-o" class="font-20" />
        </div>
      </div>
      <div class="myBtn">
        <van-cell title="我的订单" />
        <van-grid>
          <van-grid-item icon="photo-o" text="已完成" />
          <van-grid-item icon="photo-o" text="待使用" />
          <van-grid-item icon="photo-o" text="待退款" />
          <van-grid-item icon="photo-o" text="待评价" />
        </van-grid>
      </div>
      <div class="myBtn">
        <van-cell title="我的特权" />
        <van-grid>
          <van-grid-item icon="photo-o" text="已完成" />
          <van-grid-item icon="photo-o" text="分享积分" />
          <van-grid-item icon="photo-o" text="我的打赏" />
          <van-grid-item icon="photo-o" text="用户反馈" />
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import headBar from "../common/HeadBar.vue";
export default {
  name: "mine",
  components: {
    headBar
  },
  data() {
    return {
      title: "",
      isleftarrow: "",
      transitionName: "fade",
      navShow: true,
      icon:''
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.title = this.$route.meta.title;
    this.isleftarrow = this.$route.meta.isleftarrow;
  },
  watch: {},
  methods: {
    goDiscount(){
      this.$router.push({ name: 'discount'})
    },
    changeStore(){
      this.$router.push({ name: 'changeStore'})
    }
  }
};
</script>
<style scoped >
.margin-t {
  margin-top: 46px;
}
.head {
  height: 8rem;
  width: 100%;
  background-color: black;
}
.myInfo {
  position: relative;
  top: -5rem;
  /* height: 10rem; */
  margin: 0 auto;
  width: 90%;
  background-color: #fff;
  border-radius: 0.6rem;
}
.headImg {
  padding-top: 1.5rem;
  text-align: center;
  /* color: #fff; */
}
.circle {
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid rgb(58, 102, 224);
}
.infoB {
  border-radius: 0.6rem;
  overflow: hidden;
}
.myBtn{
  position: relative;
  top: -4rem;
  width: 90%;
  margin: 0.5rem auto;
  border-radius: 0.6rem;
  overflow: hidden;
}
.account{
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>