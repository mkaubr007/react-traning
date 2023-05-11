import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";
import Endpoints from "../../api/Endpoints";

const CategoryList = () => {
    const [categories, setCategories] = useState([])

    const fetchData = () => {
        axios
        .get(Endpoints.CATEGORY_URL)
        .then((response) => setCategories(response.data.data))
        .catch((error) => console.log(error));
    };
    
    useEffect(() => {
        fetchData();
    },[])

    return (
        <div>
            <h2 className="text-center">All Category</h2>
            <div className="row">
                {
                    categories.map((category) => (
                        <Category key={category.catId} data={category}/>
                    ))
                }
            </div>
        </div>
    )
}
export default CategoryList;