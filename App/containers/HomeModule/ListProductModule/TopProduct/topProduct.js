
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
import BaseComponent from '../../../../components/BaseComponent'

class TopProduct extends BaseComponent {
    constructor(props) {
        super(props)
      
        this.state = {
           color: this.getColor()
        };
      };
    render() {
        var {searchProduct, products} = this.props;
		const styless = ProductStyles(this.state.color);
        const data = searchProduct.length === 0 ? products : searchProduct;
        return (
            <View style={styless.container}>

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