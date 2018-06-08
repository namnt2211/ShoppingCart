import React, { Component } from 'react';
import {
	StyleSheet,
    Text,
    Image,
	View, TouchableOpacity,
    ScrollView,SafeAreaView
} from 'react-native';
import {DrawerItems } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
var {isLogined} = this.props;
const CustomDrawerContentComponent = (props) => (
    <ScrollView >
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <View  style = {{backgroundColor: '#e0e2e5', height: 150, justifyContent: 'center', alignItems: 'center' }}>
            <View style = {{ height: 50, width: 50, borderRadius: 35, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }} >
                <Icon name="user" size={50} />
            </View>
            <Text>
                {isLogined.userName}
            </Text>
        </View>
        <DrawerItems  {...props} />
        <TouchableOpacity>
            <Text>
                Log out
            </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );

  const mapStateToProps = state => { 
    return {
        isLogined: state.isLogined
    }
}


export default connect(mapStateToProps, null)(CustomDrawerContentComponent);