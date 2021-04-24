import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

export default class Login extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
            <View style = {styles.container}>

               
                 <Text>Create an account</Text>

               
                 <Text>Already have an account?</Text>

                 <Button onPress = {()=>this.props.navigation.navigate("Recover")} title = "Recover Account"> 

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