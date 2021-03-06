import {combineReducers} from 'redux';
import products from '../../containers/HomeModule/ListProductModule/productsRedux';
import cart from '../../containers/HomeModule/CartModule/cartRedux';
import Logined from '../../containers/UserModule/LoginRedux';
import searchProduct from '../../containers/SearchModule/searchProduct';
import changeMode from '../../components/themeRedux'
const myReducer = combineReducers({
    products, // product: product
    cart,
    Logined,
    searchProduct,
    changeMode
})

export default myReducer;