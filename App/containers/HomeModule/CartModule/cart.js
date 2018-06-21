
import React, { Component } from 'react';
import {
    Text,
    View,
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
import {Colors1, Colors2} from '../../../Themes/Colors';

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
        const {cart, onDelete, addNumberProduct, subNumberProduct,mode } = this.props;
        var color = mode === true ? Colors1 : Colors2;
		const styless = CartStyles(color);
        return (
            cart.length === 0 ?
            <View>
                <Text style = {styless.priceProduct} >
                    {message.NO_CART}
                </Text>
            </View>             
            :
            <View style={styless.container}>
                <ScrollView>
                <FlatList      
                    keyExtractor={(item, index) => item.name}              
                    data={cart}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styless.ProductContainer}  >
                                <Image 
                                    style={styless.ImageProduct} 
                                    source={{ uri: item.image }} />
                                <View style={{ flexDirection: 'column', width: 200, justifyContent: 'space-around'  }} >
                                        
                                    <Text style={styless.nameProduct} >
                                        Tên: {item.name}
                                    </Text>
                                    <Text style={styless.priceProduct} >
                                        Giá: {item.price} $
                                    </Text>

                                    <View style={{ flexDirection: 'row'}}  >
                                    <Text style={styless.priceProduct} >
                                            Số lượng:
                                        </Text>
                                        <TouchableOpacity style = {{marginHorizontal: 20}}
                                            onPress = {()=> subNumberProduct(item.id)}
                                         >
                                            <Icon name="minus" size={26} color = {color.text}/>
                                        </TouchableOpacity>
                                            <Text style={styless.number}  >
                                                {item.number}
                                            </Text>
                                        <TouchableOpacity  style = {{marginHorizontal: 20}} onPress = {()=> addNumberProduct(item.id)}>
                                            <Icon name="plus" size={26} color = {color.text} />
                                        </TouchableOpacity>
                                        
                                    </View>
                                    
                                </View>
                                <View  style ={styless.buttonCancel} >
                                        <TouchableOpacity onPress = {() => onDelete(item.id)} >
                                            <Icon name="times-circle" size={26} color = {color.text} />
                                        </TouchableOpacity>
                                        </View>
                                       
                            </View>
                        )
                    }}
                >
                </FlatList>
                </ScrollView>

                    <View style = {{flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between', }} >
                    
                        <Text style={styless.priceProduct}>
                        Tổng tiền: {this.showTotalAmount(cart)} $
                        </Text>
                        
                        <TouchableOpacity style = {styless.btnPay} >
                            <Text style = {styless.txtPay} >
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
        cart: state.cart,
        mode : state.changeMode
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