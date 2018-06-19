import { SEARCH_PRODUCT } from "../../redux/constant";

const searchProduct = (state = [], action) =>{
    switch(action.type) {
        case SEARCH_PRODUCT:
            
            return action.products
        default:
            return state;
    }
}

export default searchProduct;