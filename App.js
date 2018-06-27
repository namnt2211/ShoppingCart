
import React, { Component } from 'react';
import {
  StyleSheet,
  View, Platform
} from 'react-native';
import DrawerScreen from './App/Navigations/DrawerComponent';

export default class App extends Component {
  render() {
    return  (
      <View style = {styles.container} >
        <DrawerScreen/>
      </View>
    )
     
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0 ,
  }
})