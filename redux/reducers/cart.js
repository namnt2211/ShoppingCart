import * as types from '../constant';
import { actAddToCart, actDeleteToCart, addNumberProduct, subNumberProduct } from './../actions/index'
var initialState = []

var findIndex = (Products, id) => {
    var result = -1;
    Products.forEach((Product, index) => {
        if (Product.id === id) {
            result = index;
        }
    });
    return result;
}

// tìm findIndex bằng 1 trong 2 cách


// var findProductInCart = (cart, product) => {
//     var index = -1;
//     if (cart.length > 0) {
//         for (var i = 0; i < cart.length; i++) {
//             if (cart[i].id === product.id)
//                 index = i;
//         }
//     }
//     return index;
// }

const cart = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
        
            var id= action.product.id;
            index = findIndex(state, id);
            // index = findProductInCart(state, action.product);
            if (index !== -1) {
                state[index].number = state[index].number + 1
                return [...state];
            }
            else
                return [
                    ...state,
                    action.product
                ];

        case types.DELETE_TO_CART:
            var id = action.id;
            var index = findIndex(state, id);
            state.splice(index, 1);
            return [
                ...state
            ];

        case types.ADD_NUMBER:
            var id = action.id;
            var index = findIndex(state, id);
            state[index].number = state[index].number + 1
            return [...state];

        case types.SUB_NUMBER:
            var id = action.id;
            var index = findIndex(state, id);
            state[index].number = state[index].number - 1
            return [...state];


        default:
            return [...state];

    }
}

export default cart;