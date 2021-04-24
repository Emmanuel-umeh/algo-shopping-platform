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
            <Image style = {styles.image} source ={{
                uri : item.image
            }} />

            <View style = {styles.details}>
                <Text style = {styles.text}>{item.title}</Text>
                <Text style = {styles.text}>Price : {item.price} algos</Text>

            </View>

            </View>
        )
    }
}


const styles =StyleSheet.create({
    container : {
        flex : 1,
        alignContent : "center"
    },
    image : {
        height : "60%",
        width : "100%"
    },
    text : {
        fontSize : 20,
        alignSelf : "center"
    },
   
})