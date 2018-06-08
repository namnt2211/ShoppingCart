
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View, Button, TouchableOpacity,
    ActivityIndicator,
    TextInput,
    FlatList
} from 'react-native';
import * as actions from '../redux/actions/index'

import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from 'react-native-searchbar';
import {connect} from 'react-redux';

import Search from './Search'
class HeaderComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            results: []
        }
    }

    _handleResults = (results) => {
        this.setState({ results });
        this.props.search(results)
        
    }

    render() {

        const {products, navigation, search } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.openDrawer} >
                    <TouchableOpacity
                        style={{ marginLeft: 10, justifyContent: 'flex-start' }}
                        onPress={() => {
                            navigation.openDrawer();
                            // navigation.closeDrawer() // navigation.toggleDrawer()
                        }}
                    >
                        <Icon name="list-ul" size={26} color="#6a6b6d" />

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ marginRight: 10, justifyContent: 'flex-end' }}
                        onPress={() => this.searchBar.show()}
                    >
                        <Icon name="search" size={26} color="#6a6b6d" />
                    </TouchableOpacity>
                </View>
                <SearchBar
                    ref={(ref) => this.searchBar = ref}
                    autoCorrect = {false}
                    data = {products}
                    handleResults={this._handleResults}  
                    onSubmitEditing = {() => this.searchBar.hide()}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#abc9fc',
       


    },
    openDrawer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

});

const mapStateToProps  = state =>{
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) =>{  
    return{
        search: (name) => dispatch(actions.searchProduct(name)),
       
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);