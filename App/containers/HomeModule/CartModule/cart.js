
import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import * as message from '../../../redux/message';
import CartStyles from './cartStyles';

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
            for (var i = 0; i < cart.length; i++){
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
                <Text style = {CartStyles.priceProduct} >
                    {message.NO_CART}
                </Text>
            </View>             
            :
            <View style={CartStyles.container}>
                <ScrollView>
                <FlatList      
                    keyExtractor={(item, index) => item.name}              
                    data={cart}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={CartStyles.ProductContainer}  >
                                <Image style={CartStyles.ImageProduct} source={{ uri: item.image }} />
                                <View style={{ flexDirection: 'column', width: 200, justifyContent: 'space-around'  }} >
                                        
                                    <Text style={CartStyles.nameProduct} >
                                        Tên: {item.name}
                                    </Text>
                                    <Text style={CartStyles.priceProduct} >
                                        Giá: {item.price} $
                                    </Text>

                                    <View style={{ flexDirection: 'row'}}  >
                                    <Text style={CartStyles.priceProduct} >
                                            Số lượng:
                                        </Text>
                                        <TouchableOpacity style = {{marginHorizontal: 20}}
                                            onPress = {()=> subNumberProduct(item.id)}
                                         >
                                            <Icon name="minus" size={26} />
                                        </TouchableOpacity>
                                            <Text style={CartStyles.number}  >
                                                {item.number}
                                            </Text>
                                        <TouchableOpacity  style = {{marginHorizontal: 20}} onPress = {()=> addNumberProduct(item.id)}>
                                            <Icon name="plus" size={26} />
                                        </TouchableOpacity>
                                        
                                    </View>
                                    
                                </View>
                                <View  style ={CartStyles.buttonCancel} >
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
                    
                        <Text style={CartStyles.priceProduct}>
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