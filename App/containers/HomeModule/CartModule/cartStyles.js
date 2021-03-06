import {StyleSheet, Dimensions, Platform } from 'react-native';
import Metrics from '../../../Themes/Metrics';
import Matrics from '../../../Themes/Metrics';


const { height, width } = Dimensions.get('window');
const widthImageProduct = (width - 60)/4;
const heightImageProduct = widthImageProduct * 1200 / 800;

const CartStyles = (color) =>{
    return StyleSheet.create({
        container: {
            flex: 1,
            // margin: Matrics.base,
            backgroundColor: color.white
        },
        titleProduct: {
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: Matrics.base,
           
        },
        body: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
    
        },
        title: {
            color: color.gray,
            fontSize: Matrics.doubleBase,
    
        },
        ImageProduct: {
            width: widthImageProduct,
            height: heightImageProduct,
            margin: Matrics.base,
        },
        ProductContainer: {
            flexDirection: 'row',
            marginHorizontal: Matrics.base,
            backgroundColor: color.light ,
            paddingBottom: Matrics.base,
            width: width - 20,
            borderWidth: Platform.OS === 'ios' ? 0.3 : 0.1 ,
            marginVertical: Matrics.small,
            shadowColor: 'black',
			shadowOpacity: 0.3,
			shadowOffset: {
				width: Matrics.small,
				height: Matrics.small
			},
           
        },
        nameProduct: {
            marginLeft: Matrics.base,
            fontSize: Matrics.doubleBase,
            color: color.text
        },
        priceProduct: {
            marginLeft: Matrics.base,
            fontSize: Matrics.doubleBase,
            color: color.text
        },
        buttonCancel:{
            alignItems: 'flex-end',
            marginTop: Matrics.small,
            marginRight: Matrics.base,
            flex: 1
    
        },
        number:{
            fontSize: Matrics.doubleBase,
            color: color.text
        },
        btnPay:{
            backgroundColor: color.pay, 
            borderRadius: Matrics.small, 
            margin: Matrics.base 
        },
        txtPay:{
            fontSize: Matrics.doubleBase -2, 
            marginVertical: Matrics.small, 
            marginHorizontal: Matrics.doubleBase
        }
    
    });
}

export default CartStyles;