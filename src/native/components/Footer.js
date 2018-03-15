import React from 'react';
import { View, Text } from 'react-native';
import TotalComp from './TotalComponent';

import Icon from 'react-native-vector-icons/Entypo';

const Footer = () => {
  const {
    containerStyle,
    buttonContainerStyle,
    closeButtonStyle,
    checkoutButtonStyle } = styles;
  return (
    <View style={containerStyle}>
      <View style={buttonContainerStyle}>
        <View style={checkoutButtonStyle}>
          <Icon name="drink" size={25} color='#151515'/>
        </View>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderColor: '#151515',
  },
  buttonContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 15,
  },
  closeButtonStyle: {
    backgroundColor: '#151515',
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 3,
  },
  checkoutButtonStyle: {
    backgroundColor: '#FF8000',
    padding: 10,
    paddingRight: 60,
    paddingLeft: 60,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
  }
};

export default Footer;
