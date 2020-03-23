<template>
  <div class="my-container">
    <van-swipe :loop="false" class="my-swipe" @click="goTechInfo">
      <van-swipe-item v-for="(image, index) in images" :key="index" class="my-swipe-item">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    
    <van-cell-group>
      <van-cell title="2单" value="已为您服务0次" label="来自湖南长沙的007号技师" />
    </van-cell-group>
    <van-cell-group @click="goTechInfo">
      <van-cell title="预约项目" icon="todo-list-o" value="查看技师详情" is-link/>
    </van-cell-group>
    <van-card
      price="198元(100分钟)"
      desc="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。 由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道"
      title="天使之吻"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <div slot="tags">
        <van-tag plain type="danger">推荐</van-tag>
        <van-tag plain type="danger">火爆</van-tag>
      </div>
      <div slot="footer">
        <van-button size="small" type="info">查看</van-button>
        <van-button size="small" type="info">预约</van-button>
      </div>
    </van-card>
    <van-card
      price="198元(100分钟)"
      desc="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。 由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道"
      title="天使之吻"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <div slot="tags">
        <van-tag plain type="danger">推荐</van-tag>
        <van-tag plain type="danger">火爆</van-tag>
      </div>
      <div slot="footer">
        <van-button size="small" type="info">查看</van-button>
        <van-button size="small" type="info">预约</van-button>
      </div>
    </van-card>
    <van-card
      price="198元(100分钟)"
      desc="由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。 由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道"
      title="天使之吻"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <div slot="tags">
        <van-tag plain type="danger">推荐</van-tag>
        <van-tag plain type="danger">火爆</van-tag>
      </div>
      <div slot="footer">
        <van-button size="small" type="info">查看</van-button>
        <van-button size="small" type="info">预约</van-button>
      </div>
    </van-card>
    <div class="share">
      <van-icon name="share" />
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      title: "",
      isleftarrow: "",
      transitionName: "fade",
      navShow: true
    };
  },
  computed: {},
  created() {
    console.log(this.$route.params);
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
    goTechInfo() {
      this.$router.push({
        name: "techInfo",
        params: { id: this.$route.params.id }
      });
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
.van-cell .van-cell__title {
  text-align: left;
}
.van-card__content {
  text-align: left;
}
.share{
  position: fixed;
  bottom: 60px;
  right: 20px;
  height: 40px;
  width: 40px;
  line-height: 40px;
  border: 1px solid blue;
  color: blue;
  border-radius: 20px;
  font-size: 30px;
}
</style>
