
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Contact extends Component {
    static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;

		let tabBarLabel = 'Contact';
		let tabBarIcon = () => (
			<Icon name="address-book" size={26} />
		);

		return { tabBarLabel, tabBarIcon }
	}
   
    render() {
        return (
            <View style={styles.container}>
               <Text>
                Contact
               </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
