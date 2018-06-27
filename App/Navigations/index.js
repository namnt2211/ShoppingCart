
import React from 'react';
import {
  StyleSheet,
  View, Platform
} from 'react-native';
import HeaderComponent from '../containers/HeaderModule/HeaderComponent'
import TabComponents from './tabComponents';


export default Index = () =>(
  <View style={Styles.container}>
        <HeaderComponent/>
        <TabComponents/>
      </View>
)

const Styles = StyleSheet.create({
  container:{
    flex: 1
  }
})