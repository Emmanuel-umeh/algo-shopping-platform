import React, { Component } from "react";
import { Text, View, StyleSheet, Image, SafeAreaView } from "react-native";
import Carousel from "react-native-snap-carousel";
export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Item 1",
          image:
            "https://images.pexels.com/photos/6786666/pexels-photo-6786666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 20,
        },
        {
          title: "Item 2",
          image:
            "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 30,
        },
        {
          title: "Item 3",
          image:
            "https://images.pexels.com/photos/5556663/pexels-photo-5556663.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 40,
        },
        {
          title: "Item 4",
          image:
            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          price: 50,
        },
        {
          title: "Item 5",
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
        <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.price}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    backgroundColor: "floralwhite",
    borderRadius: 5,
    height: 250,
    padding: 50,
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
});
