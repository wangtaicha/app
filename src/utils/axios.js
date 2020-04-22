/**
 * 封装全局axios
 * 1. 创建一个axios实例 => 添加全局的配置: 后台接口的基础路径 ,超时时间
 * 2. 给axios实例添加拦截器
 */
 import axios from 'axios'
 import {Toast} from 'antd-mobile'
 // 后台的基础路径
 const BASE_URL = 'http://api-haoke-dev.itheima.net'
//  1. 创建一个axios实例   (单例模式)  只要页面不刷新,只会执行一次相当于单例模式
 const myAxios = axios.create({
    baseURL: BASE_URL,
  });

//  2. 添加拦截器
// Add a request interceptor  => 请求之前调用的拦截器
myAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log('开始请求了:',config)
    Toast.loading('加载中...', 2)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor => 请求成功之后调用  响应拦截器
myAxios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('请求成功了:',response)
    //设置一个新的简化的数据结构,然后返回
    
    // console.log(response)
    Toast.hide()
    const _res = {
        status:response.data.status,
        data:response.data.body,
        description:response.data.description
    }



    return _res;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default myAxios;
  export {BASE_URL}