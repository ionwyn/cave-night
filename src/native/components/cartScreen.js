import React, { Component } from 'react';
import { View } from 'react-native';
import ItemsContainer from './ItemsContainer';
import BasketContainer from './BasketComponent';
import Footer from './Footer';
import BottomBar from './BottomBar';

import { Container, Header, Content, List, ListItem, Text, Body } from 'native-base';

export default class Cart extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'#363636' }}>
        <Container style={{paddingBottom: 10}}>
          <Header style={{ backgroundColor: '#151515' }}
            androidStatusBarColor="#151515">
            <Body>
              <Text style={{color:'#9c9a9a'}}>Cart</Text>
            </Body>
          </Header>
          <ItemsContainer />
          <Footer />
        </Container>
        <BottomBar />
      </View>

    );
  }
}
