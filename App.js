
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import {createStore} from 'redux';
import myReducer from './redux/reducers/index';
import {Provider} from 'react-redux';
import TabComponents from './components/tabComponent/tabComponents';
import TopProduct from './components/tabComponent/topProduct';
import Category from './components/tabComponent/Category'
import DrawerScreen from './components/drawerComponents/DrawerComponent'
const store = createStore(myReducer);
import HeaderComponent from './components/HeaderComponent'
export default class App extends Component {
  render() {
    return <Provider store = {store}>
      {/* <TabComponents/> */}
      {/* <DrawerScreen/> */}
      {/* <ScrollView style={styles.container} >
      <Category/>
      <TopProduct/>
      
      </ScrollView> */}
      <View style = {{flex: 1}} >
      <DrawerScreen/>
      </View>
    </Provider> ;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e2e5',
  }
});
