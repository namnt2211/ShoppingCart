import * as types from '../constant';
import {isLogined, logout } from './../actions/index';

var initialState = {
    status: false,
    userName: ''
}

const Logined = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGINED:
            
            return {
                status: true,
                userName: action.dataUser
            };

        case types.LOGOUT:
            return {
                status: false,
                userName: ''
            }
        default:
            return [...state];

    }
}

export default Logined;