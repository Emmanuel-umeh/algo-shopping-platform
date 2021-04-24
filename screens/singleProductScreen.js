import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default class Product extends Component {

    componentDidMount(){
        const {item} = this.props.route.params
        if(!item){
            this.props.navigation.pop()
        }  
    }
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
