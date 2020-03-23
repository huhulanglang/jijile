import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import Auto from '../views/auto/Auto.vue'
import Card from '../views/card/Card.vue'
import Mine from '../views/mine/Mine.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { title: '首页', isleftarrow:false ,keepAlive: true }
        },
        {
            path: '/auto',
            name: 'auto',
            component: Auto,
            meta: { title: '自助服务', isleftarrow:false ,keepAlive: true }
        },
        {
            path: '/card',
            name: 'card',
            component: Card,
            meta: { title: '会员卡', isleftarrow:false ,keepAlive: true }
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine,
            meta: { title: '我的', isleftarrow:false ,keepAlive: true }
        },
        {
            path: '/Tech',
            name: 'tech',
            component: () => import('../views/home/Tech.vue'),
            meta: { title: '预约技师', isleftarrow:false ,keepAlive: false }
        },
        {
            path: '/TechInfo',
            name: 'techInfo',
            component: () => import('../views/home/TechInfo.vue'),
            meta: { title: '技师详情', isleftarrow:false ,keepAlive: false }
        },
        {
            path: '/Discount',
            name: 'discount',
            component: () => import('../views/mine/Discount.vue'),
            meta: { title: '技师详情', isleftarrow:false ,keepAlive: false }
        },
        {
            path: '/MyMap',
            name: 'myMap',
            component: () => import('../views/home/MyMap.vue'),
            meta: { title: '位置信息', isleftarrow:false ,keepAlive: false }
        },
        {
            path: '/ChangeStore',
            name: 'changeStore',
            component: () => import('../views/mine/ChangeStore.vue'),
            meta: { title: '门店切换', isleftarrow:false ,keepAlive: false }
        },
        {
            path: '/Project',
            name: 'project',
            component: () => import('../views/home/Project.vue'),
            meta: { title: '门店切换', isleftarrow:false ,keepAlive: false }
        }
    ]
})