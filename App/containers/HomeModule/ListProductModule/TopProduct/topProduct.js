
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

class TopProduct extends Component {

    render() {
        
        var {searchProduct, products} = this.props;
        const data = searchProduct.length === 0 ? products : searchProduct;
        return (
            <View style={ProductStyles.container} elevation = {10} >

                <View style={ProductStyles.titleProduct} >
                    <Text style={ProductStyles.title}>
                        TOP PRODUCT
                    </Text>
                </View>

                <View style={ProductStyles.body} >
                
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
        searchProduct: state.searchProduct
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return{
        addProduct: (name) => dispatch(actions.actAddToCart(name)),
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopProduct);