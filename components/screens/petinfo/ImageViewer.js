import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

export class ImageViewer extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		let { width, height } = Dimensions.get('window');
		let images = this.props.navigation.getParam('images');
		let pics = images.map((img, index) => {
			return (
					<Image 
						key={index}
						style={{
							width: width, 
							height: height
						}}
						source={{uri: img}}
						resizeMode="contain" 
					/>
			)
		})

		this.setState({pics});
	}

	static navigationOptions = {
		title: 'Search Results',
    headerTransparent: true,
    headerTintColor: 'transparent'
  };

	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#000'}}>
			{!!this.state.pics &&
				<Swiper dotStyle={{backgroundColor: '#fff'}} style={{flex: 1}} showButtons={true}>{this.state.pics}</Swiper>
			}
			</View>
		)
	}

}