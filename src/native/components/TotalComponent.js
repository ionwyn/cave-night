import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, List, ListItem, Text, Left, Right } from 'native-base';

const TotalComponent = () => {
  const { containerStyle, goodsStyle, totalStyle } = styles;
  return (
    <View style={containerStyle}>
      <View style={goodsStyle}>
        <Left>
          <Icon name="ios-cart" size={20} style={{ marginRight: 8 }} />
          <Text>13 drinks</Text>
        </Left>
        <Right>
          <Text style={{textAlign:'left'}}>$300</Text>
        </Right>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  goodsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};


export default TotalComponent;
