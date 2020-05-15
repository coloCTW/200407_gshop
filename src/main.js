/**
 * 入口js
 * Created by Administrator on 2020/3/29.
 */
import Vue from 'vue'
import App from './App.vue'
import router from  './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import './filter'
import './mock/mockServer' //加载mockServer即可，不需要暴露什么
import loading from './common/imgs/loading.gif'
//注册全局组件标签
Vue.component(Button.name , Button) //<mt-button>
Vue.use(VueLazyload,{
  loading
})
new Vue({
  el:'#app',
  render:h => h(App),
  router, //使用上vue-router
  store //使用上vuex
})
