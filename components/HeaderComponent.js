
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View, Button, TouchableOpacity,
    ActivityIndicator,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Search from './Search'
export default class HeaderComponent extends Component {


    render() {

        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.openDrawer} >
                    <TouchableOpacity
                        style={{ marginLeft: 10, justifyContent: 'flex-start' }}
                        onPress={() => {
                            const { navigation } = this.props;
                            navigation.openDrawer();
                            // navigation.closeDrawer() // navigation.toggleDrawer()
                        }}
                    >
                        <Icon name="list-ul" size={26} color="#2E272B" />

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ marginRight: 10, justifyContent: 'flex-end' }}
                    // onPress={() => navigation.navigate('addNews')}
                    >
                        <Icon name="user" size={26} color="#2E272B" />
                    </TouchableOpacity>
                </View>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        
        backgroundColor: '#abc9fc',
       


    },
    openDrawer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

});