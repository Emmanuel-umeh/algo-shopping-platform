import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, TextInput, ScrollView } from "react-native";

class Profile extends Component {
  render() {
    const { mnemonic, userAddress } = this.props.auth;
    return (
      <View style={styles.container}>
        <ScrollView>

          <View style  ={styles.balance}>
            <Text style = {styles.text}>Current Balance</Text>
            <Text style = {styles.text}>0 Algos</Text>
          </View>
        <Text style={styles.text}>
          Please ensure you copy and store your mnemonic key down
        </Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            editable={false}
            selectTextOnFocus={false}
            defaultValue={mnemonic ? mnemonic : null}
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
            editable={false}
            //  selectTextOnFocus={false}
            defaultValue={userAddress ? userAddress : null}
            underlineColorAndroid="transparent"
            multiline={true}
            placeholder="Address"
          ></TextInput>
        </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    padding : 20,

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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

// export default ProjectForm
export default connect(mapStateToProps, null)(Profile);
