
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';

import {connect} from 'react-redux';

import FlatListItem from './FlatListItem';
import TopProduct from './topProduct';
import Category from './Category'
class Products extends Component {
    
    render() {
       
        return (
            <ScrollView style={styles.container}>

                <Category/>
                <TopProduct/>
                
                {/* <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Details')}
                >
                    <Text>
                        Go to Details
                    </Text>
                </TouchableOpacity>

                <FlatList
                    keyExtractor={(item, index) => item.name}
                    data={this.props.products}
                    renderItem={
							({ item, index }) => {
								return (
									<FlatListItem item= {item}/>
								);
							}
						}
                >
                </FlatList> */}
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});

const mapStateToProps  = state =>{
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(Products);