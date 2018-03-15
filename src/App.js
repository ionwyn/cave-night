import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import MainLogin from './native/components/MainLogin';
import BeginRoute from './native/routes/index';

export default class loginAnimation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BeginRoute />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
