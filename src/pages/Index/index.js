// 默认首页
import axios from 'axios'

// 轮播图
import { Carousel } from 'antd-mobile';


import React, { Component } from 'react';

class Index extends Component {
    state = {
        // 轮播图的数据
        swiper: [],
        // 设置轮播图的默认高度
        imgHeight: 176,
      }
      componentDidMount() {
        this.getSwiper()
      }

      // 获取轮播图数据
      getSwiper = async ()=>{
        const res = await axios.get('http://api-haoke-dev.itheima.net/home/swiper')
        console.log(res)
        if(res.status === 200){
          // // 处理图片的路径
          // res.data.body.forEach((item)=>{
          //   item.imgSrc = `http://api-haoke-dev.itheima.net${item.imgSrc}`
          // })
          this.setState({
            swiper:res.data.body
          })
        }
      }
      render() {
        return (
            <div className="index">
            <Carousel
              // 自动播放
              autoplay={true}
              // 无限循环
              infinite
            >
              {this.state.swiper.map(val => (
                <a
                  key={val.id}
                  href="http://www.itheima.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`http://api-haoke-dev.itheima.net${val.imgSrc}`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // 窗口大小改变的时候=>自适应 =>移动端适配
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
            </div>
        );
      }
}

export default Index;