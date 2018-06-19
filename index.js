import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import myReducer from './App/redux/reducers/index';
import mySaga from './App/sagas/mySaga';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(myReducer, applyMiddleware(sagaMiddleware));

const Project = () =>{
    return (
        <Provider store = {store} >
            <App/>
        </Provider>
    )
}

sagaMiddleware.run(mySaga);

AppRegistry.registerComponent('ShoppingCart', () => Project);
