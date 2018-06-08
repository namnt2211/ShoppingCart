
import React, { Component } from 'react';
import {

  StyleSheet,
} from 'react-native';



import TabComponents from './components/tabComponent/tabComponents';
import TopProduct from './components/tabComponent/topProduct';
import Category from './components/tabComponent/Category'
import DrawerScreen from './components/drawerComponents/DrawerComponent'

import HeaderComponent from './components/HeaderComponent'
export default class App extends Component {
  render() {
    return  <DrawerScreen/>
      {/* <TabComponents/> */}
      {/* <DrawerScreen/> */}
      {/* <ScrollView style={styles.container} >
      <Category/>
      <TopProduct/>
      
      </ScrollView> */}
     
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e2e5',
  }
});
