import {watchAddToCart} from '../containers/HomeModule/CartModule/CartSaga';
import { all } from 'redux-saga/effects';

function* mySaga(){
    yield all([
        watchAddToCart()
    ])
}

export default mySaga;