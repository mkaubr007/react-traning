import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';
import {addProduct, removeProduct} from '../redux-module/actions/product-action'

const ProductDetail = () => {
    const { id } = useParams()
    //const [ product, setProduct ] = useState({})
    const product = useSelector(state => state.product)
    const dispatch = useDispatch();

    const fetchData = () => {
        axios.get('https://orca-app-jhg4l.ondigitalocean.app/api/products/'+ id)
        .then(response => {
            //setProduct(response.data.data)
            dispatch(addProduct(response.data.data))
        })
        .catch(error => console.log(error))
    }
    useEffect(() => {
        // mount
        if(id && id !== '') fetchData()
        // unmount
        return () => {
            dispatch(removeProduct())
        }
    }, [id])

    return(
        <div>
            <h2 className='text-center'>Product Detail</h2>
            <Product data={ product }  />
        </div>
    )
}
export default ProductDetail;