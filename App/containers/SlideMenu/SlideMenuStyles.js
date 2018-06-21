import { StyleSheet } from 'react-native';

const SlideMenuStyles = (color) =>{
	return StyleSheet.create({
        container:{
            backgroundColor: color.slide
        },

        ViewUser: {
            backgroundColor: '#e0e2e5', 
            height: 150, 
            justifyContent: 'center',
            alignItems: 'center' 
        },
        IconUser:{ 
            height: 50, 
            width: 50, 
            borderRadius: 35, 
            backgroundColor: color.white, 
            justifyContent: 'center', 
            alignItems: 'center' 
        },
        txtUser:{

        }

	});
}
export default SlideMenuStyles;