import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
	Text
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import arrowImg from '../../images/left-arrow.png';
import BottomBar from './BottomBar';
import RestaurantCard from './RestaurantCard';

import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, InputGroup, Input, Content, List, ListItem, Card, CardItem } from 'native-base';


const SIZE = 40;

export default class SecondScreen extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
			page: "HomeScreen",
		};

		this._onPress = this._onPress.bind(this);
		this.growAnimated = new Animated.Value(0);
	}

	_onPress() {
		if (this.state.isLoading) return;

		this.setState({ isLoading: true });

		Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 300,
				easing: Easing.linear,
			}
		).start();

		setTimeout(() => {
			Actions.pop();
		}, 500);
	}

	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		});

		var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can', 'Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can', 'Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can', 'Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];

		return (
			<Container>
				<View searchBar style={{flexDirection: 'row', padding:10}}>

						<InputGroup rounded style={{flex:1, backgroundColor:'#fff',height:30, paddingLeft:10, paddingRight:10}}>
							<Icon name="ios-search" />
							<Input style={{height:20}} placeholder="Search Article" />
							<Icon name="ios-list" />
						</InputGroup>

						<Button transparent style={{height:30}} onPress={() => null}>
							<Text>Search</Text>
						</Button>
				</View>
				<BottomBar/>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		// width: SIZE,
		// height: SIZE,
		borderRadius: 100,
		zIndex: 99,
		backgroundColor: '#000000',
	},
	circle: {
		height: SIZE,
		width: SIZE,
		marginTop: -SIZE,
		borderRadius: 100,
		backgroundColor: '#000000',
	},
	image: {
		width: 24,
		height: 24,
	}
});
