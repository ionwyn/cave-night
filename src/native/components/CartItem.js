import React, { Component } from 'react';
import { View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

const image1 = require('../../images/martini.jpg');
const image2 = require('../../images/tequila.jpeg');
const image3 = require('../../images/beer.jpg');
const image4 = require('../../images/vodka.jpg');
const image5 = require('../../images/rum.jpg');

const data = [
{
  id: 1,
  image: image1,
  name: 'Martini',
  price: 10,
  amountTaken: 3
}, {
  id: 2,
  image: image2,
  name: 'Tequila',
  price: 5,
  amountTaken: 4
}, {
  id: 3,
  image: image3,
  name: 'Beer',
  price: 16,
  amountTaken: 2
}, {
  id: 4,
  image: image4,
  name: 'Vodka',
  price: 3,
  amountTaken: 3
}, {
  id: 5,
  image: image5,
  name: 'Rum',
  price: 20,
  amountTaken: 1
},
];

class Item extends Component {
  _renderItem({ item, index }) {
    const {
      containerStyle,
      lastItemStyle,
      imageStyle,
      textStyle,
      counterStyle,
      priceStyle } = styles;

    return (
    <View style={(index + 1 === data.length) ? lastItemStyle : containerStyle}>
      <Image source={item.image} style={imageStyle} />

      <View style={textStyle}>
        <Text style={{ color: '#9c9a9a' }}>{item.name}</Text>
        <View style={priceStyle}>
          <Text style={{ color: '#2e2f30', fontSize: 12 }}>${item.price}</Text>
        </View>
      </View>

      <View style={counterStyle}>
        <Icon
          name="ios-remove"
          size={25}
          color='#fff'
          iconStyle={{ marginRight: 0 }}
        />

        <Text style={{fontSize:20, color:'#7A7A7A'}}>{item.amountTaken}</Text>

        <Icon
          name="ios-add"
          size={25}
          color='#fff'
          iconStyle={{ marginRight: 0 }}
        />

      </View>
    </View>);
  }


  render() {
    return (
      <FlatList
        data={data}
        renderItem={this._renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#151515',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#151515'
  },
  lastItemStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#151515'
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center'
  },
  priceStyle: {
    backgroundColor: '#FF8000',
    width: 40,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default Item;
