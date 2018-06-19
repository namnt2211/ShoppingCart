
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import ContactStyles from './ContactStyles';
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
            <View style={ContactStyles.container}>
               <Text>
                Contact
               </Text>
            </View>
        );
    }
}
