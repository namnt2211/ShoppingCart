
import React, { Component } from 'react';
import {
	Text,
	View,
	ImageBackground
} from 'react-native';
import Swiper from 'react-native-swiper';
import Images from '../../../../Themes/Images'
import CategoryStyles, {widthSwiper, heightSwiper} from './CategoryStyles';
import {Colors1, Colors2} from '../../../../Themes/Colors';
import { connect } from 'react-redux';

class Category extends Component {
	render() {

		var {mode} = this.props;
		var color = mode === true ? Colors1 : Colors2;
		const styless = CategoryStyles(color);
		return (
			<View style={styless.container} elevation={5} >

				<View style={styless.titleProduct} >
					<Text style={styless.title}>
						CATEGORY
                    </Text>
				</View>

				<View style={styless.body} >
					<Swiper height={heightSwiper}
						width={widthSwiper}
						autoplay={true}
						autoplayDirection={true}
						autoplayTimeout={3}
						showsButtons = {true} 
					>
						<ImageBackground style={styless.ImageStyle} source={Images.category1}>
							<Text style={styless.title} >
								Product
							</Text>
						</ImageBackground>
						<ImageBackground style={styless.ImageStyle} source={Images.category2}>
							<Text style={styless.title} >
								Product
							</Text>
						</ImageBackground>
						<ImageBackground style={styless.ImageStyle} source={Images.category3}>
							<Text style={styless.title} >
								Product
							</Text>
						</ImageBackground>
						<ImageBackground style={styless.ImageStyle} source={Images.category4}>
							<Text style={styless.title} >
								Product
							</Text>
						</ImageBackground>

					</Swiper>
				</View>
			</View>
		);
	}
}

const mapStateToProps  = state =>{
    return {
        products: state.products,
        searchProduct: state.searchProduct,
        mode : state.changeMode
    }
}

export default connect(mapStateToProps, null)(Category);