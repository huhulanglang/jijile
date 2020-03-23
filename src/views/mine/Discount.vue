<template>
  <div>
    <headBar></headBar>
    <div class="store margin-t"></div>
    <van-tabs type="card">
      <van-tab title="未使用">
        <ul class="cardList">
          <li>
            <div class="box card bg-1">
              <div class="my-margin-t-10">
                <span>卷名：50元现金抵用券</span>
              </div>
              <div class="my-margin-t-10">
                <span class="my-margin-l-10">抵用规则：泰式足浴,中医推拿可抵</span>
              </div>
              <div class="font-size-12 my-margin-l-10 aui-margin-t-10">
                <span class="my-margin-l-15">赠送规则：赠送他人后被使用,可获得50积分</span>
              </div>
              <div class="recharge">立即使用</div>
            </div>
          </li>
          <li>
            <div class="box card bg-1">
              <div class="my-margin-t-10">
                <span>卷名：50元现金抵用券</span>
              </div>
              <div class="my-margin-t-10">
                <span class="my-margin-l-10">抵用规则：泰式足浴,中医推拿可抵</span>
              </div>
              <div class="font-size-12 my-margin-l-10 aui-margin-t-10">
                <span class="my-margin-l-15">赠送规则：赠送他人后被使用,可获得50积分</span>
              </div>
              <div class="recharge">立即使用</div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="已赠送">
        <ul class="cardList">
          <li>
            <div class="box card bg-1">
              <div class="my-margin-t-10">
                <span>卷名：50元现金抵用券</span>
              </div>
              <div class="my-margin-t-10">
                <span class="my-margin-l-10">抵用规则：泰式足浴,中医推拿可抵</span>
              </div>
              <div class="font-size-12 my-margin-l-10 aui-margin-t-10">
                <span class="my-margin-l-15">赠送规则：赠送他人后被使用,可获得50积分</span>
              </div>
            </div>
          </li>
          <li>
            <div class="box card bg-1">
              <div class="my-margin-t-10">
                <span>卷名：50元现金抵用券</span>
              </div>
              <div class="my-margin-t-10">
                <span class="my-margin-l-10">抵用规则：泰式足浴,中医推拿可抵</span>
              </div>
              <div class="font-size-12 my-margin-l-10 aui-margin-t-10">
                <span class="my-margin-l-15">赠送规则：赠送他人后被使用,可获得50积分</span>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="已过期">
        <ul class="cardList">
          <li>
            <div class="box card bg-1">
              <div class="my-margin-t-10">
                <span>卷名：50元现金抵用券</span>
              </div>
              <div class="my-margin-t-10">
                <span class="my-margin-l-10">抵用规则：泰式足浴,中医推拿可抵</span>
              </div>
              <div class="font-size-12 my-margin-l-10 aui-margin-t-10">
                <span class="my-margin-l-15">赠送规则：赠送他人后被使用,可获得50积分</span>
              </div>
            </div>
          </li>
          <li>
            <div class="box card bg-1">
              <div class="my-margin-t-10">
                <span>卷名：50元现金抵用券</span>
              </div>
              <div class="my-margin-t-10">
                <span class="my-margin-l-10">抵用规则：泰式足浴,中医推拿可抵</span>
              </div>
              <div class="font-size-12 my-margin-l-10 aui-margin-t-10">
                <span class="my-margin-l-15">赠送规则：赠送他人后被使用,可获得50积分</span>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import headBar from "../common/HeadBar.vue";
export default {
  name: "discount",
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
  computed: {},
  created() {},
  mounted() {
    this.title = this.$route.meta.title;
    this.isleftarrow = this.$route.meta.isleftarrow;
  },
  watch: {},
  methods: {}
};
</script>
<style scoped >
.container {
  padding: 0.25rem;
}
.margin-t {
  margin-top: 46px;
}

bg-1 {
  background: url("../../assets/card.jpg") no-repeat center;
}

.cardList {
  padding: 0.5rem;
}
.box {
  position: relative;
  border: 1px solid #d2d2d2;
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: #eee;
  text-align: left;
  height: 9rem;
}
.recharge {
  width: 5rem;
  height: 2.4rem;
  line-height: 2.4rem;
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: transparent;
  border: 1px solid #df3737;
  text-align: center;
  border-radius: 1.2rem;
  color: #df3737;
  box-shadow: 2px 2px 10px 0px rgba(140, 140, 140, 1);
}
</style>