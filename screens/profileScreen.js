
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {View, StyleSheet, Text, TextInput} from "react-native"

class Profile extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}>Please ensure you copy and store this down</Text>
                
                <TextInput
      style={styles.inputText}

      onChangeText = {(mnemonic)=>{

        this.setState({
            mnemonic
        })
      }}
      underlineColorAndroid="transparent"
      placeholder="Type something"
      placeholderTextColor="grey"
      numberOfLines={20}
      multiline={true}
    />
            </View>
        )
    }
}
const styles = StyleSheet.create({

    container : {
        flex : 1,
        alignContent: "center",
        justifyContent : "center"
    },
    text : {
        fontSize : 17,
        fontWeight : 'bold'
    }
})


const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  // export default ProjectForm
  export default connect(mapStateToProps, null )(Profile);