
import React, { Component } from 'react';
import {
	Text,
	View,
	ImageBackground
} from 'react-native';
import Swiper from 'react-native-swiper';
import Images from '../../../../Themes/Images'
import CategoryStyles, {widthSwiper, heightSwiper} from './CategoryStyles';


export default class Category extends Component {
	render() {
		return (
			<View style={CategoryStyles.container} elevation={5} >

				<View style={CategoryStyles.titleProduct} >
					<Text style={CategoryStyles.title}>
						CATEGORY
                    </Text>
				</View>

				<View style={CategoryStyles.body} >
					<Swiper height={heightSwiper}
						width={widthSwiper}
						autoplay={true}
						autoplayDirection={true}
						autoplayTimeout={3}
						showsButtons = {true} 
					>
						<ImageBackground style={CategoryStyles.ImageStyle} source={Images.category1}>
							<Text style={CategoryStyles.title} >
								Product
							</Text>
						</ImageBackground>
						<ImageBackground style={CategoryStyles.ImageStyle} source={Images.category2}>
							<Text style={CategoryStyles.title} >
								Product
							</Text>
						</ImageBackground>
						<ImageBackground style={CategoryStyles.ImageStyle} source={Images.category3}>
							<Text style={CategoryStyles.title} >
								Product
							</Text>
						</ImageBackground>
						<ImageBackground style={CategoryStyles.ImageStyle} source={Images.category4}>
							<Text style={CategoryStyles.title} >
								Product
							</Text>
						</ImageBackground>

					</Swiper>
				</View>
			</View>
		);
	}
}
