import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/' // 这样居然可以用，不过导入的好像只有index.js，不知道是es6的语法还是webpack或者babel的
import {routerMode} from './config/env'
import './config/rem'
import FastClick from 'fastclick'

if ('addEventListener' in document) { // 实例化FastClick的代码，详见https://www.awesomes.cn/repo/ftlabs/fastclick
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production' // ??
})


new Vue({
	router,
	store,
}).$mount('#app') // $mount同el: '#app',挂载实例到#app

