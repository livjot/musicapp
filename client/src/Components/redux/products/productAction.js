import Axios from 'axios';



//Get all products
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
export const GET_ALL_PRODUCTS_FAILURE = 'GET_ALL_PRODUCTS_FAILURE';

//Get single products
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE';

//Create product
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';

//Update product
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';

//Delete product
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

//Update input
export const UPDATE_INPUT = 'UPDATE_INPUT';
export const UPDATE_INPUT_SUCCESS = 'UPDATE_INPUT_SUCCESS';
export const UPDATE_INPUT_FAILURE = 'UPDATE_INPUT_FAILURE';

//get all products

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_ALL_PRODUCTS });
            let dataUrl = 'http://localhost:3031/api/products';
            let response = await Axios.get(dataUrl);
            dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: response.data });
        }
        catch (error) {
            dispatch({ type: GET_ALL_PRODUCTS_FAILURE, payload: error })
        }

    }
}


//create a product
export const createProduct = (product) => {

    return async (dispatch) => {

        try {
            dispatch({ type: CREATE_PRODUCT });
            let dataUrl = "http://localhost:3031/api/products";
            let response = await Axios.post(dataUrl, product);
            dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: response.data })

        }
        catch (error) {
            dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error })
        }
    }
}


// get single product

export const getProduct = (productId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_PRODUCT })
            let dataUrl = `http://localhost:3031/api/products/${productId}`;
            let response = await Axios.get(dataUrl);
            dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data });
        }
        catch (error) {
            dispatch({ type: GET_PRODUCT_FAILURE, payload: error });
        }
    }
}


//updateInput

export const updateInput = (key, value) => {

    return {
        type: UPDATE_INPUT,
        payload: { key, value }

    }

}

// update product
export const updateProduct = (productId, product) => {

    return async (dispatch) => {

        try {
            dispatch({ type: UPDATE_PRODUCT });
            let dataUrl = `http://localhost:3031/api/products/${productId}`;
            let response = await Axios.put(dataUrl, product);
            dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: response.data })

        }
        catch (error) {
            dispatch({ type: UPDATE_PRODUCT_FAILURE, payload: error });
        }
    }
}

// delete product
export const deleteProduct = (productId) => {

    return async (dispatch) => {

        try {
            dispatch({ type: DELETE_PRODUCT });
            let dataUrl = `http://localhost:3031/api/products/${productId}`;
            let response = await Axios.delete(dataUrl);
            dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: response.data })
            dispatch(getAllProducts());

        }
        catch (error) {
            dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error });
        }
    }
}