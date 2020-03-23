<template>
  <div>
    <HeadBar v-show="navShow" :title="title" :isleftarrow="isleftarrow"></HeadBar>
    <div class="margin-t">
      <h3 v-if="roomName">
        当前
        <a class="room">{{roomName}}</a>房
      </h3>
      <van-circle
        style="position: absolute;right: 40px;top: 100px"
        :stroke-width="0"
        size="80px"
        text="查询"
        fill="rgb(37, 155, 36)"
        @click.native="searchOrder"
        v-if="roomId"
      />
      <van-circle
        style="position: absolute;left: 30px;top: 150px"
        :stroke-width="0"
        size="80px"
        text="呼叫"
        fill="rgb(37, 155, 36)"
        @click.native="callService"
        v-if="roomId"
      />
      <van-circle
        style="
            border-radius: 50%;
            border:1px rgb(37, 155, 36) solid;
            position: absolute;
            top: 200px;
            left: 50%;
            margin-left: -66px"
        size="130px"
        color="#fff"
        text="VIP服务"
        fill="rgb(37, 155, 36)"
      />
      <van-circle
        style="position: absolute;left: 50%;margin-left: -50px;top: 430px"
        :stroke-width="0"
        size="100px"
        text="优惠券"
        fill="rgb(139, 195, 74)"
        @click.native="coupon"
      />
    </div>
  </div>
</template>

<script>
import HeadBar from "../common/HeadBar.vue";
export default {
  name: "auto",
  components: {
    HeadBar
  },
  data() {
    return {
      title: "",
      isleftarrow: "",
      transitionName: "fade",
      navShow: true
    };
  },
  computed: {
    roomName() {
      return this.$store.state.roomName;
    },
    branchId() {
      return this.$store.state.branchId;
    },
    roomId() {
      return this.$store.state.roomId;
    }
  },
  created() {
    let params = this.getRequest();
    params.branchId && sessionStorage.setItem("branchId", params.branchId);
    if (params.roomId) {
      //如果是扫码进入 需要保存房间id 因为后面页面重定向只能带一个门店id参数
      sessionStorage.setItem("branchName", params.branchName);
      sessionStorage.setItem("roomName", params.roomName);
      sessionStorage.setItem("roomId", params.roomId);
    }
    if (params.ticketNumber) {
      //如果是票券发放 领券跳转过来的
      sessionStorage.setItem("ticketNumber", params.ticketNumber);
    }
    let openId = sessionStorage.getItem("openId");
    openId && this.getCoupon();
    if (!openId && !params.code) {
      this.getAppId(params.branchId).then(res => {
        if (res.data) {
          window.location.replace(
            `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
              res.data
            }&redirect_uri=${encodeURI(
              this.pcUrl
            )}&response_type=code&scope=snsapi_base&state=${
              params.branchId
            }#wechat_redirect`
          );
        }
      });
      return;
    }
    let branchName = sessionStorage.getItem("branchName") || "";
    document.title = branchName || "欢迎光临";
    this.$store.commit("changeRoomInfo", {
      branchId: sessionStorage.getItem("branchId"),
      branchName: branchName,
      roomName: sessionStorage.getItem("roomName") || "",
      roomId: sessionStorage.getItem("roomId")
    });
    // //微信回调code
    if (params.code) {
      this.http(
        `/member/wc/openId/${params.code}?branchId=${params.state}`,
        "get"
      ).then(res => {
        res.data && sessionStorage.setItem("openId", res.data);
        this.getCoupon();
      });
    }
    this.getChainStores();
  },
  mounted() {
    console.log(this.$route.meta);
    this.title = this.$route.meta.title;
    this.isleftarrow = this.$route.meta.isleftarrow;
  },
  watch: {
    $route(to, from) {
      console.log(from)
      if (from.path == "/chainStores") {
        document.title = decodeURI(to.query.name);
        this.$store.commit("changeRoomInfo", {
          branchId: to.query.branchId
        });
      }
    }
  },
  methods: {
    getAppId(branchId) {
      //获取公众号 appId
      return this.http(`/member/wc/appId/${branchId}`, "get");
    },
    getChainStores() {
      let ticketNumber = sessionStorage.getItem("ticketNumber");
      if (this.roomId || ticketNumber) {
        //扫码进入 不需要获取连锁门店
        return;
      }
      this.getAppId(this.branchId)
        .then(res => {
          return this.http(`/member/wc/branch/appId/${res.data}`, "get");
        })
        .then(branchs => {
          if (branchs && branchs.data.length > 1) {
            this.$store.commit("changeBranch", branchs.data);
            this.$router.replace("/chainStores");
          }
        });
    },
    getCoupon() {
      let ticketNumber = sessionStorage.getItem("ticketNumber");
      let branchId = sessionStorage.getItem("branchId");
      if (ticketNumber) {
        this.http(
          `/member/wc/branch/${branchId}/ticket/${ticketNumber}`,
          "post"
        ).then(res => {
          if (res.code == 0) {
            this.$notify({
              message: "领券成功",
              duration: 2000,
              background: "#1989fa"
            });
          } else {
            this.$dialog
              .alert({
                title: "提示",
                message: "领券失败"
              })
              .then(() => {
                // on close
              });
          }
        });
      }
    },
    callService() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "确认呼叫服务吗？"
        })
        .then(() => {
          this.http(`/member/wc/room/${this.roomId}/call`, "post").then(res => {
            if (res.code == 0) {
              this.$toast.success("呼叫服务成功");
            }
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    searchOrder() {
      this.$router.push("/order");
    },
    getBind() {
      //门店是否绑定openId
      return this.http(`/member/wc/bind/branches`, "get").then(res => {
        if (res.data.length == 0) {
          this.$router.push("/login");
          return;
        }
        let isBind = false;
        res.data.forEach(branch => {
          if (branch.id == this.branchId) {
            isBind = true;
          }
        });
        return isBind;
      });
    },
    goVipService() {
      this.getBind().then(isBind => {
        //该门店没有绑定openId
        if (isBind) {
          this.$router.push("/member");
        } else {
          this.$router.push("/login");
        }
      });
    },
    openCard() {
      this.getBind().then(isBind => {
        //该门店没有绑定openId
        if (isBind) {
          this.$router.push("/card/bind");
        } else {
          this.$router.push("/login");
        }
      });
    },
    coupon() {
      this.$router.push("/coupon");
    }
  }
};
</script>
<style scoped >
.margin-t {
  margin-top: 46px;
}
</style>