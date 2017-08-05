import React, {Component} from 'react'
import {Platform, Image, StyleSheet} from 'react-native'
import {TabNavigator, TabBarBottom} from "react-navigation"

// 五个屏
import Home from './screen/home'
import Cart from './screen/cart'
import Mine from './screen/mine'
import Wiki from './screen/wiki'
import Designer from './screen/designer'

// tab-icon
import homeImg from './assets/images/home.png'
import cartImg from './assets/images/cart.png'
import userImg from './assets/images/user.png'
import designerImg from './assets/images/designer.png'
import wikiImg from './assets/images/wiki.png'

// 样式
const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18,
  }
})

// 定义路由
const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: () => (<Image style={styles.icon} source={homeImg}/>)
    }
  },
  designer: {
    screen: Designer,
    navigationOptions: {
      tabBarLabel: "家装社团",
      tabBarIcon: () => (<Image style={styles.icon} source={designerImg}/>)
    }
  },
  Wiki: {
    screen: Wiki,
    navigationOptions: {
      tabBarLabel: '百科',
      tabBarIcon: () => (<Image style={styles.icon} source={wikiImg}/>)
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarLabel: '购物车',
      tabBarIcon: () => (<Image style={styles.icon} source={cartImg}/>)
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: () => (<Image style={styles.icon} source={userImg}/>)
    }
  }
}

// 定义tab导航的配置
const TabNavigatorConfig = {
  tabBarPosition: 'bottom', // 设置tab导航在底部
  tabBarComponent: TabBarBottom,
  swipeEnabled: true, // 允许在标签之间进行滑动
  animationEnabled: true, // 切换标签时启动动画
  lazy: false, // 根据需要懒加载标签，而不是提前渲染

  // tab的属性
  tabBarOptions: {
    activeTintColor: '#37CA73',
    inactiveTintColor: '#1D222A',
    style: {
      backgroundColor: '#E9EAED',
      height: 50,
      paddingTop: 3,
      paddingBottom: 3
    },
    tabStyle: {

    },
    labelStyle: {
      fontSize: 16,
      ...Platform.select({
        ios: {
          fontFamily: 'PingFangTC-Regular'
        },
        android: {
          fontFamily: 'Roboto'
        }
      })
    },
  }
}

const AppScreenNavigator = TabNavigator(RouteConfigs, TabNavigatorConfig)

export default AppScreenNavigator
