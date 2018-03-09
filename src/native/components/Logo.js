import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../../images/mk.png';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
				<Text style={styles.text}>MK ULTRA</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 80,
		height: 80,
	},
	text: {
		color: 'white',
		fontFamily: 'serif',
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
		fontSize: 50,
		backgroundColor: 'transparent',
		marginTop: 20,
	}
});
