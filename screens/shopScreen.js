import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Shop extends Component {
    render() {
        return (
            <View>
                <Text> Shop component</Text>
            </View>
        )
    }
}


Shop.navigationOptions = navData => {
    title = {
      text:
        'All Products',
      style: {
        color: Colors.textLight,
        fontSize: 20
      }
    }
}