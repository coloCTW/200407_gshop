/**
 * 使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'
 // 返回goods的接口
Mock.mock('/goods',data.goods)
// 返回ratings的接口
Mock.mock('/goods',data.ratings)
// 返回info的接口
Mock.mock('/goods',data.info)

