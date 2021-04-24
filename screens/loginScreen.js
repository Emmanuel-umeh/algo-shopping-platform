import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {login} from "../redux/actions/auth"
 class Login extends Component {
    constructor(props){
        super(props)
        
    }

    recover = ()=>{
        this.props.navigation.navigate("Recover")
    }

    createAccount = ()=>{
   
        this.props.login()
    }
    
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.logo}>Fashion Store</Text>
            {/* <View style={styles.inputView} >
              <TextInput  
                style={styles.inputText}
                placeholder="Email..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Password..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({password:text})}/>
            </View> */}
     
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText} onPress = {()=>{
                  this.createAccount()
              }}>Create An Account</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgot}>Already have an account?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.recoverBtn} onPress = {()=>{
                this.recover()
            }}> 
              <Text style={styles.loginText}>Recover Account</Text>
            </TouchableOpacity>
    
      
          </View>
        )
    }
}


const styles =  StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
      },
      inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"white"
      },
      forgot:{
        color:"black",
        fontSize:11,
        marginTop : 20
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
      }
})


const mapStateToProps = (state) => ({
    auth: state.auth,
  
  });
  
  // export default ProjectForm
  export default connect(mapStateToProps, { login })(Login);
