import * as types from '../constant';

export const actAddToCart = (product) =>{
    return {
        type: types.ADD_TO_CART,
        product
    }
}

export const actDeleteToCart = (id) =>{
    return {
        type: types.DELETE_TO_CART,
        id
    }
}

export const addNumberProduct = (id) =>{
    return {
        type: types.ADD_NUMBER,
        value: 1,
        id
    }
}
export const subNumberProduct = (id) =>{
    return {
        type: types.SUB_NUMBER,
        value: 1,
        id
        
    }
}

export const isLogined = (userName) =>{
    return {
        type: types.LOGINED,
        userName
    }
}

export const logout = () =>{
    return {
        type: types.LOGOUT,
    }
}

export const searchProduct = (products) =>{
    return {
        type: types.SEARCH_PRODUCT,
        products
    }
}