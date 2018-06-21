
import React, { Component } from 'react';
import {
    View,
    Switch,
    Text
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/index';
import {DrawerActions} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'


class ModeThemes extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         mode: true
      };
    };

    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Chế độ ban đêm';
		return {drawerLabel }
    }
    
    _changeMode = () =>{
        this.props.changeMode();
       this.setState({
           mode: !this.state.mode
       })
       this.props.navigation.dispatch(DrawerActions.closeDrawer());
    }
  render() {
    return(
        <View style = {{flex: 1, flexDirection: 'row', marginHorizontal: 18}} >
            <Icon name="eye" size={26} />
            <Text style = {{marginLeft: 30, marginRight: 30}} >
                Chế độ ban đêm
            </Text>
            <Switch
                
                onValueChange = {() =>this._changeMode()}
                value = {this.state.mode}

            >

            </Switch>


        </View>

    )
  }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        changeMode: () => dispatch(actions.changeModeAct() ),
       
    }
}

export default connect(null, mapDispatchToProps )(ModeThemes);