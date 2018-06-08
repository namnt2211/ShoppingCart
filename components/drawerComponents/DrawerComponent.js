
import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
    View,
    Dimensions,
    ScrollView,

} from 'react-native';
import InfoComponent from './Info'
import OrderHistory from './OrderHistory'
import {DrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import CustomDrawerContentComponent from './SlideMenu'
import TabComponent from '../tabComponent/tabComponents'
// Screen size
var {height, width} = Dimensions.get('window');

let routeConfigs = {
    'Index':{ screen: TabComponent},
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



