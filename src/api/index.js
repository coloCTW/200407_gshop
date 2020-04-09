/**
 * 包含n个接口请求函数的模块
 * 函数的返回值：promise对象
 */
import ajax from './ajax'

// 1，根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 2，获取食品分类列表
export const reqFoodType = () => ajax('/position/${geohash}')
// 3，根据经纬度获取商铺列表
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 4，根据经纬度和关键字搜索商铺列表
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 5，获取一次性验证码
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 6，用户名密码登陆
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 7，发送短信验证码
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 8 ，手机号验证码登陆
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 9，根据会话获取用户信息
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 10，用户登出
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
