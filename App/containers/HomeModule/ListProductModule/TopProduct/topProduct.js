
import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';

import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions/index'
import ProductStyles from './ProductStyles'
import FlatListItem from './FlatListItem';
import {Colors1 ,Colors2} from '../../../../Themes/Colors';

class TopProduct extends Component {
    
    render() {
        var {searchProduct, products, mode} = this.props;
        var color = mode === true ? Colors1 : Colors2;
		const styless = ProductStyles(color);
        const data = searchProduct.length === 0 ? products : searchProduct;
        return (
            <View style={styless.container} elevation = {10} >

                <View style={styless.titleProduct} >
                    <Text style={styless.title}>
                        TOP PRODUCT
                    </Text>
                </View>

                <View style={styless.body} >
                
                    <FlatList
                        numColumns = {2}
                        keyExtractor={(item, index) => item.name}
                        data = {data}
                        renderItem = {({item, index}) =>{
                            return <FlatListItem item = {item} />
                        }}
                    >
                    
                    </FlatList>

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

const mapDispatchToProps = (dispatch, props) =>{
    return{
        addProduct: (name) => dispatch(actions.actAddToCart(name)),
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopProduct);