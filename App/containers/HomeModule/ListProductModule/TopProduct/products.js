
import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
} from 'react-native';

import TopProduct from './topProduct';
import Category from '../Category/Category';

export default class Products extends Component {
    
    render() {
       
        return (
            <ScrollView style={styles.container}>
                <Category/>
                <TopProduct/>                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
