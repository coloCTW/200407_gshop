/**
 * 直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
}from './mutation-types'
export default {
  [RECEIVE_ADDRESS] (state, {address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}){
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, {userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state){
    state.userInfo = {}
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT](state, {food}) {

    const aim = []
    state.goods.forEach(good=>{ //找出所有同名的食物，放进数组
      good.foods.forEach(candidatefood=>{
        if(candidatefood.name === food.name){
          aim.push(candidatefood)
        }
      })
    })
    aim.forEach(aimfood=>{ //给所有同名食物加数量
      if(!aimfood.count){
        //food.count = 1 //不能实现数据绑定
        /*
         *对象
         * 属性名
         * 属性值
         */
        Vue.set(aimfood,'count',1)
        //将food添加到cartFoods


      }else{
        aimfood.count++
      }
    })
    let isAdd = true
    state.cartFoods.forEach(cartFood=>{
      if(cartFood.name === food.name){
        isAdd = false
      }
    })

    if (isAdd){
      state.cartFoods.push(food)
    }

  },
  [DECREMENT_FOOD_COUNT](state, {food}) {
    const aim = []
    state.goods.forEach(good=>{
      good.foods.forEach(candidatefood=>{
        if(candidatefood.name === food.name){
          aim.push(candidatefood)
        }
      })
    })
    aim.forEach(aimfood=>{
      if(aimfood.count){
        aimfood.count--
      }
    })
    //移除cartFoods中的food
    if(food.count===0){
      state.cartFoods.splice(state.cartFoods.indexOf(food),1)
    }

  },
  [CLEAR_CART](state) {
    //清空foods里面的count
    state.cartFoods.forEach((food)=>food.count=0)
    //清空购物车
    state.cartFoods= []
  },
  [RECEIVE_SEARCH_SHOPS](state,{searchShops}) {
    state.searchShops = searchShops
  },
}
