import {watchAddToCart,watchAddNumber} from '../containers/HomeModule/CartModule/CartSaga';
import {addNumber} from '../containers/HomeModule/CartModule/CartSaga';
import { all } from 'redux-saga/effects';

function* mySaga(){
    yield all([
        watchAddToCart(),
        watchAddNumber()
    
    ])
}

export default mySaga;