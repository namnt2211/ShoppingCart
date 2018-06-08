
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index'
import Icon from 'react-native-vector-icons/FontAwesome';
 class FlatListItem extends Component {


	render() {
		return (
			<View style = {{flex: 1}} >
				<View style={{ marginVertical: 5, marginHorizontal: 10 }} >

					<View>
						<Image
							style={{ width: 300, height: 300, marginBottom: 5 }}
							source={{ uri: this.props.item.image }}
						>
						</Image>
					</View>

					<View>
						<Text >
							{this.props.item.name}
						</Text>
					</View>
					<View style={{ marginVertical: 5, marginHorizontal: 10 }}  >
						<Text>
							{this.props.item.Description}
						</Text>
						<Text>
							{this.props.item.price} $
						</Text>

						<TouchableOpacity onPress = {() => this.props.addProduct(this.props.item)}  >
							<Icon name="cart-plus" size={26} />
						</TouchableOpacity>
					</View>
				</View>

				<View style={{ height: 1, backgroundColor: '#333333', marginHorizontal: 10 }}>

				</View>
			</View>

		);
	}
}

const mapStateToProps  = state =>{ // lấy state từ reducer: PRODUCT
    return {
        products: state.products,
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) =>{  // truyền vào cho state của Reducer: CART
    return{
        addProduct: (name) => dispatch(actions.actAddToCart(name)),
       
    }
}

export default connect(null, mapDispatchToProps)(FlatListItem);