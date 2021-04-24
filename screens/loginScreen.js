import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <View style = {styles.container}>

               
                 <Text>Login Screen</Text>

               
                 <Text>Login Screen</Text>

                 <Button title = "Recover Account"> 

                 </Button>
            </View>
        )
    }
}


const styles =  StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
})