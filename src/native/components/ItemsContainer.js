import React, { Component } from 'react';
import { View } from 'react-native';
import Item from './CartItem';

class ItemsContainer extends Component {
  render() {
    return (
      <View style={styles.containterStyle}>
        <Item />
      </View>
    );
  }
}

const styles = {
  containterStyle: {
    flex: 4,
    backgroundColor: '#151515'
  }
};

export default ItemsContainer;
