import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity , Dimensions, ActivityIndicator} from 'react-native'
import { connect } from 'react-redux'
import {recover} from "../redux/actions/auth"


const {width,height} = Dimensions.get("window")
 class Recover extends Component {
    state = {
        mnemonic : "",
        loading : false 
    }

    recover = async()=>{

        try {
            let {mnemonic} = this.state
            if(!mnemonic ||  mnemonic.length < 1){
                return alert("Please enter your mnemonic key")
            }
            this.setState({
                loading : true
            })

         await  this.props.recover(mnemonic)
    
            this.setState({
                loading : false
            })
        } catch (error) {
            console.log({error})
            this.setState({
                loading : false
            }) 
        }
   
    }
    render() {
   
        return (
            <View style={styles.container}>
                  {this.state.loading && (
          <View style={styles.spinner}>
            <ActivityIndicator size="large" color="crimson" />
          </View>
        )}
            <Text style={styles.logo}>Recover</Text>
            {/* 
            <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Password..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({password:text})}/>
            </View> */}
               <TouchableOpacity>
              <Text style={styles.forgot}>Enter Your Mnemonic Key</Text>
            </TouchableOpacity>
     
            <View style={styles.inputView} >
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
            
            <TouchableOpacity style={styles.recoverBtn} 
            onPress = {()=>{
                this.recover()
            }}
            > 
              <Text style={styles.loginText}>Recover Account</Text>
            </TouchableOpacity>
    
      
          </View>
        )
    }
}

// crack lunar nice ostrich panther jar fantasy pulse crane suggest tomorrow fork gentle apology pact model brief lunar assault smile impose measure gold able humble

const mapStateToProps = (state) => ({
    auth: state.auth,
  
  });
  
  // export default ProjectForm
  export default connect(mapStateToProps, { recover })(Recover);



const styles =  StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        fontWeight:"bold",
        fontSize:40,
        color:"#fb5b5a",
        marginBottom:40
      },
      inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:200,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        // height:0,
        color:"white"
      },
      forgot:{
        color:"black",
        fontSize:15,
        marginBottom : 20
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      recoverBtn:{
        width:"80%",
        backgroundColor:"crimson",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      loginText:{
        color:"white"
      },
      spinner: {
        position : "absolute",
      marginTop : height/2.7,
      marginLeft :width/2.7,
      zIndex : 999
    },
})