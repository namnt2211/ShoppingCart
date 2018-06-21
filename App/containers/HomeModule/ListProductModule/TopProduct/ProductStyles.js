import { StyleSheet,Dimensions } from 'react-native';
import Fonts from '../../../../Themes/Fonts';
import Matrics from '../../../../Themes/Metrics';
import Colors, {Colors2} from '../../../../Themes/Colors';

const { height, width } = Dimensions.get('window');
const widthImageProduct = (width - 60) / 2;
const heightImageProduct = widthImageProduct * 1920 / 1080;

const ProductStyles = (color) =>{
    return StyleSheet.create({

        container: {
            margin: Matrics.base,
            backgroundColor: color.white
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
            color: color.dark,
            fontSize: Matrics.doubleBase,
    
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
        infoProduct:{
            flexDirection: 'row', 
            justifyContent: 'space-around', 
            alignItems: 'center' 
        },
        nameProduct: {
            marginLeft: Matrics.base,
            color: color.gray
        },
        priceProduct: {
            marginLeft: Matrics.base,
            color: color.gray
        }
    
    });
}

export default ProductStyles;