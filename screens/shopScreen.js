import React, { Component } from "react";
import { Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Hoodie",
          image:
            "https://images.pexels.com/photos/6786666/pexels-photo-6786666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 20,
        },
        {
          title: "Dress kit",
          image:
            "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 30,
        },
        {
          title: "Classy Dress",
          image:
            "https://images.pexels.com/photos/5556663/pexels-photo-5556663.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 40,
        },
        {
          title: "Corporate",
          image:
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 50,
        },
        {
          title: "Swag",
          image:
            "https://images.pexels.com/photos/2866077/pexels-photo-2866077.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 30,
        },
      ],
    };
  }
  _renderItem({ item, index }) {
    return (
      <View style={styles.carousel}>
        <Image

        style = {styles.image}
          source={{
            uri: item.image,
          }}
        />
        <Text style={{fontSize: 30}}>{item.title}  ${item.price}</Text>
            {/* <Text></Text> */}

            <TouchableOpacity style={styles.loginBtn} onPress = {()=>{
                //   this.createAccount()
                alert("clicked")
              }}>
              <Text style={styles.loginText} >Purchase With Algos</Text>
            </TouchableOpacity>

      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >

            <View>
                <Text>Welcome
                    
                </Text>
            </View>
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    // backgroundColor: "floralwhite",
    borderRadius: 5,
    height: 250,
    padding: 5,
    marginLeft: 25,
    marginRight: 25,
  },

  image : {
      height : "90%",
      width : "100%"
  },
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    paddingTop: 50,
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:30,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
  },

  loginText:{
    color:"white"
  }
});
