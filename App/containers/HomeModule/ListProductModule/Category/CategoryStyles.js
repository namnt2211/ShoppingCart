import { StyleSheet,Dimensions } from 'react-native';
import {Colors1} from '../../../../Themes/Colors';
import Fonts from '../../../../Themes/Fonts';
import Matrics from '../../../../Themes/Metrics';

const { height, width } = Dimensions.get('window');
export const widthSwiper = width - 28;
export const heightSwiper = 200;

const CategoryStyles = (color) =>{
	return StyleSheet.create({
		container: {
			marginHorizontal: Matrics.small,
			height: 250,
			backgroundColor: color.white,
			elevation: Matrics.small,
			marginVertical: Matrics.small,
			shadowColor: 'black',
			shadowOpacity: 0.3,
			shadowOffset: {
				width: Matrics.small,
				height: Matrics.small
			},
	
		},
		title: {
			color: color.gray,
			fontSize: Matrics.doubleBase,
			marginVertical: Matrics.small
		},
		titleProduct: {
			justifyContent: 'center',
			alignItems: 'center',
	
	
		},
		body: {
			justifyContent: 'center',
			alignItems: 'center',
			marginHorizontal: Matrics.small,
			elevation: Matrics.small,
			height: 200,
			borderWidth: 0.1,
	
		},
		ImageStyle: {
			height: 200,
			width: widthSwiper, 
			justifyContent: 'center',
			alignItems: 'center',
		}
	});
}

export default CategoryStyles;