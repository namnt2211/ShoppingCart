
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import * as message from '../../redux/message'
const { height, width } = Dimensions.get('window');
const widthImageProduct = (width - 60)/4;
const heightImageProduct = widthImageProduct * 1200 / 800;

class CartComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        let tabBarLabel = 'Cart';
        let tabBarIcon = () => (
            <Icon name="cart-arrow-down" size={26} />
        );

        return { tabBarLabel, tabBarIcon }
    }

    constructor(props) {
        super(props);
        this.state = {
            newProduct: '',
            a: 1
        }
    }

    showTotalAmount = (cart) =>{
        var total = 0;
        if(cart.length > 0) {
            for (var i = 0; i < cart.length; i++)
            {
                total += cart[i].price*cart[i].number;
            }
        }
        return  total;
    }

    render() {
        let pay = 0;
        const { addProduct, cart, onDelete, addNumberProduct, subNumberProduct } = this.props;
        
      
        return (
            cart.length === 0 ?
             <View>
                <Text style = {styles.priceProduct} >
                    {message.NO_CART}
                </Text>
             </View>
             
             :
            <View style={styles.container}>
                <ScrollView>
                <FlatList      
                    keyExtractor={(item, index) => item.name}              
                    data={cart}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.ProductContainer}  >
                                <Image style={styles.ImageProduct} source={{ uri: item.image }} />
                                <View style={{ flexDirection: 'column', width: 200, justifyContent: 'space-around'  }} >
                                        
                                    <Text style={styles.nameProduct} >
                                        Tên: {item.name}
                                    </Text>
                                    <Text style={styles.priceProduct} >
                                        Giá: {item.price} $
                                    </Text>

                                    <View style={{ flexDirection: 'row'}}  >
                                    <Text style={styles.priceProduct} >
                                            Số lượng:
                                        </Text>
                                        <TouchableOpacity style = {{marginHorizontal: 20}}
                                            onPress = {()=> subNumberProduct(item.id)}
                                         >
                                            <Icon name="minus" size={26} />
                                        </TouchableOpacity>
                                            <Text style={styles.number}  >
                                                {item.number}
                                            </Text>
                                        <TouchableOpacity  style = {{marginHorizontal: 20}} onPress = {()=> addNumberProduct(item.id)}>
                                            <Icon name="plus" size={26} />
                                        </TouchableOpacity>
                                        
                                    </View>
                                    
                                </View>
                                <View  style ={styles.buttonCancel} >
                                        <TouchableOpacity onPress = {() => onDelete(item.id)} >
                                            <Icon name="times-circle" size={26} />
                                        </TouchableOpacity>
                                        </View>
                                       
                            </View>
                        )
                    }}
                >
                </FlatList>
                </ScrollView>

                    <View style = {{flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between', }} >
                        <Text style={styles.priceProduct}>
                        Tổng tiền: {this.showTotalAmount(cart)} $
                        </Text>
                        
                        <TouchableOpacity style = {{backgroundColor: 'darkviolet', borderRadius: 5, margin: 10 }} >
                            <Text style = {{fontSize: 18, marginVertical: 5, marginHorizontal: 20,}} >
                                Đặt mua
                            </Text>
                        </TouchableOpacity>
                   </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginHorizontal: 10,
       
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
        height: heightImageProduct,
        margin: 10,
    },
    ProductContainer: {
        flexDirection: 'row',
        marginHorizontal: 5,
        elevation: 3,
        paddingBottom: 10,
        width: width - 30,
        borderWidth: 0.1,
        marginVertical: 5,


    },
    nameProduct: {
        marginLeft: 10,
        fontSize: 20,
    },
    priceProduct: {
        marginLeft: 10,
        fontSize: 20,
    },
    buttonCancel:{
        alignItems: 'flex-end',
        marginTop: 5,
        marginRight: 10,

    },
    number:{
        fontSize: 20,
    }

});

const mapStateToProps = state => { 
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) =>{  
    return{
        onDelete: (id) => dispatch(actions.actDeleteToCart(id)),
        addNumberProduct: (id) => dispatch(actions.addNumberProduct(id)),
        subNumberProduct: (id) => dispatch(actions.subNumberProduct(id)),

       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);