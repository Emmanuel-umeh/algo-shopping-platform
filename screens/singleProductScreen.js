import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default class Product extends Component {
    render() {

        const {item} = this.props.route.params
        return (
            <View>
            <Image source ={{
                uri : item.image
            }} />

            </View>
        )
    }
}
