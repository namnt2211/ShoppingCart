
import React, { Component } from 'react';
import {
	Text,
	Image,
	View,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../../../redux/actions/index'
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductStyles from './ProductStyles'

class FlatListItem extends Component {
	render() {
		var {addProduct, item} = this.props;
		return (
			<View style={ProductStyles.ProductContainer}  >
				<Image style={ProductStyles.ImageProduct} source={{ uri: item.image }} />
				<View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
					<View style={{ flexDirection: 'column' }} >
						<Text style={ProductStyles.nameProduct} >
							{item.name}
						</Text>
						<Text style={ProductStyles.priceProduct} >
							{item.price} $
                        </Text>
					</View>

					<View style={{ marginRight: 5 }}  >
						<TouchableOpacity onPress={() =>{
							return(
								console.log('object'),
								addProduct(item)
							)
						}}  >
							<Icon name="cart-plus" size={26} />
						</TouchableOpacity>
					</View>
				</View>
			</View>

		);
	}
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addProduct: (item) => dispatch(actions.actAddToCart(item)),
       
    }
}

export default connect(null, mapDispatchToProps)(FlatListItem);