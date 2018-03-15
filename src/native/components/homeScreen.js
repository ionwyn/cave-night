import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	ScrollView,
	Easing,
	Text,
	StatusBar
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import arrowImg from '../../images/left-arrow.png';
import BottomBar from './BottomBar';
import RestaurantCard from './RestaurantCard';

import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, InputGroup, Input, Content, List, ListItem, Card, CardItem } from 'native-base';


const SIZE = 40;

export default class homeScreen extends Component {
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

		let data = [
              {key: 1, label: 'Gorg-O-Mish', likes: 123, image: 'https://www.residentadvisor.net/images/clubs/photos/ca-vancouver-gorgomish.jpg'},
              {key: 1, label: 'Celebrities', likes: 114, image: 'https://www.residentadvisor.net/images/clubs/photos/ca-vancouver-fortunesoundclub.jpg'},
              {key: 2, label: 'Vancouver Arts and Leisures', likes: 9, image: 'http://enterineo.com/wp-content/uploads/2015/01/IMG_5801-750x500.jpg'},
              {key: 3, label: '560', likes: 11, image: 'http://cdn.clubzone.com/content/uploads/places/7374/3-650x430.jpg'},
              {key: 5, label: 'Library Public Square', likes: 10, image: 'https://media-cdn.tripadvisor.com/media/photo-o/04/1a/f3/2d/library-square-public.jpg'},
              {key: 8, label: 'Boiler Room', likes: 12, image: 'https://www.residentadvisor.net/photos/2018/it180224-1055381/sinth_dn_senza_logo_19.jpg'},
              {key: 13, label: 'Arjuna Deep', likes: 14, image: 'http://1.bp.blogspot.com/-9ArzgikrqKI/U34EtEO0tHI/AAAAAAAAAhM/jxEagDaf6_c/s1600/deep2.jpg'},
              {key: 21,label: 'Amelie Lens', likes: 322, image: 'https://www.residentadvisor.net/images/events/flyer/2018/3/nl-0317-1013815-front.jpg'},
           ]


		return (
			<Container style={{flex: 1}}>
			<Container style={{flex:1, paddingBottom: 50}}>
				<Header style={{ backgroundColor: 'black' }}
          androidStatusBarColor="black">
					<Body>
						<Text style={{color:'white'}}>Fuck</Text>
					</Body>
				</Header>
          <List dataArray={ data }
            renderRow={(data) =>
							<RestaurantCard name={data.label} dist={data.key} like={data.likes} img={data.image} />
            }>
          </List>
        </Container>
				<BottomBar/>
			</Container>

		);
	}
}

const styles = StyleSheet.create({
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
