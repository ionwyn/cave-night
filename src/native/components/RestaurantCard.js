import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
	Text
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, InputGroup, Input, Content, List, ListItem, Card, CardItem } from 'native-base';

export default class RestaurantCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
			dist: props.dist,
			likes: props.like,
			image: props.img
    };
  }

  render() {
    return (
      <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://cdn2.iconfinder.com/data/icons/animals-47/100/004_-_elephant-256.png'}} />
                <Body>
                  <Text>{this.state.name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: this.state.image }} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="star" style={{color: '#000000'}}/>
                  <Text>{this.state.likes}</Text>
                </Button>
              </Left>
              <Right>
								<Icon name="ios-locate" style={{color: '#000000'}}/>
                <Text>{ this.state.dist } km</Text>
              </Right>
            </CardItem>
          </Card>
    );
  }
}
