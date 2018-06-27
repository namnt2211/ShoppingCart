import * as types from '../redux/constant';
const initialState = true;
const changeMode = (state = initialState, action) =>{
    switch (action.type) {
        case types.CHANGE_MODE:
            state = !state;            
            return state;

        default:
            return state;
    }
}

export default changeMode;
