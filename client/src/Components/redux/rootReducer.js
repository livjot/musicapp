import { combineReducers } from "redux";
import { productsFeatureKey, productReducer} from './products/productReducer'; 


let rootReducer = combineReducers({
    [productsFeatureKey] : productReducer
})


export {rootReducer};