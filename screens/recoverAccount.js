import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export default class Recover extends Component {
    render() {
        return (
            <View style = {styles.container}>

               
                 <Text>Recover Screen</Text>

               
                 <Text>Login Screen</Text>
            </View>
        )
    }
}


const styles =  StyleSheet.create({
    container : {
        alignContent : "center",
        justifyContent : "center"
    }
})