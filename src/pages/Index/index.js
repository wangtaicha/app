// 默认首页
import {BASE_URL} from '../../utils/axios'
// 轮播图
import { Carousel } from 'antd-mobile';
import React, { Component } from 'react';
import {getSwiper} from '../../utils/api/Home'
class Index extends Component {
    state = {
        // 轮播图的数据
        swiper: [],
        // 设置轮播图的默认高度
        imgHeight: 176,
        // 是否自动播放
        isPlay:false
      }
      componentDidMount() {
        this.getSwiper()
      }

      // 获取轮播图数据
      getSwiper = async ()=>{
        const {status,data} = await getSwiper()
        if(status === 200){
          // // 处理图片的路径
          // res.data.body.forEach((item)=>{
          //   item.imgSrc = `http://api-haoke-dev.itheima.net${item.imgSrc}`
          // })
          this.setState({
            swiper:data
          },()=>{
            // 确保swiper有数据
            this.setState({
              isPlay:true
            })
          })
        }
      }
      render() {
        return (
            <div className="index">

            {/**轮播图 */}
            <Carousel
              // 自动播放
              autoplay={this.state.isPlay}
              // 无限循环
              infinite
              //间隔时间
              autoplayInterval="2000">
              {this.state.swiper.map(val => (
                <a
                  key={val.id}
                  href="http://www.itheima.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`${BASE_URL}${val.imgSrc}`}
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