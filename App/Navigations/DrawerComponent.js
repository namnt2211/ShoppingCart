
import React from 'react';
import {
    Dimensions,

} from 'react-native';
import InfoComponent from '../containers/UserModule/InformationUser/Info'
import OrderHistory from '../containers/OrderHistoryModule/OrderHistory'
import {DrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import CustomDrawerContentComponent from '../containers/SlideMenu/SlideMenu';
import Icon from 'react-native-vector-icons/FontAwesome'
import TabComponent from './tabComponents';
// Screen size
var {height, width} = Dimensions.get('window');

let routeConfigs = {
    'Index':{ screen: TabComponent,
        navigationOptions: ({ navigation }) => ({
            drawerLabel: 'Trang chủ',
            drawerIcon: <Icon name="home" size={26} />
         
        })},
    'OrderHistory':{screen:OrderHistory},
    'InfoComponent':{
        screen: InfoComponent
    },
}

let drawerNavigationConfig = {
    initialRouteName: 'Index',
    drawerWidth: width*3/4,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent : (props) => <CustomDrawerContentComponent {...props}/>,
    // contentOptions: {
    //     activeTintColor: '#e91e63',
    //     itemsContainerStyle: {
    //       marginVertical: 0,
    //     },
    //     iconContainerStyle: {
    //       opacity: 1
    //     }
    //   }
    //order: [Home, Cloud, Info, Setting],
}

export default DrawerScreen = DrawerNavigator(routeConfigs, drawerNavigationConfig);



