import * as productAction from './productAction';


export const productsFeatureKey = "products";

let initialState = {
    errorMessage: "",
    products: [],
    product: {},
};

const productReducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        //get all products
        case productAction.GET_ALL_PRODUCTS:
            return {
                ...state,
            };

        //get all products success
        case productAction.GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state, products: payload,
            };

        //get all products failure
        case productAction.GET_ALL_PRODUCTS_FAILURE:
            return {
                ...state, errorMessage: payload,
            };



        //create product
        case productAction.CREATE_PRODUCT:
            return {
                ...state,
            };

        //create product success
        case productAction.CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
            };

        //create product failure
        case productAction.CREATE_PRODUCT_FAILURE:
            return {
                ...state,
            };

        //get single product

        case productAction.GET_PRODUCT:
            return {
                ...state,
            };

        //get single product success

        case productAction.GET_PRODUCT_SUCCESS:
            return {
                ...state,

                product: payload,
            };

        //get single product failure

        case productAction.GET_PRODUCT_FAILURE:
            return {
                ...state,

                errorMessage: payload,
            };

        //update input

        case productAction.UPDATE_INPUT:
            return {
                ...state,
                product: {
                    ...state.product,
                    [payload.key]: payload.value,
                },
            };

        // update product

        case productAction.UPDATE_PRODUCT:
            return {
                ...state,
            };

        // update product success

        case productAction.UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
            };

        // update product failure

        case productAction.UPDATE_PRODUCT_FAILURE:
            return {
                ...state,
            };


        //delete product
        case productAction.DELETE_PRODUCT:
            return {
                ...state,
            };

        //delete product success
        case productAction.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
            };

        //delete product failure
        case productAction.DELETE_PRODUCT_FAILURE:
            return {
                ...state,
            };


        default:
            return state;



    }
}


export { productReducer };