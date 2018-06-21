
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import HeaderComponent from '../containers/HeaderModule/HeaderComponent'
import TabComponents from './tabComponents';


export default Index = () =>(
  <View style={{flex: 1}}>
        <HeaderComponent/>
        <TabComponents/>
      </View>
)