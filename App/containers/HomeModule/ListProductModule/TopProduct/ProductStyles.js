import { StyleSheet,Dimensions } from 'react-native';
import Colors from '../../../../Themes/Colors';
import Fonts from '../../../../Themes/Fonts';
import Matrics from '../../../../Themes/Metrics';

const { height, width } = Dimensions.get('window');
const widthImageProduct = (width - 60) / 2;
const heightImageProduct = widthImageProduct * 1920 / 1080;

const ProductStyles = StyleSheet.create({

    container: {
        margin: Matrics.base,
        backgroundColor: Colors.white
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
        color: Colors.gray,
        fontSize: 20,

    },
    ImageProduct: {
        width: widthImageProduct,
        height: heightImageProduct
    },
    ProductContainer:{
        marginHorizontal: Matrics.base,
        elevation: Matrics.small,
        paddingBottom: Matrics.base,
        width: widthImageProduct,
        borderWidth: 0.1,
        marginBottom: Matrics.doubleBase,
       

    },
    nameProduct: {
        marginLeft: Matrics.base,
    },
    priceProduct: {
        marginLeft: Matrics.base,
    }

});

export default ProductStyles;