/**
 * 包含多个基于state的getter计算属性的对象
 */
export default {
  //购物车当前数量
  totalCount(state){
    return state.cartFoods.reduce((pretotal,food)=>pretotal+food.count,0)
  },
  //购物车当前总价
  totalPrice(state){
    return state.cartFoods.reduce((pretotal,food)=>pretotal+food.count*food.price,0)
  },
  //好评的数量
  positiveCount(state){
    return state.ratings.reduce((pretotal,recommend)=>pretotal+(recommend.rateType?0:1),0)
  },

}
