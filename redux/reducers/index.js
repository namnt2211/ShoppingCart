import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';


const myReducer = combineReducers({
    products, // product: product
    cart,
    isLogined
})

export default myReducer;