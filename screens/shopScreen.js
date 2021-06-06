import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { Ionicons } from "@expo/vector-icons";
import { logout } from "../redux/actions/auth";
import { connect } from "react-redux";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      // dummy data
      carouselItems: [
        {
          title: "Hoodie",
          image:
            "https://images.pexels.com/photos/6786666/pexels-photo-6786666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 2,
        },
        {
          title: "Dress kit",
          image:
            "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 3,
        },
        {
          title: "Classy Dress",
          image:
            "https://images.pexels.com/photos/5556663/pexels-photo-5556663.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 8,
        },
        {
          title: "Corporate",
          image:
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 3,
        },
        {
          title: "Swag",
          image:
            "https://images.pexels.com/photos/2866077/pexels-photo-2866077.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 3,
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="power"
          size={32}
          color="white"
          onPress={() => {
            Alert.alert("Confirm", "Are you sure you want to logout?", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "OK",
                onPress: async () => {
                  this.props.logout();
                },
              },
            ]);
          }}
        />
      ),
    });
  }
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.carousel}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <Text style={{ fontSize: 30 }}>{item.title} </Text>
        <Text> {item.price} algos</Text>
        <TouchableOpacity
          style={styles.purchaseBtn}
          onPress={() => {
            this.goToSingleProduct(item);
          }}
        >
          <Text style={styles.loginText}>Purchase Product</Text>
        </TouchableOpacity>
      </View>
    );
  };

  goToSingleProduct = (item) => {
    this.props.navigation.navigate("Product", {
      item,
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.logo}>Fashion Store</Text>

        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <Carousel
            layout={"default"}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>

        {/* <View style={styles.profile}> */}
        <TouchableOpacity
          style={styles.profileBtn}
          onPress={() => {
            //   this.createAccount()
            this.props.navigation.navigate("Profile");
          }}
        >
          <Text style={styles.loginText}>Go To Profile</Text>
        </TouchableOpacity>
        {/* </View> */}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Shop);

const styles = StyleSheet.create({
  carousel: {
    borderRadius: 5,
    height: 250,
    padding: 5,
    marginLeft: 25,
    marginRight: 25,
    alignItems: "center",
  },

  image: {
    height: "90%",
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    paddingTop: 50,
  },

  purchaseBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  profileBtn: {
    width: "60%",
    backgroundColor: "crimson",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  loginText: {
    color: "white",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    alignSelf: "center",
    marginBottom: 40,
  },
  profile: {
    alignSelf: "center",
  },
});
