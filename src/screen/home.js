import React, { Component } from 'react'
import {Text, Image, View, ScrollView} from 'react-native'
import {TabNavigator} from "react-navigation"
import Query from '../config/query'

import HeaderSearchBar from '../component/headerSearchBar'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      carousel: [],
      categories: []
    }
  }

  componentDidMount() {
    Query.get('/categories').then((data) => {
      console.log(data.categories);
    })
  }

  render() {
    return(
      <ScrollView>
        <HeaderSearchBar></HeaderSearchBar>
        <Text>
          {this.state.categories}
        </Text>
      </ScrollView>
    )
  }
}



export default Home
