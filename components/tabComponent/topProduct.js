
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    FlatList,
    TouchableOpacity

} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index'
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window');
const widthImageProduct = (width - 60) / 2;
const heightImageProduct = widthImageProduct * 1200 / 800;
 class TopProduct extends Component {


    render() {

        var {products, addProduct} = this.props;

        return (
            <View style={styles.container} elevation = {10} >

                <View style={styles.titleProduct} >
                    <Text style={styles.title}>
                        TOP PRODUCT
                    </Text>
                </View>

                <View style={styles.body} >

                    <FlatList
                        numColumns = {2}
                        keyExtractor={(item, index) => item.name}
                        data = {products}
                        renderItem = {({item, index}) =>{
                            return (
                                <View style={styles.ProductContainer}  >
                                    <Image style={styles.ImageProduct} source={{uri: item.image}} />
                                    <View style = {{flexDirection: 'row'}} >
                                        <View style = {{flexDirection: 'column'}} >
                                            <Text style={styles.nameProduct} >
                                                {item.name}
                                            </Text>
                                            <Text style={styles.priceProduct} >
                                                {item.price} $
                                            </Text>
                                        </View>

                                        <View>
                                        <TouchableOpacity onPress = {() =>addProduct(item)}  >
                                            <Icon name="cart-plus" size={26} />
                                        </TouchableOpacity>
                                            
                                            
                                        </View>
                                    </View>
                                </View> 
                            )
                        }}
                    >
                    
                    </FlatList>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
    },
    titleProduct: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',

    },
    title: {
        color: "#a4a4a5",
        fontSize: 20,

    },
    ImageProduct: {
        width: widthImageProduct,
        height: heightImageProduct
    },
    ProductContainer:{
        marginHorizontal: 5,
        elevation: 5,
        paddingBottom: 10,
        width: widthImageProduct,
        borderWidth: 0.1,
        marginBottom: 20,
       

    },
    nameProduct: {
        marginLeft: 10,
    },
    priceProduct: {
        marginLeft: 10,
    }

});

const mapStateToProps  = state =>{
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) =>{  // truyền vào cho state của Reducer: CART
    return{
        addProduct: (name) => dispatch(actions.actAddToCart(name)),
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopProduct);