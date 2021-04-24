import React, { Component } from 'react'
import {
    Text, 
    View,
    Image,
    SafeAreaView } from 'react-native';
    import Carousel from 'react-native-snap-carousel';
export default class Shop extends Component {

    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              image: "https://i0.wp.com/fringeassociation.com/wp-content/uploads/2018/10/how-many-clothes-do-you-make-buy.jpg?fit=650%2C650&ssl=1",
              price : 5000
          },
          {
              title:"Item 2",
              image: "image 2",
              price : 5000
          },
          {
              title:"Item 3",
              image: "image 3",
              price : 5000
          },
          {
              title:"Item 4",
              image: "image 4",
              price : 5000
          },
          {
              title:"Item 5",
              image: "image 5",
              price : 5000
          },
        ]
      }
    }
    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>

                  <Image source = {{
                      uri : item.image
                  }} />
            {/* <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text> */}
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'whitesmoke', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

