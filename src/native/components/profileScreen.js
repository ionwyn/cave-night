import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import BottomBar from './BottomBar';
import { Container, Header, Left, Body, Right, Button, Title, List, ListItem, Separator } from 'native-base';

import ParallaxScrollView from 'react-native-parallax-scrollview';

import { SCREEN_SCALE, SCREEN_WIDTH, SCREEN_HEIGHT } from '../../constants/constants'

import deep from '../../images/orthis2.jpg'

import { Icon } from 'react-native-elements';


export default class profileScreen extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#151515' }}>
        <ParallaxScrollView
          windowHeight={SCREEN_HEIGHT * 0.4}
          backgroundSource= {deep}
          navBarTitle='Magna Beerke'
          navBarTitleColor='#9c9a9a'
          navBarColor='#151515'
          userName='Magna Beerke'
          userTitle='Victim'
          userImage='https://i.pinimg.com/originals/2c/c6/d2/2cc6d2079e622894baa1c3eb3eec3657.jpg'
          rightIcon={{name: 'settings', color: '#151515', size: 30}}
          style={{paddingBottom: 50, backgroundColor:'#151515'}}
        >
          <ScrollView style={{flex: 1, backgroundColor: '#151515', borderTopWidth: 1, borderColor:'#151515'}}>
            <List style={{backgroundColor: '#151515', flex: 1, borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#151515'}}>
              <ListItem noBorder>
                <Left>
					<Text style={styles.textnicon}>Friends</Text>
                </Left>
                <Right>
                  <Icon name="people" color='#9c9a9a'/>
                </Right>
              </ListItem>
              <ListItem noBorder>
                <Left>
                  <Text style={styles.textnicon}>Favourite Items</Text>
                </Left>
                <Right>
                  <Icon name="star-border" color='#9c9a9a'/>
                </Right>
              </ListItem>
              <ListItem noBorder>
                <Left>
                  <Text style={styles.textnicon}>Purchasing Activities</Text>
                </Left>
                <Right>
                  <Icon name="bookmark-border" color='#9c9a9a'/>
                </Right>
              </ListItem>

              <ListItem noBorder>
                <Left>
                  <Text style={styles.textnicon}>Payment</Text>
                </Left>
                <Right>
                  <Icon name="credit-card" color='#9c9a9a'/>
                </Right>
              </ListItem>

              <Separator style={{backgroundColor: '#151515', flex: 0.3}}/>

              <ListItem noBorder>
                <Left>
                  <Text style={styles.textnicon}>Give us feedback</Text>
                </Left>
                <Right>
                  <Icon name="contact-mail" color='#9c9a9a'/>
                </Right>
              </ListItem>
              <ListItem noBorder>
                <Left>
                  <Text style={styles.textnicon}>Get help</Text>
                </Left>
                <Right>
                  <Icon name="live-help" color='#9c9a9a'/>
                </Right>
              </ListItem>

              <Separator style={{backgroundColor: '#151515', flex: 0.3}}/>

              <ListItem noBorder>
                <Left>
                  <Text style={styles.textnicon}>Privacy Policy</Text>
                </Left>
                <Right>
                  <Icon name="book" color='#9c9a9a'/>
                </Right>
              </ListItem>
              <ListItem noBorder>
                <Left>
                  <Text style={styles.textnicon}>Terms and conditions</Text>
                </Left>
                <Right>
                  <Icon name="list" color='#9c9a9a'/>
                </Right>
              </ListItem>

              <Separator style={{backgroundColor: '#151515', flex: 0.3}}/>
              <Separator style={{backgroundColor: '#151515', flex: 0.3}}/>

              <ListItem noBorder style={{backgroundColor:'#151515'}}>
                <Left>
                  <Text style={styles.textnicon}>Logout</Text>
                </Left>
                <Right>
                  <Icon name="exit-to-app" color='#9c9a9a'/>
                </Right>
              </ListItem>

            </List>
          </ScrollView>
        </ParallaxScrollView>
        <BottomBar />
			</Container>
    );
  }
}

var styles = StyleSheet.create({
  textnicon: {
    color:'#9c9a9a',
    fontFamily: 'comfortaa'
  },
  noborder: {
	backgroundColor: '#151515',
    borderTopWidth: 1,
    borderBottomWidth: 1,
	borderTopWidth: 1,
    borderColor: '#151515'
  },
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: '#151515'
  },
  background: {
    position: 'absolute',
    backgroundColor: '#2e2f31',
    width: SCREEN_WIDTH,
    resizeMode: 'cover'
  },
  content: {
    shadowColor: '#222',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: '#000',
    flex: 1,
    flexDirection: 'column'
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView: {
    backgroundColor: 'rgba(247,247, 250, 1)'
  },
  logoutText: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});
