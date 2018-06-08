
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ImageBackground
} from 'react-native';
import Swiper from 'react-native-swiper';

const { height, width } = Dimensions.get('window');
const widthImage = width - 28;
export default class Category extends Component {
    render() {
        return (
            <View style={styles.container} elevation= {5} >

                <View style={styles.titleProduct} >
                    <Text style={styles.title}>
                        CATEGORY
                    </Text>
                </View>

                <View style={styles.body} >
                    <Swiper height={200} width={widthImage} >
                        <ImageBackground style={styles.ImageStyle} source={require('../../image/cs1.jpg')}>
                            <Text style = {styles.title} >
                               Product
                            </Text>
                        </ImageBackground>
                        <ImageBackground style={styles.ImageStyle} source={require('../../image/cs2.jpg')}>
                            <Text style = {styles.title} >
                               Product
                            </Text>
                        </ImageBackground>
                        <ImageBackground style={styles.ImageStyle} source={require('../../image/cs1.jpg')}>
                            <Text style = {styles.title} >
                               Product
                            </Text>
                        </ImageBackground>
                        
                    </Swiper>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        height: 250,
        backgroundColor: '#e0e2e5',
        elevation: 5,
        marginVertical: 5,

    },
    title:{
        color: "#a4a4a5",
        fontSize: 20,
        marginVertical: 5
    },
    titleProduct:{
        justifyContent: 'center',
        alignItems: 'center',


    },
    body:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        elevation: 5,
       height: 200,
        borderWidth: 0.1,

    },
    ImageStyle: {
        height: 200,
        width: widthImage, 
        justifyContent: 'center',
        alignItems: 'center',
    }
});
