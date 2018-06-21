import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { ADD_TO_CART, ADD_NUMBER, ADD_PRODUCT, ADD_NUM } from '../../../redux/constant';

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
    var product = action.product;
    var index = yield call(findIndex, getCart, id);
    if (index !== -1) {
        yield put({type: ADD_NUMBER, index})
    }
    else
        yield put({type: ADD_PRODUCT,product})

}



export function* watchAddToCart(){    
    yield takeEvery(ADD_TO_CART, addToCart)
}

