<template>
  <div class="container">
    <headBar></headBar>
    <div class="store margin-t"></div>
    <van-tabs type="card">
      <van-tab title="全部">
        <ul>
          <li class="project my-flex text-left">
            <div class="pimg">
              <img src="" alt="">
            </div>
            <div class="my-margin-l-10 my-flex-1">
              <div>
                <span class="pTitle">态势足浴</span>
                <span class="sell">已售4单</span>
              </div>
              <div class="ptext in-tit1 tit">舒筋活络,强身健体</div>
              <div>
                <span class="price">138元/100分钟</span>
                <span class="memberPrice">会员价118元</span>
              </div>
            </div>
          </li>
          <li class="project my-flex text-left">
            <div class="pimg">
              <img src="" alt="">
            </div>
            <div class="my-margin-l-10 my-flex-1">
              <div>
                <span class="pTitle">态势足浴</span>
                <span class="sell">已售4单</span>
              </div>
              <div class="ptext in-tit1 tit">舒筋活络,强身健体</div>
              <div>
                <span class="price">138元/100分钟</span>
                <span class="memberPrice">会员价118元</span>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="足浴类">
        <ul>
          <li class="project my-flex text-left">
            <div class="pimg">
              <img src="" alt="">
            </div>
            <div class="my-margin-l-10 my-flex-1">
              <div>
                <span class="pTitle">态势足浴</span>
                <span class="sell">已售4单</span>
              </div>
              <div class="ptext in-tit1 tit">舒筋活络,活血化瘀,强身健体</div>
              <div>
                <span class="price">138元/100分钟</span>
                <span class="memberPrice">会员价118元</span>
              </div>
            </div>
          </li>
          <li class="project my-flex text-left">
            <div class="pimg">
              <img src="" alt="">
            </div>
            <div class="my-margin-l-10 my-flex-1">
              <div>
                <span class="pTitle">态势足浴</span>
                <span class="sell">已售4单</span>
              </div>
              <div class="ptext in-tit1 tit">舒筋活络,活血化瘀,强身健体</div>
              <div>
                <span class="price">138元/100分钟</span>
                <span class="memberPrice">会员价118元</span>
              </div>
            </div>
          </li>
          </ul>
      </van-tab>
      <van-tab title="按摩类">
        <ul>
          <li class="project my-flex text-left">
            <div class="pimg">
              <img src="" alt="">
            </div>
            <div class="my-margin-l-10 my-flex-1">
              <div>
                <span class="pTitle">态势按摩</span>
                <span class="sell">已售4单</span>
              </div>
              <div class="ptext in-tit1 tit">恋爱的感觉,恋爱的感觉,恋爱的感觉,恋爱的感觉,恋爱的感觉</div>
              <div>
                <span class="price">138元/100分钟</span>
                <span class="memberPrice">会员价118元</span>
              </div>
            </div>
          </li>
          <li class="project my-flex text-left">
            <div class="pimg">
              <img src="" alt="">
            </div>
            <div class="my-margin-l-10 my-flex-1">
              <div>
                <span class="pTitle">态势按摩</span>
                <span class="sell">已售4单</span>
              </div>
              <div class="ptext in-tit1 tit">恋爱的感觉,恋爱的感觉,恋爱的感觉,恋爱的感觉,恋爱的感觉</div>
              <div>
                <span class="price">138元/100分钟</span>
                <span class="memberPrice">会员价118元</span>
              </div>
            </div>
          </li>
          </ul>
      </van-tab>
      <van-tab title="副项">
        <ul>
          <li class="project my-flex text-left">
            <div class="pimg">
              <img src="" alt="">
            </div>
            <div class="my-margin-l-10 my-flex-1">
              <div>
                <span class="pTitle">修脚</span>
                <span class="sell">已售4单</span>
              </div>
              <div class="ptext in-tit1 tit">舒筋活络,强身健体</div>
              <div>
                <span class="price">138元/100分钟</span>
                <span class="memberPrice">会员价118元</span>
              </div>
            </div>
          </li>
          <li class="project my-flex text-left">
            <div class="pimg">
              <img src="" alt="">
            </div>
            <div class="my-margin-l-10 my-flex-1">
              <div>
                <span class="pTitle">挖耳</span>
                <span class="sell">已售4单</span>
              </div>
              <div class="ptext in-tit1 tit">舒筋活络,强身健体</div>
              <div>
                <span class="price">138元/100分钟</span>
                <span class="memberPrice">会员价118元</span>
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
  name: "project",
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
  padding: 0.75rem;
}
.margin-t {
  margin-top: 46px;
}
.project{
  background-color: cyan;
  padding: 0.5rem;
  margin-top: 0.75rem;
}
.pimg{
  width: 5rem;
  height: 5rem;
}
.pTitle{
  font-size: 18px;
  color:#943466;
}
.sell{
  float: right;
  text-align: right;
  color:#333;
}
.ptext{
  font-size: 14px;
  color: #bbb;
}
.memberPrice{
  float: right;
  text-align: right;
  color:#e4393c;
}
</style>