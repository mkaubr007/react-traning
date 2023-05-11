import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import {  fetchProducts } from "../redux-module/actions/product-action";

const ProductList = () => {

  const products = useSelector(state => state.allProducts.products)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h2 className="text-center">All Photos</h2>
      <div class="row">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
