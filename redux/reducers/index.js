import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import Logined from './isLogined';
import searchProduct from './searchProduct';


const myReducer = combineReducers({
    products, // product: product
    cart,
    Logined,
    searchProduct
})

export default myReducer;