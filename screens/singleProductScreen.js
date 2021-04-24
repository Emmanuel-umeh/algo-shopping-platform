import React, { Component } from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import {purchase} from "../redux/actions/order"

class Product extends Component {

    componentDidMount(){
        const {item} = this.props.route.params
        console.log({item})
        if(!item){
            this.props.navigation.pop()
        }  
    }

    purchaseProduct = ()=>{

        
        const {item} = this.props.route.params
        Alert.alert(
            "Confirm",
            "Are you sure you want to purchase this product?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => this.props.purchase  }
            ]
          );
      
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
                

                <TouchableOpacity style={styles.loginBtn} onPress = {()=>{
                //   this.createAccount()
                // alert("clicked")
            //  this.goToSingleProduct(item)

            this.purchaseProduct()
              }}>
              <Text style={styles.loginText} >Purchase With Algos</Text>
            </TouchableOpacity>

            </View>

            </View>
        )
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    order : state.order
  
  });
  
  // export default ProjectForm
  export default connect(mapStateToProps, { purchase })(Product);


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
        marginTop : 10,
        fontSize : 20,
        alignSelf : "center"
    },
    
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    alignSelf : "center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },

  loginText:{
    color:"white"
  },
   
})