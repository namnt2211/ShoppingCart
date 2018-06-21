import { createTabNavigator, StackNavigator } from 'react-navigation';

import React, { Component } from 'react';

import CartComponent from '../containers/HomeModule/CartModule/cart';
import Contact from '../containers/HomeModule/ContactModule/contact';
import Products from '../containers/HomeModule/ListProductModule/TopProduct/products';
import DetailsItem from '../containers/HomeModule/DetailsProductModule/detailsItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from '../containers/HeaderModule/HeaderComponent';
let routeConfigs = {
    "Home": {
        screen: Products,
        
            navigationOptions: ({ navigation }) => ({
                tabBarIcon : <Icon name="home" size={26} />
             
            })
    },
    'Cart': {
        screen: CartComponent
    },

    'Contact': {
        screen: Contact
    },
}

let TabNavigatorConfig = {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        indicatorStyle :{
            backgroundColor: 'darkviolet'
        },
        labelStyle: {
            fontSize: 13,
        },
        style: {
            backgroundColor: '#abc9fc',
            padding: 0
        },
        showLabel: false,
        showIcon: true
    },

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



const TabComponents = createTabNavigator(routeConfigs, TabNavigatorConfig); 
export default TabComponent = StackNavigator({

    "Profile": {

        screen: TabComponents,
        navigationOptions:({navigation})=>(
            {
                header :(props) => <HeaderComponent {...props}/>
                
            }
        )
        
    },
    "Details": {
        screen: DetailsItem
    }
})