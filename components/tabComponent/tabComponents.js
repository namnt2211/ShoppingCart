import { createTabNavigator, StackNavigator } from 'react-navigation';

import React, { Component } from 'react';

import CartComponent from './cart';
import Contact from './contact';
import Products from './products';
import DetailsItem from './detailsItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from '../HeaderComponent'

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
        activeTintColor : 'red',
        indicatorStyle :{
            backgroundColor: 'blue'
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