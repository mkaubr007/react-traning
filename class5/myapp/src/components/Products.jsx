import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product"

const Products = () => {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = () => {
        axios
        .get("https://fakestoreapi.com/products")
        .then((response) => setProducts(response.data))
        .catch((error) => {
            console.log(error);
        })
    }

   

    return (
        <div>
            <h2 className="text-center">All Products</h2>
            <div className="row">
                {
                    Products.map((product) => (
                        <Product data= {product}/>
                    ))
                }
            </div>
        </div>
        
    )
}
export default Products;