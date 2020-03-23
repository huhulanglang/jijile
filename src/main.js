import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios';
import {ajax,pcUrl} from  '../public/js/ajax.js';
let sha256 = require("js-sha256").sha256;
import {
    Button,
    Cell,
    CellGroup,
    Notify ,
    Circle,
    Row,
    Col ,
    Icon,
    NumberKeyboard,
    PasswordInput,
    Collapse,
    CollapseItem,
    Field,
    DatetimePicker,
    Popup,
    Panel,
    Rate,
    Swipe,
    SwipeItem,
    Tag,
    RadioGroup,
    Radio,
    Dialog,
    Toast,
    ActionSheet ,
    Tab, Tabs, Divider,Tabbar,TabbarItem,Lazyload, Grid, GridItem,NoticeBar,NavBar,Card
} from 'vant';
Vue.use(Button)
    .use(Cell)
    .use(CellGroup)
    .use(Notify)
    .use(Circle)
    .use(Row)
    .use(Col)
    .use(Icon)
    .use(NumberKeyboard)
    .use(PasswordInput)
    .use(Collapse)
    .use(CollapseItem)
    .use(Field)
    .use(DatetimePicker)
    .use(Popup )
    .use(Panel)
    .use(Rate)
    .use(Swipe)
    .use(SwipeItem)
    .use(Tag)
    .use(RadioGroup)
    .use(Radio)
    .use(Dialog)
    .use(Toast)
    .use(ActionSheet  )
    .use(Tab ).use(Tabs).use(Divider).use(Tabbar).use(TabbarItem).use(Lazyload).use(Grid).use(GridItem).use(NoticeBar).use(NavBar).use(Card);
Vue.prototype.$axios = axios;
Vue.prototype.sha256 = sha256;
Vue.prototype.http = ajax;
Vue.prototype.pcUrl = pcUrl;
Vue.prototype.getRequest=function(){
    let url = window.location.search; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let _str = str.split("&");
        for(var i = 0; i < _str.length; i ++) {
            //就是这句的问题
            theRequest[_str[i].split("=")[0]]=decodeURI(_str[i].split("=")[1]);
        }
    }
    return theRequest;
};
//格式化日期事件
Vue.prototype.formateDate = function (obj) {
    if(obj<10){
      return '0'+obj
    }
    return obj
};
// axios.defaults.baseURL = 'https://www.jijile.net';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.interceptors.response.use(function(res){
    //在这里对返回的数据进行处理
    if(res.data.code==0){
        return res.data;
    } else if(res.data.code=='10010'){
        Notify({
            message: '您的账号在别处登录，请重新登录',
            duration: 2000
        });
        setTimeout(function () {
            localStorage.removeItem('userInfo');
            app.$store.commit('changeUserInfo','');
            app.$router.replace({
                // query: {redirect: router.currentRoute.fullPath},
                path: '/login'
            });
        },1000);
        return res.data;
    }else {
        Notify({
            message: res.data.msg,
            duration: 2000
        });
        // throw new Error('出错了')
    }
},function(err){
    //Do something with response error
    // if(axios.isCancel(thrown)){
    //     console.log('Request canceled',thrown.message);
    //     source.cance("操作被用户取消");
    // }else {
    //     //handle error
    // }

    return Promise.reject('卧槽'+err);
});
// var myInterceptor = axios.interceptors.request.use(function(req){
//     // alert(JSON.stringify(req))
// });
// axios.interceptors.request.eject(myInterceptor);
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    // const role = sessionStorage.getItem('data');
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next()
    // if(!role && to.path !== '/login'){
    //     // next('/login');
    //     next({
    //         path: '/login',
    //         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    //     })
    // }else if(to.meta.permission){
    //     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    //     role === 'admin' ? next() : next('/403');
    // }else{
    //     // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    //     if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
    //         Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
    //             confirmButtonText: '确定'
    //         });
    //     }else{
    //         next();
    //     }
    // }
});
Vue.config.productionTip = false
let app=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
