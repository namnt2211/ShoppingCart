import { StyleSheet, Platform } from 'react-native';
import Matrics from '../../Themes/Metrics';


const HeaderStyles = (color) =>{
    return StyleSheet.create({
        container: {
            
            height: 50,
            justifyContent: 'center',
            backgroundColor: color.lightBlue,
        },
        openDrawer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        btnMenu :{
            marginLeft: Matrics.base, 
            justifyContent: 'flex-start'
        },
        btnSearch:{
            marginRight: Matrics.base, 
            justifyContent: 'flex-end'
        }
    
    });
}

export default HeaderStyles;