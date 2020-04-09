/**
 * 入口js
 * Created by Administrator on 2020/3/29.
 */
import Vue from 'vue'
import App from './App.vue'
import router from  './router'

new Vue({
  el:'#app',
  render:h => h(App),
  router
})
