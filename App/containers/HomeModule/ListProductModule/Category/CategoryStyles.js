import { StyleSheet,Dimensions } from 'react-native';
import Colors from '../../../../Themes/Colors';
import Fonts from '../../../../Themes/Fonts';
import Matrics from '../../../../Themes/Metrics';

const { height, width } = Dimensions.get('window');
export const widthSwiper = width - 28;
export const heightSwiper = 200;

const CategoryStyles = StyleSheet.create({
	container: {
		marginHorizontal: 5,
		height: 250,
		backgroundColor: Colors.white,
		elevation: 5,
		marginVertical: 5,

	},
	title: {
		color: Colors.gray,
		fontSize: 20,
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

export default CategoryStyles;