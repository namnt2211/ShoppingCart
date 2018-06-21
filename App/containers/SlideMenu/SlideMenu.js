import React, { Component } from 'react';
import {
    Text,
	View, TouchableOpacity,
    ScrollView,SafeAreaView
} from 'react-native';
import {DrawerItems } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import ModeTheme from '../../components/ModeThemes';
import {Colors1, Colors2} from '../../Themes/Colors'
import SlideMenuStyles from "./SlideMenuStyles";
import { connect } from 'react-redux';

class CustomDrawerContentComponent extends Component {
    render(){
        var {mode} = this.props;
        var color = mode === true ? Colors1 : Colors2;
		const styless = SlideMenuStyles(color);
        return (
        <ScrollView style = {styless.container} >
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
              <View  style = {styless.ViewUser}>
                  <View style = {styless.IconUser} >
                      <Icon name="user" size={50} />
                  </View>
                  <Text>
                      {/* {isLogined.userName} */}
                      Đăng nhập
                  </Text>
              </View>
              
              <DrawerItems  {...this.props} />
              <ModeTheme {...this.props} />
              
            </SafeAreaView>
          </ScrollView>
            
        )
    }
}

// var {isLogined} = this.props;
// const CustomDrawerContentComponent = (props) => (
//     <ScrollView >
//       <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
//         <View  style = {{backgroundColor: '#e0e2e5', height: 150, justifyContent: 'center', alignItems: 'center' }}>
//             <View style = {{ height: 50, width: 50, borderRadius: 35, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }} >
//                 <Icon name="user" size={50} />
//             </View>
//             <Text>
//                 {/* {isLogined.userName} */}
//                 Đăng nhập
//             </Text>
//         </View>
        
//         <DrawerItems  {...props} />
//         <ModeTheme {...props} />
//         <TouchableOpacity>
//             <Text>
//                 Log out
//             </Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//     </ScrollView>
//   );

  const mapStateToProps = state => { 
    return {
        // isLogined: state.Logined
        mode: state.changeMode
    }
}


export default connect(mapStateToProps, null)(CustomDrawerContentComponent);