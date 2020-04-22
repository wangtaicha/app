/**
 * 首页相关的所有接口
 */

 import axios from '../../axios';


 // 轮播图接口
 export function getSwiper(){
     // 返回的是一个=>promise对象
    return axios.get('/home/swiper')
 }