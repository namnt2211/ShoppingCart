import { call, put, select, takeEvery } from 'redux-saga/effects'
import { ADD_TO_CART, ADD_NUMBER } from '../../../redux/constant';

var findIndex = (Products, id) => {
    var result = -1;
    Products.forEach((Product, index) => {
        if (Product.id === id) {
            result = index;
        }
    });
    return result;
}

function* addToCart(action) {
    var getCart = yield select(state => state.cart)
    var id= yield action.product.id;
    var index = yield call(findIndex, getCart, id);
    console.log(action.product)
    // if (index !== -1) {
    //     yield put({type: ADD_NUMBER, action: action.product})
    // }
    // else
        // yield put({type: ADD_TO_CART,action: action.product})

}

export function* watchAddToCart(){    
    yield takeEvery(ADD_TO_CART, addToCart)
}

