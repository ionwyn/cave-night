import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import MainLogin from './native/components/MainLogin';

export default class loginAnimation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainLogin />
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
