import React, { Component } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

export default class Product extends Component {

    componentDidMount(){
        const {item} = this.props.route.params
        console.log({item})
        if(!item){
            this.props.navigation.pop()
        }  
    }
    render() {

        const {item} = this.props.route.params
        return (
            <View style = {
                styles.container
            }>
            <Image source ={{
                uri : item.image
            }} />

            <View style = {styles.details}>
                <Text style = {styles.text}>{item.name}</Text>
                <Text style = {styles.text}>{item.price}</Text>

            </View>

            </View>
        )
    }
}


const styles =StyleSheet.create({
    container : {
        flex : 1
    },
    image : {
        height : "60%",
        width : "100%"
    },
    text : {
        fontSize : 30
    }
})