import React, {Component} from 'react'
import {View, Button, Text, StyleSheet, Platform, Image, TextInput} from 'react-native'

import leftImg from '../assets/images/left.png'
import smsImg from '../assets/images/sms.png'

class HeaderSearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: ''
    }
  }

  render() {
    return (
      <View style={styles.headerSearchBar}>
        <View style={styles.left}>
          <Image style={styles.backImg} source={leftImg} />
        </View>
        <View style={styles.center}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(keyword) => this.setState({keyword})}
            value={this.state.keyword}
            placeholder="关键字"
            underlineColorAndroid="transparent"
          />
          
        </View>
        <View style={styles.right}>
          <Image style={styles.backImg} source={smsImg} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerSearchBar: {
    backgroundColor: '#37CA73',
    flexDirection: 'row',
    // flex: 1,
    paddingBottom: 5,
    ...Platform.select({
      ios: {
        paddingTop: 20
      },
      android: {
        paddingTop: 10
      }
    }),
  },

  left: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backImg: {
    width: 30,
    height: 30
  },

  center: {
    flex: 8,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput: {
    backgroundColor: '#8ae0ad',
    height: 30,
    width: '90%',
    padding: 0,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#7A7A7A'
  },

  right: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HeaderSearchBar
