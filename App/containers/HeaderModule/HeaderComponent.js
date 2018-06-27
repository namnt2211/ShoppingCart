
import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    
} from 'react-native';
import * as actions from '../../redux/actions/index'
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from 'react-native-searchbar';
import {connect} from 'react-redux';
import HeaderStyles from './HeaderStyles';
import BaseComponent from '../../components/BaseComponent'

class HeaderComponent extends BaseComponent {

    constructor(props){
        super(props);
        this.state = {
            results: [],
            color: this.getColor()
        }
    }

    _handleResults = (results) => {
        this.setState({ results });
        this.props.search(results)
        
    }

    render() {

        const {products, navigation } = this.props;
        const styless = HeaderStyles(this.state.color);
        
        return (
            <View style={styless.container}>
                <View style={styless.openDrawer} >
                    <TouchableOpacity
                        style={styless.btnMenu}
                        onPress={() => {
                            navigation.openDrawer();
                            // navigation.closeDrawer() // navigation.toggleDrawer()
                        }}
                    >
                        <Icon name="list-ul" size={26} color= {this.state.color.black} />

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styless.btnSearch}
                        onPress={() => this.searchBar.show()}
                    >
                        <Icon name="search" size={26} color={this.state.color.black} />
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


const mapStateToProps  = state =>{
    return {
        products: state.products,
        mode : state.changeMode
    }
}

const mapDispatchToProps = (dispatch, props) =>{  
    return{
        search: (name) => dispatch(actions.searchProduct(name)),
       
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);