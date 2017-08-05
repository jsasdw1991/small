import React, { Component } from 'react'
import {Text, Image, View} from 'react-native'
import {TabNavigator} from "react-navigation"

import HeaderSearchBar from '../component/headerSearchBar'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <HeaderSearchBar></HeaderSearchBar>
      </View>
    )
  }
}



export default Home
