// import React, { Component } from 'react'
// import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity,Dimensions } from 'react-native';
// import { connect } from 'react-redux';
// import {login} from "../redux/actions/auth"

// import {
//   AdMobBanner,
//   AdMobInterstitial,
//   PublisherBanner,
//   AdMobRewarded,
//   setTestDeviceIDAsync,
// } from 'expo-ads-admob';

// // Set global test device ID

// const {width,height} = Dimensions.get("window")
//  class Login extends Component {
//     constructor(props){
//         super(props)
        
//     }

//     recover = ()=>{
//         this.props.navigation.navigate("Recover")
//     }

//     state = {
//       loading : false
//     }

//     createAccount = async()=>{
//       try {
//         this.setState({
//           loading : true
//         })
     
//           await this.props.login()
//           this.setState({
//             loading : false
//           })
//       } catch (error) {
//         console.log({error})
//         this.setState({
//           loading : false
//         })
//       }

 
//     }
    
//    async componentDidMount(){
//       await setTestDeviceIDAsync('EMULATOR');

//       {/* // Display an interstitial */}
//  await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
// await AdMobInterstitial.requestAdAsync();
// await AdMobInterstitial.showAdAsync()



// // Display a rewarded ad
// // await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917'); // Test ID, Replace with your-admob-unit-id
// // await AdMobRewarded.requestAdAsync();
// // await AdMobRewarded.showAdAsync();
//     }
//     render() {
//         return (
//             <View style={styles.container}>

//               <Text  style = {styles.forgot}>Interstatial ad will load full screen</Text>
// {/* 
// {this.state.loading && (
//           <View style={styles.spinner}>
//             <ActivityIndicator size="large" color="crimson" />
//           </View>
//         )}
//             <Text style={styles.logo}>Fashion Store</Text>
         
     
//             <TouchableOpacity style={styles.loginBtn} onPress = {()=>{
//                   this.createAccount()
//               }}>
//               <Text style={styles.loginText} >Create An Account</Text>
//             </TouchableOpacity>

//               <Text style={styles.forgot}>Already have an account?</Text>
       
//             <TouchableOpacity style={styles.recoverBtn} onPress = {()=>{
//                 this.recover()
//             }}> 
//               <Text style={styles.loginText}>Recover Account</Text>
//             </TouchableOpacity> */}
    

// <View>
//   <Text style = {styles.forgot}>Banner AD</Text>
// <AdMobBanner
//   bannerSize="fullBanner"
//   adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
//   servePersonalizedAds // true or false
//   onDidFailToReceiveAdWithError={console.log} />
// </View>


// {/* // Display a DFP Publisher banner */}
// <View>
//   <Text  style = {styles.forgot}>Publish Banner</Text>
// <PublisherBanner
//   bannerSize="fullBanner"
//   adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
//   onDidFailToReceiveAdWithError={console.log}
//   onAdMobDispatchAppEvent={console.log} />

// </View>



      
//           </View>
//         )
//     }
// }


// const styles =  StyleSheet.create({
//     container: {
//         flex: 1,
//         // backgroundColor: '#003f5c',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//       logo:{
//         fontWeight:"bold",
//         fontSize:50,
//         color:"#fb5b5a",
//         marginBottom:40
//       },
//       inputView:{
//         width:"80%",
//         backgroundColor:"#465881",
//         borderRadius:25,
//         height:50,
//         marginBottom:20,
//         justifyContent:"center",
//         padding:20
//       },
//       inputText:{
//         height:50,
//         color:"white"
//       },
//       forgot:{
//         color:"black",
//         fontSize:18,
//         marginTop : 20
//       },
//       loginBtn:{
//         width:"80%",
//         backgroundColor:"#fb5b5a",
//         borderRadius:25,
//         height:50,
//         alignItems:"center",
//         justifyContent:"center",
//         marginTop:40,
//         marginBottom:10
//       },
//       recoverBtn:{
//         width:"80%",
//         backgroundColor:"crimson",
//         borderRadius:25,
//         height:50,
//         alignItems:"center",
//         justifyContent:"center",
//         marginTop:40,
//         marginBottom:10
//       },
//       loginText:{
//         color:"white"
//       },
//       spinner: {
//         position : "absolute",
//       marginTop : height/2.7,
//       marginLeft :width/2.7,
//       zIndex : 999
//     }
// })

// const mapStateToProps = (state) => ({
//     auth: state.auth
  
//   });

//   export default connect(mapStateToProps, { login })(Login);


import {
  AdMobBanner,
  AdMobInterstitial,
  AdMobRewarded,
  PublisherBanner,
} from 'expo-ads-admob';
import React, { Component } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Button, Text } from 'react-native-elements'

AdMobInterstitial.setAdUnitID("ca-app-pub-7817624951837976/1442310421")
// AdMobInterstitial.setTestDeviceID('EMULATOR')


class Login extends Component {
  state = {
    disableInterstitialBtn: false,
    disableRewardedBtn: false,
  }

  _openInterstitial = async () => {
    try {
      this.setState({ disableInterstitialBtn: true })
      await AdMobInterstitial.requestAdAsync()
      await AdMobInterstitial.showAdAsync()
    } catch (error) {
      console.error(error)
    } finally {
      this.setState({ disableInterstitialBtn: false })
    }
  }

  _openRewarded = async () => {
    try {
      this.setState({ disableRewardedBtn: true })
      await AdMobRewarded.requestAdAsync()
      await AdMobRewarded.showAdAsync()
    } catch (error) {
      console.error(error)
    } finally {
      this.setState({ disableRewardedBtn: false })
    }
  }

  render() {
    const { disableInterstitialBtn, disableRewardedBtn } = this.state
    return (
      <ScrollView>
        <SafeAreaView style={{ margin: 20 }}>
          <Text h2>Divine and Chains ADMOB</Text>
          
          <Text h4>Banner Ad</Text>
          <AdMobBanner bannerSize="mediumRectangle" adUnitID={"ca-app-pub-7817624951837976/7077780480"} />
          {/* <Text h4>Publisher Banner</Text>
          <PublisherBanner bannerSize="banner" adUnitID={BANNER_ID} /> */}
          <View style  = {{
            marginTop : 80
          }}>
          <Text h4>Interstitial Ad</Text>
          <Button
            title="Open"
            type="outline"
            disabled={disableInterstitialBtn}
            onPress={this._openInterstitial}
          />
       
          </View>
        
        </SafeAreaView>
      </ScrollView>
    )
  }
}

export default Login