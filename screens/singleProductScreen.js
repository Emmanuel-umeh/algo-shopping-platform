import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { purchase } from "../redux/actions/order";
const {width, height} = Dimensions.get("window")
class Product extends Component {
  componentDidMount() {
    const { item } = this.props.route.params;
    console.log({ item });
    if (!item) {
      this.props.navigation.pop();
    }
  }

  state = {
    loading: false,
  };

  purchaseProduct = () => {
    const { item } = this.props.route.params;
    const { mnemonic } = this.props.auth;
    let price = item.price;
    console.log({ price });

    Alert.alert("Confirm", "Are you sure you want to purchase this product?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          this.setState({
            loading: true,
          });

          var response = await this.props.purchase(price, mnemonic);

          this.setState({
            loading: false,
          });

          alert(response);
        },
      },
    ]);
  };
  render() {
  
    const { item } = this.props.route.params;
    return (
      <View style={styles.container}>
        {this.state.loading && (
          <View style={styles.spinner}>
            <ActivityIndicator size="large" color="white" />
          </View>
        )}
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />

        <View style={styles.details}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text}>Price : {item.price} algos</Text>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              //   this.createAccount()
              // alert("clicked")
              //  this.goToSingleProduct(item)

              this.purchaseProduct();
            }}
          >
            <Text style={styles.loginText}>Purchase With Algos</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order,
});

// export default ProjectForm
export default connect(mapStateToProps, { purchase })(Product);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  image: {
    height: "60%",
    width: "100%",
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    alignSelf: "center",
  },

  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  loginText: {
    color: "white",
  },
  spinner: {
      position : "absolute",
    marginTop : height/2.7,
    marginLeft :width/2.7,
    zIndex : 999
  },
});
