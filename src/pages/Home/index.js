/* TabBar */
import { TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import TabBarConfig from '../../utils/TabBarConfig'
//样式
import './index.css'
// 导入路由组件
import Index from '../../pages/Index'
import House from '../../pages/House'
import Profile from '../../pages/Profile'



class Home extends Component {

    state = {
        // 选中的状态
        selectedTab: this.props.location.pathname
      };
  
    //渲染TabBar组件
    renderTabBar = () =>{
        return(
          <TabBar
             unselectedTintColor="#949494"
             tintColor="#33A3F4"
             barTintColor="white"
             noRenderContent={true}>
               {
               TabBarConfig.map((item)=>{
                 return(
                   <TabBar.Item
                   title={item.title}
                   key={item.path}
                   icon={<i className={`iconfont ${item.icon}`}/>}
                   selectedIcon={<i className={`iconfont ${item.icon}`}/>}
                   selected={this.state.selectedTab === item.path}
               // 相当于点击事件
               onPress={() => {
                 this.setState({
                   selectedTab: item.path
                 });
                 this.props.history.push(item.path)
               }}
               data-seed="logId" />
                )
               })
                }
        </TabBar>
        )
    }

    render() {
      // console.log(this.props)
        return (
            <div className="home">
                {/**二级路由 */ }
                <Route exact path="/home" component={Index}/>
                <Route path="/home/house" component={House}/>
                <Route path="/home/profile" component={Profile}/>
                {/**标签栏 TabBar*/}
              <div className="tabBar">
                {
                  // 调用TabBar组件
                  this.renderTabBar()
                }
              </div>
            </div>
        );
    }
}

export default Home;