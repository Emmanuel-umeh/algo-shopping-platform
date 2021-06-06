import React, { useFocusEffect, useCallback } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import {useSelector, useDispatch} from "react-redux"
import {fetch_balance} from "../redux/actions/auth"

export default function Profile() {
const {mnemonic, userAddress, balance} = useSelector(state => state.auth)
const dispatch = useDispatch()

// useEffect(() => {
//   dispatch(fetch_balance(mnemonic))
 
// }, [])
useFocusEffect(
  useCallback(() => {
   dispatch(fetch_balance(mnemonic));
  }, [userAddress])
);

  return (

      <View style={styles.container}>
        <ScrollView>

          <View style  ={styles.balance}>
            <Text style = {styles.text}>Current Balance</Text>
            <Text style = {[styles.text, {
              fontWeight : "bold"
            }]}>{balance} Algos</Text>
          </View>
        <Text style={styles.text}>
          Please ensure you copy and store your mnemonic key down
        </Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            // editable={false}
            selectTextOnFocus={false}
            value={mnemonic ? mnemonic : null}
            underlineColorAndroid="transparent"
            placeholder="Mnemonic Key"
            placeholderTextColor="grey"
            numberOfLines={20}
            multiline={true}
          />
        </View>

        <Text style={styles.text}>Your Address</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            // editable={false}
            //  selectTextOnFocus={false}
            value={userAddress ? userAddress : null}
            underlineColorAndroid="transparent"
            multiline={true}
            placeholder="Address"
          ></TextInput>
        </View>
        </ScrollView>
      </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    padding : 20,
    paddingTop : 0,

    alignSelf : "center"
  },
  inputText: {
    // height:0,
    color: "white",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignSelf: "center",
    padding: 20,
  },
  balance : {
    padding  : 20
  }
});

