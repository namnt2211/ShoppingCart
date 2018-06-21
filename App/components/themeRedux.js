import * as types from '../redux/constant';
initialState = false;
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