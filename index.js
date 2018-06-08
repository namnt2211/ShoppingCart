import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import myReducer from './redux/reducers/index';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);



const store = createStore(myReducer);

const Project = () =>{
    return (
        <Provider store = {store} >
            <App/>
        </Provider>
    )
}



AppRegistry.registerComponent('ShoppingCart', () => Project);
