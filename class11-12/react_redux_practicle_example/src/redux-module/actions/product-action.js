import axios from "axios"
import { ActionTypes } from "../constants/action-types"

export const fetchProducts = () => async (dispatch) => {
    const response = await axios.get('https://orca-app-jhg4l.ondigitalocean.app/api/products')
    const data = await response.data;
   // console.log(data.data)
    dispatch({ type: ActionTypes.FETCH_PRODUCT, payload: data.data})
}


export const setProducts = (products) => {
    return{
        type: ActionTypes.SET_PRODUCT,
        payload: products
    }
}

export const addProduct = (product) => {
    return{
        type: ActionTypes.ADD_PRODUCT,
        payload: product
    }
}

export const removeProduct = () => {
    return{
        type: ActionTypes.REMOVE_PRODUCT
    }
}