
import React, { Component } from 'react';
import {
	Text,
	Image,
	View,
	TouchableOpacity,
	Dimensions
} from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../../../../redux/actions/index'
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductStyles from './ProductStyles';
import BaseComponent from '../../../../components/BaseComponent'

class FlatListItem extends BaseComponent {
	constructor(props) {
	  super(props)
	
	  this.state = {
		 color: this.getColor()
	  };
	};
	
	
	render() {
		var {addProduct, item} = this.props;
		const styless = ProductStyles(this.state.color);

		return (
			<View style={styless.ProductContainer}  >
				<Image style={styless.ImageProduct} source={{ uri: item.image }} />
				<View style={styless.infoProduct} >
					<View style={{ flexDirection: 'column' }} >
						<Text style={styless.nameProduct} >
							{item.name}
						</Text>
						<Text style={styless.priceProduct} >
							{item.price} $ 
                        </Text>
					</View>

					<View style={{ marginRight: 5 }}  >
						<TouchableOpacity onPress={() =>{
							return(
								addProduct(item)
							)
						}}  >
							<Icon name="cart-plus" size={26} color = {this.state.color.lightBlue} />
						</TouchableOpacity>
					</View>
				</View>
			</View>

		);
	}
}


const mapStateToProps = state => { 
    return {

        mode : state.changeMode
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addProduct: (item) => dispatch(actions.actAddToCart(item)),
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatListItem);