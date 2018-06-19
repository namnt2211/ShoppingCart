import {StyleSheet, Dimensions} from 'react-native';

const { height, width } = Dimensions.get('window');
const widthImageProduct = (width - 60)/4;
const heightImageProduct = widthImageProduct * 1200 / 800;

const CartStyles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff'
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

export default CartStyles;