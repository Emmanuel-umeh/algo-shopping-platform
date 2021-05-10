
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

      disabled
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
    },
    inputText:{
        // height:0,
        color:"white"
      },
})


const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  // export default ProjectForm
  export default connect(mapStateToProps, null )(Profile);