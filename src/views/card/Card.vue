<template>
  <div>
    <headBar v-show="navShow" :title="title" :isleftarrow="isleftarrow"></headBar>
    <div class="store margin-t">
      <div class="imgBox">
        <van-icon name="shop-o" class="my-icon" size="60" />
      </div>
      <div class="textBox">
        <div class="name">机机乐测试门店</div>
        <div class="projectArt">电话：0731-8558888</div>
      </div>
      <div style="margin-right:0.5rem;">
        <van-button type="primary">切换门店</van-button>
      </div>
    </div>
    <van-tabs type="card">
      <van-tab title="普通卡">
        <ul class="cardList">
          <li>
            <div class="box card bg-1">
              <div class="my-margin-t-10">
                <span>【卡类型】</span>
                <span class="my-margin-l-15">大紫金卡</span>
              </div>
              <div class="my-margin-t-10">
                <span class="my-margin-l-15">一次性充值1000</span>
              </div>
              <div class="font-size-12 my-margin-l-10 aui-margin-t-10">
                <span class="my-margin-l-15">送500</span>
              </div>
              <div class="recharge">开卡</div>
            </div>
          </li>
          <li>
            <div class="box card bg-1">
              <div class="my-margin-t-10">
                <span>【卡类型】</span>
                <span class="my-margin-l-15">转卡</span>
              </div>
              <div class="my-margin-t-10">
                <span class="my-margin-l-15">一次性充值2000</span>
              </div>
              <div class="font-size-12 my-margin-l-10 aui-margin-t-10">
                <span class="my-margin-l-15">送100</span>
              </div>
              <div class="recharge">开卡</div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="次卡">
        <ul class="cardList">
          <li>
            <div class="box card bg-1">
              <div class="my-margin-t-10">
                <span>【卡类型】</span>
                <span class="my-margin-l-15">泰式足浴次卡</span>
              </div>
              <div class="my-margin-t-10">
                <span class="my-margin-l-15">10次泰式足浴</span>
              </div>
              <div class="font-size-12 my-margin-l-10 aui-margin-t-10">
                <span class="my-margin-l-15">价值500元</span>
              </div>
              <div class="recharge">开卡</div>
            </div>
          </li>
          <li>
            <div class="box card bg-1">
              <div class="my-margin-t-10">
                <span>【卡类型】</span>
                <span class="my-margin-l-15">养生SPA次卡</span>
              </div>
              <div class="my-margin-t-10">
                <span class="my-margin-l-15">10次养生SPA</span>
              </div>
              <div class="font-size-12 my-margin-l-10 aui-margin-t-10">
                <span class="my-margin-l-15">价值600元</span>
              </div>
              <div class="recharge">开卡</div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="月卡">
        <ul class="cardList">
          <li>
            <div class="box card bg-1">
              <div class="my-margin-t-10">
                <span>【卡类型】</span>
                <span class="my-margin-l-15">家庭月卡</span>
              </div>
              <div class="my-margin-t-10">
                <span class="my-margin-l-15">可消费项目：养生SPA,中式按摩</span>
              </div>
              <div>
                <span class="my-margin-l-15">一个月内使用最大使用次数20,</span>
              </div>
              <div class="font-size-12 my-margin-l-10 aui-margin-t-10">
                <span class="my-margin-l-15">价值1000元</span>
              </div>
              <div class="recharge">开卡</div>
            </div>
          </li>
          <li>
            <div class="box card bg-1">
              <div class="my-margin-t-10">
                <span>【卡类型】</span>
                <span class="my-margin-l-15">家庭月卡</span>
              </div>
              <div class="my-margin-t-10">
                <span class="my-margin-l-15">可消费项目：养生SPA,中式按摩</span>
              </div>
              <div>
                <span class="my-margin-l-15">一个月内使用最大使用次数20,</span>
              </div>
              <div class="font-size-12 my-margin-l-10 aui-margin-t-10">
                <span class="my-margin-l-15">价值1000元</span>
              </div>
              <div class="recharge">开卡</div>
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
  name: "card",
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
.margin-t{
  margin-top:46px;
}
.store {
  display: flex;
  align-items: center;
  flex-grow: 1;
  position: relative;
}

.store .textBox {
  flex-grow: 1;
  text-align: left;
}

.store sapn {
  display: block;
  max-width: 10rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.store .projectArt {
  height: 2rem;
  font-size: 16px;
  color: #aaa;
}

bg-1{
  background: url('../../assets/card.jpg') no-repeat center;
}

.cardList{
  padding: 0.5rem;
}
.box {
  position: relative;
  border: 1px solid #d2d2d2;
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: #eee;
  text-align: left;
  height: 7rem;
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