import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";
import Home from './page/home'
import Cart from './page/cart'
import Mine from './page/mine'

const AppScreenNavigator = TabNavigator({
  Home: {
    screen: Home
  },
  Cart: {
    screen: Cart
  },
  Mine: {
    screen: Mine
  }
})

export default AppScreenNavigator
