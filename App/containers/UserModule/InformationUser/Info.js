
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderComponent from '../../HeaderModule/HeaderComponent'

export default class InfoComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let drawerLabel = 'Thông tin khách hàng';
        let drawerIcon = <Icon name="info-circle" size={26} />

        return { drawerLabel, drawerIcon }
    }

    constructor(props) {
        super(props)

        this.state = {
            Username: '',
            Password: '',
            name: 'Nguyen Thanh Nam',
            email: 'namnt@gmail.com',
            editName: false,
            editEmail: false
        };
    };

    render() {


        return (
            <View style={styles.container}>
                <HeaderComponent {...this.props} />
                <View style={{ flexDirection: 'row', height: 150 }} >
                    <View style={{ backgroundColor: 'darkviolet', flex: 1, justifyContent: 'center', alignItems: 'center' }} >

                        <View style={{ backgroundColor: 'white', borderRadius: 60, height: 120, width: 120 }} >
                        </View>

                        <Text>
                            Edit
                        </Text>

                    </View>

                    <View style={{ flexDirection: 'column', backgroundColor: 'violet', flex: 2 }} >

                        <View  >

                            <Text style={{ marginLeft: 15, marginVertical: 5 }}  >
                                Tên tài khoản
                            </Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}  >
                                
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, width: 180, marginRight: 10 }}
                                    onChangeText={(name) => this.setState({ name })}
                                    value={this.state.name}
                                    underlineColorAndroid="transparent"
                                    editable={this.state.editName}

                                />

                                <TouchableOpacity
                                    onPress={() => this.setState({ editName: !this.state.editName })}
                                >
                                    <Text>
                                        Edit
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View  >
                            <Text style={{ marginLeft: 15, marginVertical: 5 }}  >
                                Email
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}  >
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, width: 180, marginRight: 10 }}
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    underlineColorAndroid="transparent"
                                    editable={this.state.editEmail}

                                />

                                <TouchableOpacity
                                    onPress={() => this.setState({ editEmail: !this.state.editEmail })}
                                >
                                    <Text>
                                        Edit
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

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
