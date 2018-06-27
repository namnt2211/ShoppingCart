
import React, { Component } from 'react';
import {
	StyleSheet,
    Text,
	View, 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderComponent from '../HeaderModule/HeaderComponent'
import BaseComponent from '../../components/BaseComponent'
import {connect} from 'react-redux'
class OrderHistory extends BaseComponent {
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		let drawerLabel = 'Lịch sử mua hàng';
		let drawerIcon = <Icon name="history" size={26} />
        // let drawerIcon = () => (
		// 	<Image
		// 		source = {require('../icon/checklist_26.png')}
		// 		style = {{width: 26, height: 26,/* tintColor: '#0067a7' */}}
        //     />
		// );
            
		return {drawerLabel, drawerIcon }
	}
	constructor(props) {
	  super(props)
	
	  this.state = {
		 color: this.getColor()
	  };
	};
	
	
	render() {
		console.log('order:', this.state.color)
		return (
            <View style={styles.container}>
				<HeaderComponent {...this.props}/>
				<View style = {{flex: 1,
					
					justifyContent: 'center',
					alignItems: 'center'
				}}>
					<Text style={styles.text}>
                        {JSON.stringify(this.state.color)}
					</Text>
				</View>
			</View>
        );
	}
}

mapStateToProps = (state) =>{
	return {
		mode: state.changeMode
	}
}

export default connect(mapStateToProps, null)(OrderHistory);
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#F5FCFF',
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: 'green'
	},
	textBtn: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	button: {
		backgroundColor: 'red',
		marginTop: 5,
		justifyContent: 'center',
		alignItems: 'center',
		width: 60,
		height: 30,
		borderRadius: 5
	}
});
