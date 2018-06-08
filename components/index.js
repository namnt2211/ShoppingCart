
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HeaderComponent from './HeaderComponent'
import TabComponents from './tabComponent/tabComponents';


export default Index = () =>(
  <View style={styles.container}>
        <HeaderComponent/>
        <TabComponents/>
      </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});
